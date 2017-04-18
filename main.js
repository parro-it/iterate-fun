export const Done = {};

export const None = {};

export function iterateFunction(fn) {
	function next() {
		const value = fn();

		if (value === Done) {
			return {done: true};
		}

		if (value === None) {
			return next();
		}

		return {
			value,
			done: false
		};
	}

	return {
		[Symbol.iterator]: () => ({next})
	};
}

