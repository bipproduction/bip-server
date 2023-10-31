const _ = require('lodash')

/**
 * 
 * @param {string[]} arg 
 * @param {string[]} params
 */
module.exports = function (arg, params) {
    let result = {}
    if (!params || _.isEmpty(params)) throw new Error("param gak bole null atau empty")
    for (let p of params) {
        const k = arg.findIndex((v) => v === "--" + p)
        if (!arg[k] || !arg[k + 1] || _.isEmpty(arg[k + 1])) return null
        result[p] = arg[k + 1]
    }
    return result
}