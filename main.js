export const Done = {};

export const None = {};
/**
 *	Return an iterable that continously call `fn` argument,
 *	iterating over the results.
 *
 *	@param {Function} fn the function that returns result iterable items.
 *	@return A new iterable that iterate over `fn` results.
 *	@example
 *	const arr = [42, 43, 44];
 *	const result = iterateFunction(() => {
 *		if (arr.length === 0) {
 *			return Done;
 *		}
 *		return arr.shift() + 1;
 *	});
 *	// results === [43, 44, 45]
 */
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

