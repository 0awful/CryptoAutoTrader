var fs = require('fs');
var json = JSON.parse(fs.readFileSync('../Data/APIKey.json', 'utf8'));

module.exports.apiinfo = json;
