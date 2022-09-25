FROM node:alpine

WORKDIR /opt
COPY ./package.json /opt/
RUN yarn install --production --no-lockfile
RUN apk add --upgrade --no-cache curl
