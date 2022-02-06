FROM node:14-alpine

WORKDIR /usr/src/app

ENV DB_URI ${DB_URI}

COPY package*.json ./

RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "watch" ]