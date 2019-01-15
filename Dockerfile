# base image
FROM arm32v7/node:8

WORKDIR /web3-ipfs
ADD . /web3-ipfs
RUN npm install

CMD npm start