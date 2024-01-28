FROM node:18-alpine

# Components
WORKDIR /Components/

COPY public/ /Components/public
COPY src/ /Components/src
COPY package.json /Components/

RUN npm install

CMD ["npm", "start"]