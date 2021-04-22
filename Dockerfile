FROM node:14 AS ltt-base
WORKDIR /app
COPY package*.json app.js ./
RUN npm install
RUN npm install nodemon --save
EXPOSE 3000
CMD ["npm", "start"]