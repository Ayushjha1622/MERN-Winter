const express = require("express");
const router = express.Router();

// moddlewares
const auth = function (req, res, next) {
  console.log("I m inside auth wala middleware ");

  // dummy user

  req.user = { user: 1, role: "student" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "not a valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("I m inside syudent wala middleware");

  if (req.user.role === "student") {
    next();
  } else {
    req.json({
      success: false,
      message: "not a student",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("I m in inside IsAdmin middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "not an admin",
    });
  }
};

// routes

router.get("/student", auth, isStudent, (req, res) => {
    console.log("I m inside student route ");
    res.send("students specific page")
    
})

router.get("/admin",auth, isAdmin, (req, res) => {
    console.log("I m inside admin route ");
    res.send("admin specific page")
})

//

module.export = router;
