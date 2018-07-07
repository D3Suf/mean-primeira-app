# specify the node base image with your desired version node:<version>
FROM node
# replace this with your application's default port
EXPOSE 8888

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app