import moesif from "moesif-nodejs";

const moesifOptions = {
  applicationId:
    process.env.MOESIF_APPLICATION_ID || "Your Moesif Application Id",

  debug: true,

  identifyUser: function (req, res) {
    if (req.user) {
      return req.user.id;
    }
    if (req.headers["my-user-id"]) {
      return req.headers["my-user-id"];
    }
    return undefined;
  },

  identifyCompany: function (req, res) {
    if (req.headers["my-company-id"]) {
      return req.headers["my-company-id"];
    }
    return undefined;
  },

  getSessionToken: function (req, res) {
    return req.headers["Authorization"];
  },

  getMetadata: function (req, res) {
    return {
      foo: "next",
      bar: "example",
    };
  },

  // batchMaxTime: 10000,
  // batchSize: 15,
  disableBatching: true,

  // modify the option below to test out limits for responseMaxBodySize
  responseMaxBodySize: 5000,

  callback: function (error, data) {
    if (error) {
      console.log("inside call back");
      console.log("error: " + JSON.stringify(error));
    }
  },
};

export default moesif(moesifOptions);
