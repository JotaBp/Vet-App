const express = require("express")
const router = express.Router()
const passport = require("passport")

const Hospital = require("../models/vetHospital.model")
const bcrypt = require("bcrypt")






module.exports = router