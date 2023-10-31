const arg = process.argv.splice(2)
const _ = require('lodash')
const git_push = require('./src/git_push')
require('colors')

const list_menu = [
    {
        id: "menu1",
        name: "menu1",
        des: "menu1",
        arg: "--menu1",
        act: async () => { }
    },
    {
        id: "push",
        name: "push",
        des: "git push auto",
        arg: "--push",
        act: git_push
    }
]

async function info() {
    console.log(`
    MENU
    ---------------------
    \t${list_menu.map((v) => v.arg + "\t" + v.des).join("\t\n\t")}

    EXAMPLE
        command ${list_menu[0].arg}
    `.yellow)
}

async function main() {
    if (_.isEmpty(arg)) return info()
    const cmd = list_menu.find((v) => v.arg === arg[0])
    if (!cmd) return info()
    await cmd.act()
}

main()