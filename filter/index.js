'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createFilterFiles = function createFilterFiles() {
  this.appTemplate('filter', 'scripts/filters/' + this.name);
  this.testTemplate('spec/filter', 'filters/' + this.name);
  this.addScriptToIndex('filters/' + this.name);
};

Generator.prototype.customize = function customize(){
  this.write('app/scripts/filters/' + this.name + '.js', this.engine(this.read('../../../../app/scripts/filters/' + this.name + '.js')).replace(/  /g, '\t').replace(/'/g, '"'));
  this.write('test/spec/filters/' + this.name + '.js', this.engine(this.read('../../../../test/spec/filters/' + this.name + '.js')).replace(/  /g, '\t').replace(/'/g, '"'));
  this.write('app/index.html', this.engine(this.read('../../../../app/index.html')).replace(/\n<script src="scripts\/filters\//g, '\n\t\t<script src="scripts/filters/'));
};
