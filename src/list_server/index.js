const { execSync } = require('child_process')
module.exports = async function () {
    const ls = execSync('ls /etc/nginx/sites-enabled').toString().trim()
    console.log(ls.green)
}