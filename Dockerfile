FROM node:18-alpine

WORKDIR "/app"

COPY build.sh package.json tsconfig.json ./

RUN chmod +x ./build.sh && sh build.sh 

RUN npm install npm@latest

RUN npm ci

COPY . .

CMD [ "npm", "run", "build" ]

# Expose the gRPC port
EXPOSE 50051