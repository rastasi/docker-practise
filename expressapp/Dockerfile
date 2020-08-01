FROM node:10.16.0-alpine
WORKDIR /usr/src/app
COPY . .
ENV PORT 80
EXPOSE 80
ENTRYPOINT npm install && npm run start