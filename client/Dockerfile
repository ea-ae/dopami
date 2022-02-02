# syntax=docker/dockerfile:1

# Common
FROM node:17.4-alpine3.15 AS base
EXPOSE 9001
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package*.json .
RUN npm install

# Development
FROM base as dev
WORKDIR /app
ENTRYPOINT npm run server
# CMD ["npm", "run", "server"]
# CMD webpack serve --config webpack.dev.js

# Production
FROM base as prod
WORKDIR /app
COPY . .
RUN npm ci --only=production
