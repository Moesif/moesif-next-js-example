import moesifMiddleware from "./moesifMiddleware";

const withMiddleware = (next) => async (req, res) => {
  try {
    const middlewares = [
      moesifMiddleware,
      // additional default middlewares
    ];

    // each middleware will then be wrapped within its own promise
    const promises = middlewares.reduce((acc, middleware) => {
      const promise = new Promise((resolve, reject) => {
        middleware(req, res, (result) =>
          result instanceof Error ? reject(result) : resolve(result)
        );
      });
      return [...acc, promise];
    }, []);

    // promised middlewares get asynchronously resolved (this may need to be switched to a synchronous
    // loop if a certain middleware function needs to be resolved before another)
    await Promise.all(promises);

    // returns the next wrapped function(s) to be executed (can be an API route or another additional middleware)
    return next(req, res);
  } catch (error) {
    // if any middleware fails, throws a 400 error
    return res.status(400).send(error);
  }
};

export default withMiddleware;
