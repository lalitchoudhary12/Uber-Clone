const express = require("express")
const router = express.Router()
const {body} = require("express-validator")
const captionController = require("../controllers/captain.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router.post("/register",[
    body("fullname.firstname").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min:5}).withMessage("Password must be at least 5 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(["car","moto","auto"]).withMessage("Invalid vehicle type")
],captionController.registerCaptain
)

router.post("/login",[
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min:5}).withMessage("Password must be at least 5 characters long")
], captionController.loginCaptain
)

router.get("/profile",
    authMiddleware.authCaptain,
    captionController.getCaptainProfile
)

router.get("/logout",
    authMiddleware.authCaptain,
    captionController.logoutCaptain
)

module.exports = router