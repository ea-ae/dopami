# syntax=docker/dockerfile:1

# Common
FROM node:17.4-alpine3.15 AS base
WORKDIR /app
EXPOSE 9001
ENV PATH /app/node_modules/.bin:$PATH

# Development
FROM base as dev
WORKDIR /app
COPY package*.json .
RUN npm install
ENTRYPOINT npm run server
# CMD ["npm", "run", "server"]
# CMD webpack serve --config webpack.dev.js

# Production
FROM base as prod
WORKDIR /app
COPY . .
RUN npm ci --only=production
