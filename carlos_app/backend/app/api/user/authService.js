const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./user");
const env = require("../../.env");

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!]).{6,12})/;

const login = (req, res, next) => {
  const email = req.body.email || "";
  const password = req.body.password || "";

  User.findOne({ email }, (err, user) => {
    if (err) {
      return sendErrorsFromDB(res, err);
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user, env.authSecret, {
        expiresIn: "1 day"
      });

      const { name, email } = user;
      res.json({ name, email, token });
    } else {
      return res.status(404).send({ errors: ["Utilizador/Password errada"] });
    }
  });
};

const signup = (req, res, next) => {
  const name = req.body.name || "";
  const email = req.body.email || "";
  const password = req.body.password || "";
  const confirmPassword = req.body.confirm_password || "";

  // validate email
  if (!email.match(emailRegex)) {
    return res.status(400).send({ errors: ["O email é inválido."] });
  } else if (!password.match(passwordRegex)) {
    // validate password
    return res.status(400).send({
      errors: [
        "A Password precisa de ter (pelo menos)*: uma letra maiúscula, uma letra minúscula, um número e um caracter especial"
      ]
    });
  } else if (password !== confirmPassword) {
    // validate if password's are equal
    return res.status(400).send({
      errors: ["As Passwords não concidem, por favor tente novamente"]
    });
  } else {
    // validate if user already exist
    User.findOne({ email }, (err, user) => {
      console.log({ err });
      console.log({ user });
      //   if (user) {
      //     return res
      //       .send(409)
      //       .send({ errors: ["Já existe um utilizador com este email"] });
      //   } else if (err) {
      //     return sendErrorsFromDB(res, err);
      //   } else {
      //     // generate passwordHash and create user
      //     const salt = bcrypt.genSaltSync();
      //     const passwordHash = bcrypt.hashSync(password, salt);
      //     const newUser = new User({ name, email, password: passwordHash });
      //     newUser.save(err => {
      //       if (err) {
      //         return sendErrorsFromDB(res, err);
      //       } else {
      //         // login user
      //         login(req, res, next);
      //       }
      //     });
      //   }
    });
  }
};

const validateToken = (req, res, next) => {
  const token = req.body.token || "";
  jwt.verify(token, env.authSecret, function(err, decoded) {
    return res.status(200).send({ valid: !err });
  });
};

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = [];
  _.forIn(dbErrors.errors, error => errors.push(error.message));
  return res.status(400).json({ errors });
};




module.exports = { login, signup, validateToken };
