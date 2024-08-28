FROM node:22.3.0
WORKDIR /src/task
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2222
CMD [ "node", "server.js" ]