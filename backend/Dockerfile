# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY server.js ./
COPY user-service.js ./
COPY users.json ./

RUN yarn add express

# add app
COPY . ./


# start app
CMD ["node", "server.js"]