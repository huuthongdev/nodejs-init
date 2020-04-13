FROM node:12.16.1-alpine3.9
WORKDIR /app

RUN apk add --update \
    git \
    openssh-client

# Copying source files
COPY . .

# Install packages
RUN npm install

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]