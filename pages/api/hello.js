// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import withMiddleware from "../../middleware/withMiddleware";

function handler(req, res) {
  switch (req.method) {
    case "POST":
      return res.status(201).json({name: "Jack Buck"})
    case "GET":
    default:
      return res.status(200).json({ name: "John Doe" });
  }
}

export default withMiddleware(handler);
