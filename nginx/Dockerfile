# syntax=docker/dockerfile:1

FROM nginx:1.21 as base
WORKDIR /static
VOLUME /static
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf

