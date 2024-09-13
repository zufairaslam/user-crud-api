const {User, jwt} = require("../helper/includes")


module.exports = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verifyToken(token);
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      res.status(401).json({ error: true, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ error: true, message: 'Not authorized, no token' });
  }
};
