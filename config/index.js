'use strict';
var bodyparser = require('koa-bodyparser')
var common = require('koa-common');
var flash = require('koa-flash');
var hbs = require('koa-hbs');
var helmet = require('koa-helmet');
var router = require('koa-router');
var path = require('path');

//mongodb configs
var monk = require('monk');
var mongo = monk('localhost/test');

//exported configurations
var config = {
  configure: function(app) {
    app.use(common.responseTime());
    app.use(common.logger());
    app.use(common.compress());
    app.use(hbs.middleware({
      viewPath: path.join(__dirname, '../views')
    }));
    app.use(common.static(path.join(__dirname, '../public')));
    app.use(router(app));
    app.use(bodyparser());
    app.keys = ['secret keys for session'];
    app.use(common.session());
    app.use(flash());
  },
  mongodb: mongo
}

module.exports = config;