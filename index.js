const arg = process.argv.splice(2)
const _ = require('lodash')
const git_push = require('./src/git_push')
const get_host_name = require('./lib/get_host_name')
const git_pull = require('./src/git_pull')
const list_server = require('./src/list_server')
const create_server = require('./src/create_server')
const list_projects = require('./src/list_projects')
require('colors')
const host = get_host_name()

var _list_menu = [
    {
        id: "pull",
        name: "pull",
        des: "pull",
        arg: "--pull",
        params: [],
        act: git_pull
    },
    {
        id: "push",
        name: "push",
        des: "git push auto",
        arg: "--push",
        params: [],
        act: git_push
    },
    {
        id: "list_server",
        name: "list server",
        des: "melihat list server dan port ",
        arg: "--list-server",
        params: [],
        act: list_server
    },
    {
        id: "list_project",
        name: "list project",
        des: "melihat list project di server",
        arg: "--list-project",
        params: [],
        act: list_projects
    },
    {
        id: "create_server",
        name: "create server",
        des: "membuat server baru",
        arg: "--create-server",
        params: ["--host", "--name", "--port"],
        act: create_server
    }
]

const _list_exclude_server = ["push"]
const _list_exclude_local = ['pull', "list_server"]

if (host === "bip") {
    _list_menu = _list_menu.filter((v) => !_list_exclude_server.includes(v.id))
} else {
    _list_menu = _list_menu.filter((v) => !_list_exclude_local.includes(v.id))
}

async function info() {
    console.log(`
    MENU
    ---------------------
    \t${_list_menu.map((v) => v.arg + "\t[" + v.des + "]\n\t\t\t" + v.params.join(" ")).join("\t\n\t")}

    EXAMPLE
        yarn server ${_list_menu[0].arg}
    `.yellow)
}

async function main() {
    if (_.isEmpty(arg)) return info()
    const cmd = _list_menu.find((v) => v.arg === arg[0])
    if (!cmd) return info()
    cmd.act(arg.splice(1))
}

main()