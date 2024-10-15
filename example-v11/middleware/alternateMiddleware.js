const alternateMiddleware = (next) => (req, res) => {
  // additional logic here
  console.log(
    "I'm an alternate middleware that can be chained onto withMiddleware or used on my own."
  );

  return next(req, res);
};

export default alternateMiddleware;
