'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createAppFile = function createAppFile() {
  this.appTemplate('app', 'scripts/app');
};

Generator.prototype.customize = function customize(){
  this.write('app/scripts/app.js', this.engine(this.read('../../../../app/scripts/app.js')).replace(/  /g, '\t'));
};
