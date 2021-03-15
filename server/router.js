const auth = require("./controllers/auth.controller");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  app.get("/", requireAuth, (req, res, next) => {
    res.send(["hello", "world"]);
  });

  app.post("/signup", auth.signup);

  app.post("/signin", requireSignin, auth.signin);
};
