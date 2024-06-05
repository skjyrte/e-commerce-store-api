FROM node:22.2.0-alpine3.18
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install --omit-dev
COPY . .
EXPOSE 4000
CMD ["npm", "run", "prod"]