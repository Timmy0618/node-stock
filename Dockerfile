FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . ./


ENV DB_USER = "root"
ENV DB_PASS  = "123456"
ENV DB_NAME = "stock"
ENV  CLOUD_SQL_CONNECTION_NAME = "stock-react:us-central1:stock"

CMD ["npm","start"]