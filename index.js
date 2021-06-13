const MongoClient = require('mongodb').MongoClient;

let createBot = require('./bot/createBot');
let fs = require('fs');

let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

MongoClient.connect(config.development.connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then();
let bot = createBot(config.development.telegramToken);

