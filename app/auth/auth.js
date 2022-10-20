var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var User = require("../models/models");
exports.signup = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    sapid: req.body.role,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500)
        .send({
          message: err
        });
      return;
    } else {
      res.status(200)
        .send({
          message: "User Registered successfully"
        })
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
      sapid: req.body.sapid
    })
    .exec((err, user) => {
      if (err) {
        res.status(500)
          .send({
            message: err
          });
        return;
      }
      if (!user) {
        return res.status(404)
          .send({
            message: "User Not found."
          });
      }

      //comparing passwords
      var sapidIsValid = bcrypt.compareSync(
        req.body.sapid,
        user.sapid
      );
      // checking if password was valid and send response accordingly
      if (!sapidIsValid) {
        return res.status(401)
          .send({
            accessToken: null,
            message: "Invalid SAP ID!"
          });
      }
      //signing token with user id
      var token = jwt.sign({
        id: user.id
      }, process.env.API_SECRET, {
        expiresIn: 86400
      });

      //responding to client request with user profile success message and  access token .
      res.status(200)
        .send({
          user: {
            id: user._id,
            email: user.email,
            fullName: user.name,
          },
          message: "Login successfull",
          accessToken: token,
        });
    });
};