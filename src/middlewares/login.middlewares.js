const bcrypt = require("bcrypt")
const { loginEmailUser } = require("../services/user.services")

const loginMiddleware = async (req, res, next) => {
  const { email, password } = req.body

  const resultUser = await loginEmailUser(email)
  if (!resultUser) return res.status(401).json({ message: "incorrect credentials" })

  const isValid = await bcrypt.compare(password, resultUser.password)
  if (!isValid) return res.status(401).json({ message: "incorrect credentials" })

  req.userLogin = resultUser
  next()
}

module.exports = { loginMiddleware }