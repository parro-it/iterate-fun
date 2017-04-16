export function iterateFunction(fn, source) {
	// Dconsole.log({source: typeof source[Symbol.iterator]})
	if (typeof source[Symbol.iterator] === 'function') {
		const sourceIterator = source[Symbol.iterator];
		source = sourceIterator.call(source);
	}

	return {
		[Symbol.iterator]: () => ({
			next() {
				return fn(source.next.bind(source));
			}
		})
	};
}
