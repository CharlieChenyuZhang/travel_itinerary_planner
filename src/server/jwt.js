const fs = require('fs')
const jwt = require('jsonwebtoken')

const privateKEY = fs.readFileSync('./private.key', 'utf8')
const publicKEY = fs.readFileSync('./public.key', 'utf8')

module.exports = {
  sign: (payload, options) => {
    /*
      options = {
        issuer: 'This server',
        subject: 'the user's id from mongo db'
      }
    */

    const signOptions = {
      issuer: options.issuer,
      subject: options.subject,
      expiresIn: '1h', // 1h validity
      algorithm: 'RS256'
    }
    return jwt.sign(payload, privateKEY, signOptions)
  },

  verify: (token, options) => {
    /*
      options = {
        issuer: 'this server',
        subject: 'the user's id from mongo'
      }
    */

    const verifyOptions = {
      issuer: options.issuer,
      subject: options.subject,
      expiresIn: '1h', // 1hr validity
      algorithM: ['RS256']
    }

    try {
      return jwt.verify(token, publicKEY, verifyOptions)
    } catch (err) {
      return false
    }
  },

  decode: (token) => {
    return jwt.decode(token, { complete: true })
    // returns null if token is invalid
  }
}
