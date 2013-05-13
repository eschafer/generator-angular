'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupEnv = function setupEnv() {
  // Copies the contents of the generator `templates`
  // directory into your users new application path
  this.sourceRoot(path.join(__dirname, '../templates/common'));
  this.directory('root', '.', true);
  this.copy('gitignore', '.gitignore');
};

Generator.prototype.customize = function customize(){
  this.write('app/404.html', this.engine(this.read('../../../../app/404.html')).replace(/    /g, '\t'));
  this.write('app/index.html', this.engine(this.read('../../../../app/index.html')).replace(/  /g, '\t'));
  this.write('app/views/main.html', this.engine(this.read('../../../../app/views/main.html')).replace(/  /g, '\t'));
  this.write('test/runner.html', this.engine(this.read('../../../../test/runner.html')).replace(/  /g, '\t'));
  this.write('.bowerrc', this.engine(this.read('../../../../.bowerrc')).replace(/    /g, '\t'));
  this.write('.jshintrc', this.engine(this.read('../../../../.jshintrc')).replace(/  /g, '\t'));
};
