const jwt = require('jsonwebtoken')
const fs = require('fs')
const privateKEY = fs.readFileSync('./private.key', 'utf8')

const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization']
  if (token.startsWith('Bearer')) token = token.slice(7, token.length) // remove 'Bearer' from the string
  if (token) {
    jwt.verify(token, privateKEY, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.json({
      success: false,
      message: 'Auth token not supplied'
    })
  }
}

module.exports = { checkToken }
