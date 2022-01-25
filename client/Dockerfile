# Common
FROM node:17.4-alpine3.15

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json .

RUN npm install
EXPOSE 9001
CMD ["npm", "run server"]
