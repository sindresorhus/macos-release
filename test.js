import test from 'ava';
import macosRelease from '.';

test('main', t => {
	t.deepEqual(macosRelease('13.2.0'), {
		name: 'Mavericks',
		version: '10.9'
	});
});
