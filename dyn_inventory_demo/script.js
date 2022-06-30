#!/usr/bin/node

const option = process.argv[2]
const hostname = process.argv[3]


const hosts = {
    web1: {ansible_host: '1.1.1.2'},
    web2: {ansible_host: '2.3.4.5'},
    db: {ansible_host: '9.3.6.7'}
}

const groups = {
    web: ['web1', 'web2'],
    db: ['db']
}

// host options

if (option === '--host') {
    console.log (JSON.stringify(hosts[hostname]))
}
// list options


if (option === '--list') {
    console.log (JSON.stringify(groups))
}