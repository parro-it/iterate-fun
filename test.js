import test from 'ava';
import iterateFun from '.';

test('exports a function', t => {
	t.is(typeof iterateFun, 'function');
});
