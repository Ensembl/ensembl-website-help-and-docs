FROM node:12.16.2

ARG SOURCE_DIR="."
ARG TARGET_DIR="/srv/ensembl-docs-server"

RUN mkdir -p ${TARGET_DIR}

COPY ${SOURCE_DIR} ${TARGET_DIR}

WORKDIR ${TARGET_DIR}

# FIXME: environment variable should be passed from outside (as build-arg? or at runtime?)
# Note: the following environment variables have to be defined before the build
ENV HOST=http://193.62.55.158:30799

RUN npm ci && \
    npm run build

EXPOSE 3000

CMD [ "npm", "run", "start-server" ]
