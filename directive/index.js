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

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {
  this.appTemplate('directive', 'scripts/directives/' + this.name);
  this.testTemplate('spec/directive', 'directives/' + this.name);
  this.addScriptToIndex('directives/' + this.name);
};

Generator.prototype.customize = function customize(){
  this.write('app/scripts/directives/' + this.name + '.js', this.engine(this.read('../../../../app/scripts/directives/' + this.name + '.js')).replace(/  /g, '\t').replace(/'/g, '"'));
  this.write('test/spec/directives/' + this.name + '.js', this.engine(this.read('../../../../test/spec/directives/' + this.name + '.js')).replace(/  /g, '\t').replace(/'/g, '"'));
  this.write('app/index.html', this.engine(this.read('../../../../app/index.html')).replace(/\n<script src="scripts\/directives\//g, '\n\t\t<script src="scripts/directives/'));
};
