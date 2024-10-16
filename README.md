# Moesif Next.js Example

[Next](https://nextjs.org) is a popular React framework that gives you building blocks to create web applications. It primarily focus on building web UI, but it also supports building APIs on the sever side as well.

[Moesif](https://www.moesif.com) is an API analytics platform.

[moesif-nodejs](https://github.com/Moesif/moesif-nodejs)
is a middleware for SERVER that makes integration with Moesif easy for Nodejs based APIs including APIs that are build in Next.

[moesif-browser-js](https://github.com/Moesif/moesif-browser-js) is a BROWSER only libraries that tracks user actions and user profiles so that you can tie those actions to the APIs. moesif-browser-js only runs in the browser, since next.js support server side rendering, there are some things you need to do to ensure only import moesif-browser-js on client side.

This repo have 2 examples Next.js applications with Moesif's API analytics and monitoring integrated.


## There are two examples

### Example V11

[Example V11](/example-v11/) is for Nextjs older than 13. Also, if you are using "page" router instead of newer App Router.

### Example V14

[Example V14](/example-v14/) is for Nextjs newer than 14, and with the new app router, which changed the signature of handler.

