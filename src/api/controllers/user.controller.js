
const {User, jwt, validationResult} = require("../helper/includes");


exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: true, errors: errors.array() });
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: true, message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      error: false,
      message: "User account has been successfully created.",
      name: user.name,
      email: user.email,
      token: jwt.generateToken({id: user._id.toString()}),
    });


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: true, errors: errors.array() });
    }
    try {
      const user = await User.findOne({ email });
  
      if (user && (await user.matchPassword(password))) {
        res.json({
          error: false,
          message: "Login successful.",
          name: user.name,
          email: user.email,
          token: jwt.generateToken({id: user._id.toString()}),
        });
      } else {
        res.status(401).json({ error: true, message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  };



  exports.getUsers = async (req, res) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: 'i' } }
      : {};
  
    try {
      const count = await User.countDocuments({ ...keyword });
      const users = await User.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));
  
      res.json({
        users,
        page,
        pages: Math.ceil(count / pageSize),
      });
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  };


  exports.updateUser = async (req, res) => {
    const { name, email } = req.body;
  
    try {
      const user = await User.findById(req.params.id);
  
      if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
  
        const updatedUser = await user.save();
  
        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          token: jwt.generateToken({id: user._id.toString()}),
        });
      } else {
        res.status(404).json({ error: true, message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      if (user) {
        await User.deleteOne({_id: user._id});
        res.json({ error: false, message: 'User removed' });
      } else {
        res.status(404).json({ error: true, message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  };