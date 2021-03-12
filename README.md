# RingCentral Extensible SDK ES5 Demo

By default, [RingCentral Extensible SDK](https://github.com/ringcentral/ringcentral-extensible) compiles to ES6 before publishing as [NPM libraries](https://www.npmjs.com/search?q=%40rc-ex).

If for some reason you need ES5 versions of these libraries (for example, you want to support IE 11), you need to install them like this:

```
yarn add https://gitpkg.now.sh/ringcentral/ringcentral-extensible/packages/core?es5
yarn add https://gitpkg.now.sh/ringcentral/ringcentral-extensible/packages/extensions/ws?es5
yarn add https://gitpkg.now.sh/ringcentral/ringcentral-extensible/packages/extensions/rcsdk?es5
yarn add https://gitpkg.now.sh/ringcentral/ringcentral-extensible/packages/extensions/debug?es5
```