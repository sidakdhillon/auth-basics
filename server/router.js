const auth = require("./controllers/auth.controller");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = (app) => {
  app.get("/", requireAuth, (req, res, next) => {
    res.send(["hello", "world"]);
  });

  app.post("/signup", auth.signup);
};
