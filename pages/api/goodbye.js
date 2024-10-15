// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import withMiddleware from "../../middleware/withMiddleware";
import alternateMiddleware from "../../middleware/alternateMiddleware";
import moesifMiddleware from '../../middleware/moesifMiddleware';


function handler(req, res) {
  switch (req.method) {
    case "POST":

      return res.status(201).json({message: "Thank you for your contribution, John Doe"})
    case "GET":
    default:
      const company = { companyId: 'testnextcompany' };

      moesifMiddleware.updateCompany(company);

      const user = {
        userId: 'testnextuser3',
        companyId: 'testnextcompany',
        metadata: {
          email: 'testnexturl3@email.com',
        },
      };

      moesifMiddleware.updateUser(user);

      return res.status(200).json({ message: "Farewell, John Doe" });
  }
}

export default withMiddleware(alternateMiddleware(handler));
