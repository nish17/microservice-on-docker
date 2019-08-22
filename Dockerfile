FROM node:11.10-alpine
RUN mkdir /src/app
WORKDIR /src/app
COPY ./package.json ./src/app/package.json
RUN npm install 
COPY . /src/app
EXPOSE 3000
CMD ["node","index.js", "./data/test.xlsx"]
