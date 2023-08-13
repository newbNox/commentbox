const client = require('..');
const chalk = require('chalk');
const { ActivityType } = require('discord.js');
const con = require('../db.js');

client.on("ready", () => {
    client.user.setActivity('threads', { type: ActivityType.Watching});
    setInterval(() => {
        client.user.setActivity('threads', { type: ActivityType.Watching});
        //con.query(`SELECT id FROM commentboxes LIMIT 1`);
    }, 5000);

    console.log(chalk.red(`Logged in as ${client.user.tag}!`))
})