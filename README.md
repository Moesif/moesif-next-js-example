# Moesif Next.js Example

[Next](https://nextjs.org) is a popular React framework that gives you building blocks to create web applications.

[Moesif](https://www.moesif.com) is an API analytics platform.
[moesif-nodejs](https://github.com/Moesif/moesif-nodejs)
is a middleware that makes integration with Moesif easy for Nodejs based apps including Next.

This example is a Next.js application with Moesif's API analytics and monitoring integrated.


## How to run this example.

1. Install all dependencies: 

```bash
npm install
```

2. Add your Moesif Application Id to `middleware/moesifMiddleware.js`

Your Moesif Application Id can be found in the [_Moesif Portal_](https://www.moesif.com/).
After signing up for a Moesif account, your Moesif Application Id will be displayed during the onboarding steps. 

You can always find your Moesif Application Id at any time by logging 
into the [_Moesif Portal_](https://www.moesif.com/), click on the bottom-left menu,
and clicking _Installation_.

```javascript
const moesifOptions = {
  applicationId:
    process.env.MOESIF_APPLICATION_ID || "Your Moesif Application Id",
  ...
}
```

_Note:_ Next.js currently does not support global middlewares out of the box. This example follows [a pattern](https://github.com/vercel/next.js/discussions/14415#discussioncomment-42291) of creating a middleware and wrapping each route with a HOF to insert the middleware. Each route in this example needs to be wrapped by `withMiddleware` in order to be detected by the Moesif app. See the `api/goodbye` endpoint for how to chain additional middlewares.

3. Run the example, it will listen on port 3000.

```bash
npm run dev
```

4. Send some requests to some of the routes and verify that the API calls are captured in your Moesif account. 

```bash
curl --location --request GET 'http://localhost:3000/api/goodbye/' \
--header 'Content-Type: application/json' \
--header 'my-user-id: my-user-id' \
--header 'my-company-id: my-company-id'
```
