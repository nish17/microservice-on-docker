# FROM ubuntu:18.04
FROM node:11.10-alpine  
WORKDIR /src/app
COPY package.json package-lock.json /src/app/
RUN npm install 
COPY . /src/app
EXPOSE 3000
ENTRYPOINT ["node","index.js"]
