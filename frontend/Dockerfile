FROM node:19.8.1 AS builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@latest -g --silent
COPY . ./
RUN npm run build
ENTRYPOINT [ "npm", "start" ]
