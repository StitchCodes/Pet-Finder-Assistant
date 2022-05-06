const jwt = require("jsonwebtoken");

const secret = "mydirtylittlesecret";

const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split("").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('data', data);
      req.user = data;
    } catch {
      console.log("Invalid Token");
    }

    return req;
  },

  signToken: function ({ email, username, _id }) {
    constpayload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
