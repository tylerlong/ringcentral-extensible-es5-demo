# RingCentral Extensible SDK ES5 Demo

In order to support IE 11, the key is to use babel to compile everything in `node_modules` to ES5 and add `babel-polyfill`.


## Run this demo project

Rename `.env.sample` to `.env` and specify credentials

```
yarn install
yarn serve
```

Go to http://127.0.0.1:8080
