'use strict';

var gulp = require('gulp');
var lipcoreTasks = require('lipcore-build');

lipcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
