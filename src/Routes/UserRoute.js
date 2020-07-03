import express from "express";
import JWT from "jsonwebtoken";

import User from "../Controllers/UserController";

import { error } from "../returnFunc";

export const anonymeRouteUser = express.Router();
export const adminRouteUser = express.Router();

adminRouteUser.route("/").get(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { role } = decode.payload;

  if (role.indexOf("ROLE_ADMIN") !== -1) {
    const Users = await User.getAllUser();
    res.json(Users);
  } else {
    res.json(error("You are not an admin"));
  }
});

adminRouteUser.route("/currentUser").get(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { email } = decode.payload;

  const getCurrentUser = await User.currentUser(email);
  res.json(getCurrentUser);
});

adminRouteUser.route("/:id").get(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { role } = decode.payload;

  if (role.indexOf("ROLE_ADMIN") !== -1) {
    const user = await User.getUserById(req.params.id);
    res.json(user);
  } else {
    res.json(error("You are not an admin"));
  }
});

adminRouteUser.route("/add").post(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { role } = decode.payload;

  if (role.indexOf("ROLE_ADMIN") !== -1) {
    const checkPass =
      req.body.firstPassword === req.body.secondPassword
        ? req.body.firstPassword
        : false;

    if (checkPass !== false) {
      const param = {
        data: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          tel: req.body.tel,
          email: req.body.email,
          password: checkPass,
        },
      };

      const addUser = await User.createAdminUser(param);
      res.json(addUser);
    } else {
      res.json(error("Error, not the same password"));
    }
  } else {
    res.json(error("Error, you are not admin"));
  }
});

adminRouteUser.route("/delete/:id").delete(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { role } = decode.payload;

  if (role.indexOf("ROLE_ADMIN") !== -1) {
    const user = await User.deleteUser(req.params.id);
    res.json(user);
  } else {
    res.json(error("You are not an admin"));
  }
});

adminRouteUser.route("/update/:id").put(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { role } = decode.payload;

  if (role.indexOf("ROLE_ADMIN") !== -1) {
    const objectUser = {
      where: { id: req.params.id },
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        zip: req.body.zip,
        city: req.body.city,
        tel: req.body.tel,
      },
    };

    const updateUser = await User.updateUser(objectUser);
    res.json(updateUser);
  } else {
    res.json(error("Error, you are not an admin"));
  }
});

adminRouteUser.route("/updateCurrentUser").put(async (req, res) => {
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  const { id } = decode.payload;

  const updateUser = {
    id: id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    tel: req.body.tel,
  };

  const currentUserUpdate = await User.updateCurrentUser(updateUser);
  res.json(currentUserUpdate);
});

anonymeRouteUser.route("/add").post(async (req, res) => {
  const checkPass =
    req.body.firstPassword === req.body.secondPassword
      ? req.body.firstPassword
      : false;

  if (checkPass !== false) {
    const param = {
      data: {
        tel: req.body.tel,
        zip: req.body.zip,
        email: req.body.email,
        firstname: req.body.firstname,
        city: req.body.city,
        lastname: req.body.lastname,
        address: req.body.address,
        password: checkPass,
      },
    };

    const addNewUser = await User.addUser(param);
    res.json(addNewUser);
  } else {
    res.json(error("not same password"));
  }
});

anonymeRouteUser.route("/connection").post(async (req, res) => {
  const param = {
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  };
  const connectionUser = await User.connection(param);
  res.json(connectionUser);
});

anonymeRouteUser.route("/activateAccount/:token").get(async (req, res) => {
  const user = await User.activateAccount(req.params.token);
  res.json(user);
});

anonymeRouteUser.route("/forgetPassword").post(async (req, res) => {
  const user = await User.forgetPassword(req.body.email);
  res.json(user);
});
anonymeRouteUser.route("/resetPassword/:token").post(async (req, res) => {
  const newPassword =
    req.body.firstPassword === req.body.secondPassword
      ? req.body.firstPassword
      : res.json(error("Error not the same password"));
  const objResetPassword = { tokenReset: req.params.token, pwd: newPassword };

  const changePasswordUser = await User.resetPassword(objResetPassword);
  res.json(changePasswordUser);
});

anonymeRouteUser.route("/checkuser").get(async (req, res) => {
  let data = 'no user';
  const decode = await JWT.decode(req.headers["x-access-token"], {
    complete: true,
  });
  
  if(decode !== null) {
    data = decode.payload;
  }
    
  res.json(data);
});
