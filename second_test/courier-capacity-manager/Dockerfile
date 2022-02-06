FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "watch" ]