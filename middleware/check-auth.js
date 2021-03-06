const jwt = require('jsonwebtoken')
const config = require('./config.js');

module.exports = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; 
  if (token.startsWith('Bearer ')) {
      console.log("2")
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid please check your token'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({

      success: false,
      message: 'Auth Failed please check your token'
    });
  }
};

