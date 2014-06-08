'use strict';
(require('rootpath')());

var routes = require('routes/routes');
var koa = require('koa');
var config = require('config/index');

var app = koa();
module.exports = app;
config.configure(app);

app.get('/tutors', routes.listTutors);
app.get('/students',routes.listStudents);
app.get('/tutor/new', routes.addTutor);
app.get('/student/new', routes.addStudent);
app.get('/tutor/:id', routes.show);
app.get('/student/:id', routes.show);
app.get('/tutor/delete/:id', routes.remove);
app.get('/student/delete/:id', routes.remove);
app.get('/tutor/edit/:id', routes.edit);
app.get('/student/edit/:id', routes.edit);
app.post('/tutor/create', routes.createTutor);
app.post('/student/create', routes.createStudent);
app.post('/tutor/update', routes.updateTutor);
app.post('/student/update', routes.updateStudent);