const {execSync} = require('child_process')
module.exports = function(){
    const branch = execSync('git branch --show-current').toString().trim()
    return branch
}