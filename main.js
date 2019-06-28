const Discord = require("discord.js");
const Openimage = require("openimage");
const Level = require("level");
const fs = require('fs');

const db = Level("tree-db")
const client = new Discord.Client();

client.on("ready", () => {  
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  switch (msg.content) {
    case "tree!water":

    case "tree!view":

    case "tree!":
    
  }
});

var token = fs.readFileSync("auth.txt", "utf8");
client.login(token);