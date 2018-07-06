FROM node:slim

COPY . /app/

WORKDIR /app/

RUN npm install

ENTRYPOINT ["npm" , "start"]
