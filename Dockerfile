FROM node:current-alpine3.18

WORKDIR /app
ENV PORT 5000

COPY . .
RUN npm install

EXPOSE 5000
CMD ["npm", "run", "start"]