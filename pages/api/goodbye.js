// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import withMiddleware from "../../middleware/withMiddleware";
import alternateMiddleware from "../../middleware/alternateMiddleware";

function handler(req, res) {
  switch (req.method) {
    case "POST":
      return res.status(201).json({message: "Thank you for your contribution, John Doe"})
    case "GET":
    default:
      return res.status(200).json({ message: "Farewell, John Doe" });
  }
}

export default withMiddleware(alternateMiddleware(handler));
