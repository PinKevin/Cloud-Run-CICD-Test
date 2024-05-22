FROM node:current-alpine3.18

RUN mkdir -p /opt/app
WORKDIR /opt/app

ENV PORT 5000

COPY package*.json ./
COPY . .

RUN npm install
EXPOSE 5000
CMD ["npm", "run", "start"]