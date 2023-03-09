// Required node modules
let jwt = require('jsonwebtoken')


const hash = (key, data, algorithm = 'HS256', expires = '1h') => {

    let args = {
        algorithm: algorithm,
        // noTimestamp: true
    }

    try {
        return jwt.sign(data, key, args)
    }
    catch (err) {
        // console.log(`error => ${err.stack}`)

        if(err.stack.indexOf('TokenExpiredError') > -1) {
            return 'expired'
        }
        else {
            return null
        }

    }
}

const verify = (key, token = null, algorithm = 'HS256', expires = '1h') => {

    let args = {
        algorithm: algorithm,
        // noTimestamp: true
        // expiresIn: _this.expires
    }

    try {
        if(token === null) {
            return null
        }
        return jwt.verify(token, key, args)
    }
    catch (err) {
        // console.log(`error => ${err.stack} - ${err.name}`)
        
        if (err.name === "TokenExpiredError") {
            return "expired"
        }

        return null
    }
}

export default { hash, verify }
