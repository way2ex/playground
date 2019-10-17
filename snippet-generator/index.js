#!/usr/bin/env node
const argv = require('yargs')
    .option('c', {
        alias: 'content',
        demand: true,
        describe: 'The content used to generate snippet.',
        type: 'string'
    })
    .option('i', {
        alias: 'indent',
        demand: false,
        default: '    ',
        describe: 'The indent type. two spaces by default',
        type: 'string'
    })
    .argv;

const { c, i } = argv;
const pattern = new RegExp(`^${i}`);
const array = c.split("\n");
array.forEach((v, index) => {
    console.log(`"${v}"${index === array.length - 1 ? '' : ','}`);
});
