FROM node:14.16.0

ARG SOURCE_DIR="."
ARG TARGET_DIR="/srv/ensembl-docs-server"

RUN mkdir -p ${TARGET_DIR}

COPY ${SOURCE_DIR} ${TARGET_DIR}

WORKDIR ${TARGET_DIR}

ARG PUBLIC_PATH=/api

RUN npm ci && \
    npm run build

EXPOSE 3000

CMD [ "npm", "run", "start-server" ]
