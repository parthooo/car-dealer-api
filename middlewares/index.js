var sanitize = require("mongo-sanitize");

function sanitizeinputs(sanitizeInputs) {
  return (req, res, next) => {
    for (inputKey of sanitizeInputs) {
      req.body[inputKey] = sanitize(req.body[inputKey]);
    }
    next();
  };
}

module.exports = {
  sanitizeinputs,
};
