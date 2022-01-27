---
sidebarDepth: 2
title: '关于Git你需要知道的知识点'
tags: 
  - git
---
本文主要介绍了git使用SSH密钥、入门知识、分支管理以及常用命令，掌握了以下内容，你就可以在工作中轻松使用git了。

## SSH密钥
git使用https协议来推送代码时，你会发现每次pull，push的时候都需要你去手动输入密码，相当的烦。所以我们一般使用git协议来鉴权推送权限，这样一来我们就可以省去每次都需要输入密码的繁琐工作。使用git协议之前我们需要用到ssh密钥（下面会讲到如何生成密钥）

使用git协议总体来说需要三个步骤：
一、本地生成密钥对；
二、设置github上的公钥；
三、修改git的remote url 为git协议

### 1、生成密钥
大多数Git服务器都会选择使用SSH公钥来进行授权。系统中的每一个用户都必须提供一个公钥用于授权，如果没有的话就需要生成一个。生成公钥的过程在所有操作系统上都差不多。首先确认一下自己是否已经有了公钥。SSH公钥默认存储在账户的主目录下的～/.ssh目录。进去看看：
```shell
$ cd ~/.ssh 
$ ls
authorized_keys2  id_dsa       known_hosts config            id_dsa.pub
```
关键是看有没有 xxx 和 xxx.pub (xxx代表的是密钥名称，可自己定义默认为 id_rsa) 的一对文件。这里的.pub 后缀的文件就是公钥，另一个文件则是密钥。假设没有这些文件，或者干脆连.ssh目录都没有，可以用ssh-keygen来创建。
```shell
$ ssh-keygen -t rsa -C "your_email@youremail.com"

# Creates a new ssh key using the provided email # Generating public/private rsa key pair. 

# Enter file in which to save the key (/home/you/.ssh/id_rsa):

```
之后直接回车就可以了。然后，会提示你输入密码，如下：
```shell
Enter passphrase (empty for no passphrase): [Type a passphrase] 
# Enter same passphrase again: [Type passphrase again]

```
完了之后，大概是这样的界面
```shell
Your identification has been saved in /home/you/.ssh/id_rsa. 
# Your public key has been saved in /home/you/.ssh/id_rsa.pub. 
# The key fingerprint is: # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@youremail.com
```
到此你本地生成密钥对的工作就完成了，是不是非常的简单！

### 2、添加公钥到你的github账户中
2-1、查看你生成的公钥
```shell
$ cat ~/.ssh/id_rsa.pub  

ssh-rsa DDDDB3Nzajlfjlejlejlrifsniibiuliuljllkjljliqewrejom/BWDSU GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlE
LEVf4h9lFX5QVkbPppSwg0cda3 Pbv7kOdJ/MTyBlWXFCR+HAo3FXRHKJHKHdeeeeKHKHTFDESEKuuuugciLq8V6RjsNAQwdsdMFvSlVK/7XA t3FaoJoAsncM1Q9x5+3V
0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx NrRFi9wrf+M7Q== schacon@agadorlaptop.local

```
2-2、登录你的github账号。然后Account Settings -> 左侧点击SSH Keys -> 点击 Add SSH key
2-3、然后就是复制你的公钥内容，粘贴到 设置 SSH keys 界面的文本框中。title，根据自己的喜好填一个。
2-4、之后就是点击 add key，这样就完成了，接下来我们来验证一下key是不是工作正常
```shell
$ ssh -T git@github.com
# Attempts to ssh to github
```
如果看到如下提示，就表示你已经设置成功了。
```shell
Hi username! You've successfully authenticated, but GitHub does not # provide shell access.
```
### 3、修改你本地的ssh remote url
前提：
- 你已经在github中创建了一个空的仓库
- 将仓库clone到本地来
=================================
然后可以用 git remote -v 来查看当前的remote url, 如果采用的是https协议，如下：
```shell
$ git remote -v
origin https://github.com/someaccount/someproject.git (fetch)
origin https://github.com/someaccount/someproject.git (push)
```
我们可以看到这是使用https协议进行访问github的。
我们可以在我们对应的仓库中看到我们的ssh协议的url。类似如下：
```shell
git@github.com:someaccount/someproject.git

```
这时候可以用 git remote set-url 来调整你的url
```shell
git remote set-url origin git@github.com:someaccount/someproject.git

```
然后我们可以使用git remote -v 来确认一下。
```shell
$ git remote -v
origin https://git@github.com:someaccount/someproject.git (fetch)
origin https://git@github.com:someaccount/someproject.git (push)
```
至此，大功告成，如此以来你就可以省去输入密码的麻烦，也可以安全的进行 push，pull，fetch，checkout等操作了。

