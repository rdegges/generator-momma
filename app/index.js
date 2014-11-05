'use strict';

var exec = require('child_process').exec;

var chalk = require('chalk');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  insult: function() {
    this.log(chalk.yellow.bold('Yo momma so stupid she studied for a drug test!'));
  },
});
