FROM node:10-alpine

WORKDIR /backend-test-api
ADD package.json /backend-test-api/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install
ADD . /backend-test-api

CMD ["npm", "run", "start"]
