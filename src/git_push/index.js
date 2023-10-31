const current_branch = require("../../lib/current_branch")
const { execSync } = require('child_process')


module.exports = async function () {
    const branch = current_branch()
    execSync(`
    git add -A 
    git commit -m "auto push"
    git push origin ${branch}
    `, { stdio: "inherit" })
}