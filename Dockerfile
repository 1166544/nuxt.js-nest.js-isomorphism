FROM keymetrics/pm2:latest-alpine

# Create own api folder
RUN mkdir -p /api
WORKDIR /api

# Install the dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm i -g yarn
COPY package.json .
COPY yarn.lock .
RUN yarn

# Build the API
COPY src src/
COPY tsconfig.json .
COPY config config/
COPY build build/
RUN yarn build

# Expose the API port
EXPOSE 8088

# Run
CMD [ "start" ]
