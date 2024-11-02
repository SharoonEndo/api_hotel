const bcrypt = require('bcrypt')

const passwordMiddlewares = async (req, res, next) => {
  const { password } = req.body
  const passwordHash = await bcrypt.hash(password, 8)
  req.passwordHash = passwordHash
  next()
}

module.exports = {
  passwordMiddlewares
};