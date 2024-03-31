const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

// Setup Database
mongoose
  .connect("mongodb://localhost:27017/auth_demo")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Models
const User = require("./models/user");

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "notasecreet",
    resave: false,
    saveUninitialized: false,
  })
);

const auth = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

// Route
app.get("/home", (req, res) => {
  res.send("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password,
  });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByCredentials(username, password);
  if (user) {
    req.session.user_id = user._id;
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", auth, async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.get("/admin", auth, (req, res) => {
  res.render("admin");
});

app.get("/profile", auth, (req, res) => {
  res.send(`Profie Settings : ${req.session.user_id}`);
});

app.listen(8000, () => {
  console.log(`Listening on http://localhost:8000 💡`);
});
