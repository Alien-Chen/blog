FROM node:12 as build-stage

LABEL maintainer=522864794@qq.com

# 创建一个工作区
WORKDIR /app

# 复制项目文件资源到镜像中
COPY . .
RUN yarn install --registry=https://registry.npm.taobao.org
RUN npm run docs:build

# 将dist 中的内容拷贝到 nginx中
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/docs/.vuepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]