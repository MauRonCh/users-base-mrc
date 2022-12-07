const bcrypt = require('bcrypt');

function hashPassword (plainpassword) {
    return bcrypt.hashSync(plainpassword, 10);
}

function comparePassword (plainPassword, hashedPassword) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}