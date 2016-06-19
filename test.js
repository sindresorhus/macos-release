import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m('13.2.0'), {
		name: 'Mavericks',
		version: '10.9'
	});
});
