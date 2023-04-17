const { User, UserBiodata , } = require("../models");

const register = async (req, res, next) => {
  try {
     const isExists = await User.findOne({ where: { email: req.body.email } });

  if (isExists) {
    res.status(403).json({
      message: "Data already exists",
    });
  }
  } catch (error) {
    next(error);
  }
 

  User.register(req.body)
    .then(() => {
      res.status(200).json({
        response: 200,
        message: "success",
      });
    })
    .catch((err) => {
      res.status(500).json({
        response: 500,
        message: "failed",
      });
      next(err);
    });
};

const login = (req, res, next) => {
  User.authenticate(req.body)
    .then((user) => {
      res.status(200).json({
        id: user.id,
        email: user.email,
        accessToken: user.generateToken(),
        response: 200,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        response: 500,
      });
      next(err);
    });
};

const whoami = (req, res, next) => {
  const currentUser = req.user;
  try {
    res.json({
      id: currentUser.id,
      email: currentUser.email,
    });
  } catch (error) {
    next(error)
  }
  
};

const updateProfile = async (req, res, next) => {
  const { email, password, firstName, lastName, phoneNumber } = req.body;
  const id = req.params.id;

  const user = await User.findOne({ where: { id } });
  const userBiodata = await UserBiodata.findOne({
    where: { userId: id },
  });

  if (userBiodata) {
    userBiodata.firstName = firstName;
    userBiodata.lastName = lastName;
    userBiodata.phoneNumber = phoneNumber;
    userBiodata.updatedAt = new Date();
    await userBiodata.save();
  } else {
    UserBiodata.create({
      userId: id,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  const newEmail = email ? email : user.email;

  User.updateProfile({ email: newEmail, password, id })
    .then(() => {
      res.status(200).json({
        response: 200,
      });
    })
    .catch((err) => {
      console.log("error", err);
      res.json({
        response: 500,
      });
      next(err);
    });
};

const userDetail = (req, res, next) => {
  const id = req.params.id;
  UserBiodata.findOne({ where: { userId: id } })
    .then((user) => {

      res.status(200).json({
        response: 200,
        user,
      });
    })
    .catch((err) => {
      res.json({
        response: 500,
      });
      next(err);
    });
};

module.exports = {
  register,
  login,
  whoami,
  updateProfile,
  userDetail,
};
