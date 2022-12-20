const { Strategy } = require('passport-jwt')
const { ExtractJwt } = require('passport-jwt')
const passport = require('passport')
const { findUserById } = require('../users/users.controllers')
const { jwtSecret } = require('../../config').api

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}

passport.use(
    new Strategy(options, (tokenDecoded, done) => {
        findUserById(tokenDecoded.id)
            .then(user => {
                if (user) {
                    done(null, tokenDecoded)
                } else {
                    done(null, false)
                }
            })
            .catch(err => {
                done(err, false)
            })
    })

)

module.exports = passport

