FROM node:12.16.2

ARG SOURCE_DIR="."

RUN mkdir -p /srv/ensembl-docs-server

COPY ${SOURCE_DIR} /srv/ensembl-docs-server

WORKDIR /srv/ensembl-docs-server

RUN npm ci
RUN npm run

EXPOSE 3000

CMD [ "npm", "run", "start-server" ]
