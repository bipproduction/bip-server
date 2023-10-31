const { execSync } = require('child_process')
const get_value = require('../../lib/get_value')
const fs = require('fs')

/**
 * 
 * @param {string[]} arg 
 */
module.exports = async function (arg) {
    const a = get_value(arg, ["host", "name", "port"])
    if (!a) return console.log("REQUIRE".yellow, "--host", "--name", "--port")

    const tmp = 
`server {
    server_name ${a.host};
    location / {
        proxy_pass http://localhost:${a.port};
    }
}
`

    // fs.writeFileSync(`/etc/nginx/sites-enabled/${a.name}_${a.port}`, tmp)
    execSync(`sudo bash -c 'cat <<EOF > x.sh
${tmp}
EOF'`)

    console.log("SUCCESS".green)

}