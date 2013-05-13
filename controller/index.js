'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with ctrl, remove the suffix
  // if the controller name is just "ctrl," don't append/remove "ctrl"
  if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    this.name = this.name.slice(0, -4);
  }
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.appTemplate('controller', 'scripts/controllers/' + this.name);
  this.testTemplate('spec/controller', 'controllers/' + this.name);
  this.addScriptToIndex('controllers/' + this.name);
};

Generator.prototype.customize = function customize(){
  this.write('app/scripts/controllers/' + this.name + '.js', this.engine(this.read('../../../../app/scripts/controllers/' + this.name + '.js')).replace(/  /g, '\t').replace(/'/g, '"'));
  this.write('test/spec/controllers/' + this.name + '.js', this.engine(this.read('../../../../test/spec/controllers/' + this.name + '.js')).replace(/  /g, '\t').replace(/'/g, '"'));
  this.write('app/index.html', this.engine(this.read('../../../../app/index.html')).replace(/\n<script src="scripts\/controllers\//g, '\n\t\t<script src="scripts/controllers/'));
};
