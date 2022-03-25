const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://admin:123456@localhost:27017/';
const dbName = 'tutorial';

const client = new MongoClient(url, { useUnifiedTopology: true });
