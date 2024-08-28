FROM node:22
WORKDIR /src/task
COPY packge*.json ./
RUN npm install
COPY . .
EXPOSE 2222
CMD [ "node", "server.js" ]