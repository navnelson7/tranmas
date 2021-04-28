FROM alpine
RUN apk add --update nodejs nodejs-npm
RUN npm i -g serve
WORKDIR /app
COPY package*.json /app/
ENV REACT_APP_BACKEND_WS_URL=/v1/graphql
ENV REACT_APP_BACKEND_URL=/v1/graphql
ENV REACT_APP_BACKEND_FLASK=/flask/
ENV REACT_APP_WS=ws://localhost
RUN npm install
COPY . /app/
RUN npm run build
CMD [ "serve", "-s", "build"]