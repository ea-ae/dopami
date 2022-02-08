# syntax=docker/dockerfile:1

# Common
FROM node:17.4-alpine3.15 AS base
EXPOSE 9001
ENV PATH /app/node_modules/.bin:$PATH

# Development
FROM base as dev
WORKDIR /app
COPY package*.json .
RUN npm install
# temp below
COPY . .
ENTRYPOINT npm run server

# Production
FROM base as prod
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm ci --only=production
