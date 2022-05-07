const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

module.exports = {
  authMiddleware: function ({ req }) {
    console.log(req.body.token);
    console.log(req.query.token);
    console.log(req.headers.authorization);
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      console.log(token);
      
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log(data);
      req.user = data;
    } catch {
      console.log("Invalid Token");
    }

    return req;
  },

  signToken: function ({ email, name, lastname, nickname, _id }) {
    const payload = { email, name, lastname, nickname, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
