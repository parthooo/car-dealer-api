const rateLimit = require("express-rate-limit");
var jwt = require("jsonwebtoken");
const locale = require("../locale");
var jwt = require("jsonwebtoken");

const userActions = {
  login: { maxAttempts: 500, mins: 60, message: locale.LOGIN_MANY_ATTEMPT },
  register: { maxAttempts: 500, mins: 60, message: locale.SIGNUP_MANY_ATTEMPT },
  forgotPassword: {
    maxAttempts: 500,
    mins: 60,
    message: locale.FORGOTPASS_MANY_ATTEMPT,
  },
};

const actionLimitter = (action) =>
  rateLimit({
    windowMs: 1000 * 60 * action.mins,
    max: action.maxAttempts,
    message: action.message,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers,
    handler: (req, res, next, options) =>
      res.status(options.statusCode).send({ errorMessage: options.message }),
  });

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.SALT_HASH, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  actionLimitter,
  userActions,
  authenticateToken,
};
