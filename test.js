import test from 'ava';
import {iterateFunction, Done, None} from '.';

const isEven = value => value % 2 === 0;

test('return an iteration of fn results', t => {
	const arr = [42, 43, 44];
	const result = iterateFunction(() => {
		if (arr.length === 0) {
			return Done;
		}
		return arr.shift() + 1;
	});
	t.deepEqual(Array.from(result), [43, 44, 45]);
});

test('done stop the iteration', t => {
	const arr = [42, 43, 44];
	const result = iterateFunction(() => {
		if (arr.length === 2) {
			return Done;
		}
		return arr.shift();
	});
	t.deepEqual(Array.from(result), [42]);
});

test('None results are skipped', t => {
	const arr = [42, 43, 44];
	const result = iterateFunction(() => {
		if (arr.length === 0) {
			return Done;
		}

		const value = arr.shift();

		return isEven(value) ? value : None;
	});
	t.deepEqual(Array.from(result), [42, 44]);
});
