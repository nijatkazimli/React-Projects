FROM node:18-alpine

# Arrays-and-Objects
WORKDIR /Arrays-and-Objects/

COPY public/ /Arrays-and-Objects/public
COPY src/ /Arrays-and-Objects/src
COPY package.json /Arrays-and-Objects/

RUN npm install

CMD ["npm", "start"]