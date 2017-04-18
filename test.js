import test from 'ava';
import {iterateFunction, Done} from '.';

test('exports a function', t => {
	const arr = [42, 43, 44];
	const result = iterateFunction(() => {
		if (arr.length === 0) {
			return Done;
		}
		return arr.shift() + 1;
	});
	t.deepEqual(Array.from(result), [43, 44, 45]);
});
