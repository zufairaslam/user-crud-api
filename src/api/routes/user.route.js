const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authMiddleware = require("../middlewares/authMiddleware");
const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require('../controllers/user.controller');






router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ], registerUser);
router.post('/login', [    
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
], loginUser);


router.get('/', authMiddleware, getUsers);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);
module.exports = router;
