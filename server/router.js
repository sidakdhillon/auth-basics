const auth = require("./controllers/auth.controller");

module.exports = (app) => {
  app.get("/", (req, res, next) => {
    res.send(["hello", "world"]);
  });

  app.post("/signup", auth.signup);
};
