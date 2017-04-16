import test from 'ava';
import {iterateFunction} from '.';

test('exports a function', t => {
	const arr = [42, 43, 44];
	const result = iterateFunction(next => {
		const res = next();
		res.value = Number(res.value) + 1;
		return res;
	}, arr);
	t.deepEqual(Array.from(result), [43, 44, 45]);
});
