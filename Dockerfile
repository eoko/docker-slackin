FROM node:7.9

FROM node:boron

RUN yarn global add pm2

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app

RUN yarn install

ENV NODE_ENV=production

EXPOSE 3000

CMD ["pm2-docker", "processes.json"]