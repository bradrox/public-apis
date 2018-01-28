FROM node:carbon as app-build

WORKDIR /client
COPY ./client/ /client/
RUN npm install 
RUN npm run build -- --prod

FROM node:9.4.0-alpine
WORKDIR /server/app
COPY ./docker-entrypoint.sh /server/app/
COPY ./server/app/package.json /server/app/
COPY ./server/app/server.js /server/app/

RUN set -ex && \
    apk --no-cache add --update curl bash && \
    rm -rf /tmp/* /var/cache/apk/* && \
    npm install 

WORKDIR /server/static
COPY --from=app-build /client/dist/ /server/static/

EXPOSE 8080

ENTRYPOINT ["/server/app/docker-entrypoint.sh"]
