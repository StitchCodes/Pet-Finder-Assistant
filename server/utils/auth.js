const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

console.log("secret", secret);
console.log("expiration", expiration);

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

  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
