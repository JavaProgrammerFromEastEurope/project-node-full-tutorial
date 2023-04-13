const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization
  if (!authHeader?.startWith('Bearer ')) return res.sendStatus(401)
  const token = authHeader.split(' ')[1]
  jwt.verify(toke, process.env.ACCESS_TOKEN_SECRET, (err.decoded) => {
    if (err) return res.sendStatus(403) //invalid token
    req.user 	= decoded.UserInfo.username
    req.roles = decoded.UserInfo.roles
    next()
  })
}

module.exports = verifyJWT