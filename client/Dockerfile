# syntax=docker/dockerfile:1

# Common
FROM node:17.4-alpine3.15 AS base
EXPOSE 9001
ENV PATH /app/node_modules/.bin:$PATH

# Production
FROM base as prod
WORKDIR /app
VOLUME /app/dist
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run prod
