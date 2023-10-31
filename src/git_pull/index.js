const get_current_branch = require("../../lib/get_current_branch")
const { execSync } = require('child_process')
require('colors')
module.exports = function () {
    const branch = get_current_branch()
    execSync(`git pull origin ${branch}`, {
        stdio: "inherit"
    })

    console.log(`SUCCESS`.green)
}