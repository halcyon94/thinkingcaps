'use strict';
(require('rootpath')());

var db = require('config/index').mongodb;
var wrap = require('co-monk');
module.exports = wrap(db.get('collection'));
