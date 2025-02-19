FROM node:18

WORKDIR /app-light-it

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]