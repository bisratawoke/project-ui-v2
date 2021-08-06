FROM nginx:alpine

WORKDIR /usr/bin/app

COPY ./out .

COPY ./default.conf /etc/nginx/conf.d/