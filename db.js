const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
var shortid = require("shortid");
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], books: [], transactions: [] }).write();

module.exports = db;
