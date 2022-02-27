FROM node:16-alpine as node
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn
EXPOSE 8091
CMD ["yarn", "start"]
