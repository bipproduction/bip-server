const {execSync} = require('child_process')
module.exports = function(){
    const host = execSync('hostname').toString().trim()
    return host
}