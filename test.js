'use strict';
var assert = require('assert');
var osxRelease = require('./');

it('should return the name and version of a OS X release', function () {
	assert.deepEqual(osxRelease('13.2.0'), {name: 'Mavericks', version: '10.9'});
});
