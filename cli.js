#!/usr/bin/env node
'use strict';
var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var osxRelease = require('./');
var input = argv._;

function help() {
	console.log([
		pkg.description,
		'',
		'Usage',
		'  $ osx-release [release]',
		'',
		'Example',
		'  $ osx-release',
		'  Mavericks 10.9',
		'  $ osx-release 14.0.0',
		'  Yosemite 10.10'
	].join('\n'));
}

if (argv.help) {
	help();
	return;
}

if (argv.version) {
	console.log(pkg.version);
	return;
}

var output = osxRelease(input[0]);

if (!output.name || !output.version) {
	process.exit(1);
}

console.log(output.name + ' ' + output.version);
