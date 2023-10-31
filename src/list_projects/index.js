const fs = require('fs')
module.exports = function () {
    const project = fs.readdirSync('../')
    console.table(project)
}