import test from 'ava';
import macosRelease from './index.js';

test('main', t => {
	t.deepEqual(macosRelease('13.2.0'), {
		name: 'Mavericks',
		version: '10.9',
	});

	t.deepEqual(macosRelease('20.0.0'), {
		name: 'Big Sur',
		version: '11',
	});
});

test('unknown version', t => {
	t.deepEqual(macosRelease('4.0.0'), {
		name: 'Unknown',
		version: '',
	});
});
