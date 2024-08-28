FROM node:22
WORKDIR /app
COPY packge*.json ./
RUN npm install
COPY . .
EXPOSE 2222
CMD [ "node", "server.js" ]