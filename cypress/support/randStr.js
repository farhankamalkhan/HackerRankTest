var randomstring = require("randomstring");

export function randStr() {
    return randomstring.generate({
        length: 12,
        charset: 'alphabetic'
    })
}