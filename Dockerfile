FROM node:20

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src

ARG GIT_SHA
ENV REACT_APP_GIT_SHA=$GIT_SHA

ARG BASE_PATH
ENV PUBLIC_URL=$BASE_PATH

ARG E2E
ENV REACT_APP_E2E=$E2E

ARG STAGING
ENV REACT_APP_STAGING=$STAGING

ARG ACUAL_STAGING
ENV ACUAL_STAGING=$ACUAL_STAGING

# Setup
COPY . .
RUN npm ci
RUN npm run build

ARG NPM_COMMAND="start:prod"
ENV NPM_COMMAND=${NPM_COMMAND}

ENTRYPOINT npm run $NPM_COMMAND
