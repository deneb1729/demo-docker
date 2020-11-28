FROM node:14

LABEL maintainer="jairo@mail.com"

ENV APP_HOME /usr/src/app

WORKDIR $APP_HOME

COPY package*.json $APP_HOME/

RUN npm install \
    && npm install -g pm2 \
    && npm cache clean --force

EXPOSE 3000

COPY ./ $APP_HOME/

ENTRYPOINT [ "pm2-runtime", "app.js" ]
