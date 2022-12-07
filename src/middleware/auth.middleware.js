const JwtStrategy = require('passport-jwt').Strategy

const ExtractToken = require('passport-jwt').ExtractJwt;
const passport = require('passport');

const jwtSecret = require('../../config').api.jwtSecret;
const { findUserById } = require('../users/users.controllers');

const options = {
    jwtFromRequest: ExtractToken.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
}
passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        try {
            const user = await findUserById(tokenDecoded.id);
            if (!user) {
                return done(null, false);
            }
            return done(null, tokenDecoded);
        } catch {
            return done(error, false)
        }
    })
)

module.exports = passport;