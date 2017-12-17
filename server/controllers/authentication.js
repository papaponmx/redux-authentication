const User = require('../models/user');

exports.signup = (req, res, next) => {
  console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You most provide email address and password'});
  }


  //  See if user emai exists
  User.findOne({ email }, (error, existingUser) => {
    if (error) {
      return next(error);
    }

    // If a user with email does exits, return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If it does not exist, create user and save record
    const user = new User({
      email: email,
      password: password
    });


    user.save((error) => {
      if(error) {
        return next(error);
      }

      res.json({ success: true })
     })
    // Respond to request
  });
}
