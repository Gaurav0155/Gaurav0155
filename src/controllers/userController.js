let user_module = require("../modules/user.moduls");
let member_module = require("../modules/members.moduls");
let hashing = require("../utils/bcrypt");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let { genrateToken } = require("../utils/jwtToken");
const { validationResult } = require("express-validator");

// user registration--
exports.create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "place validate fields ",
        errors: errors,
      });
    } else {
      let payload = req.body;
      let plainPassword = req.body.password;
      let module_id = payload.user_module;
      let hash = await bcrypt.hash(plainPassword, 10);
      let data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        department: req.body.department,
        email: req.body.email,
        password: hash,
      };
      let result = await user_module.Create(data);
      for (var i = 0; i < req.body.user_module.length; i++) {
        var options = {
          user_id: result.insertId,
          module_id: payload.user_module[i],
        };

        await user_module.findModules();
        await member_module.userPermission(options);
        return res.status(201).json({
          status: 201,
          data: "successfully created",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({
      error: error,
    });
  }
};



exports.read = async (req, res) => {
  try {
    let result = await user_module.fidAll();
    res.status(200).json({ status: 200, data: result });
  } catch (error) {
    res.status(500).json({ status: 500, data: error });
  }
};



exports.update = async (req, res) => {
  try {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "place validate fields ",
        errors: errors,
      });
    } else {
      var id = req.params.id;
      let payload = req.body;
      let options = {
        firstname: payload.firstname,
        lastname: payload.lastname,
        department: payload.department,
        email: payload.email,
        password: payload.password,
      };
      const data = await user_module.update(id, options);
      for (var i = 0; i < payload.user_module.length; i++) {
        var request = {
          module_id: payload.user_module[i],
        };
        var result = await member_module.update(id, request);
       
      }
      return res.status(201).json({
        status: 201,
        data:result,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};


exports.delete = async (req,res)=>{
   try {
     let id = req.params.id;
     await user_module.delete(id);
     let result = await member_module.delete(id);
     res.json({
       result: result
     })
   } catch (error) {
     res.json({ 
       error: error
     })
   }
}


exports.getUser = async (req, res)=>{
  try {
    let id = req.params.id;
     let result = await user_module.findByid(id);
     res.json({
       result: result
     })
  } catch (error) {
    res.json({ error:error})
  }
}
// user login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await user_module.find(email);
    if (!user) {
      return res.json({ status: 400, message: "Invalid user" });
    } else {
      let checkP = await hashing.checkPassword(password, user[0].password);
      if (checkP === true) {
        let options = {
          id: user[0].id,
          email: user[0].email,
        };
        var token = await genrateToken(options);
        console.log(token);
      }
      res.json({
        token: token,
      });
    }
  } catch (error) {
    res.status(501).send(error.message);
  }
};


// Get requrests
exports.home = async (req, res) => {
  try {
    const data = await user_module.sideBar();
    res.render("home", {
      title: "home",
      data: data,
    });
  } catch (error) {
    res.json({ status: 404, message: error });
  }
};

exports.findSidebar = async (req, res) => {
  try {
    const data = await user_module.findModules();
    res.status(200).json({
      result: data,
    });
  } catch (error) {
    res.status(404).json({
      result: error,
    });
  }
};

exports.member = async (req, res) => {
  try {
    const data = await user_module.sideBar();
    let modules = await user_module.findModules();

    res.render("members", {
      title: "Members",
      data: data,
      modules: modules,
      message: false,
    });
  } catch (error) {
    res.json({ status: 404, message: error });
  }
};
