
const mongoose = require("mongoose");
const { mongo } = require('../../config/config')
const User = require("../models/user")
const jwt = require('../../config/jwt');
const { validationResult } = require('express-validator');

module.exports = {
    mongoose,
    mongo,
    User,
    jwt,
    validationResult
  };