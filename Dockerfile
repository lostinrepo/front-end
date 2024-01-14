# Use the official Node.js image as a base image
FROM node:14

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

RUN npm install -g npm@7

COPY . /app/

RUN npm run build

EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
