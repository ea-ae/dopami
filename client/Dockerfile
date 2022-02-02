# syntax=docker/dockerfile:1

# Common
FROM node:17.4-alpine3.15 AS base

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json .

# Development
FROM base as dev

WORKDIR /app

RUN npm install
EXPOSE 9001
# CMD ["npm", "run", "server"]
# CMD webpack serve --config webpack.dev.js

# Production
FROM base as prod

WORKDIR /app
RUN npm ci --only=production
