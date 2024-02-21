import { StoreApi, UseBoundStore } from 'zustand'

type WithSelectors<S> = S extends { getState: () => infer T }
	? S & { use: { [K in keyof T]: () => T[K] } }
	: never;

/**
 * Creates a `use` object on the store that contains a selector for each key in the store's state.
 * @param _store The store to create selectors for.
 * @returns The store with selectors.
 */
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
	_store: S,
) => {
	const store = _store as WithSelectors<typeof _store>;
	store.use = {};
	for (const k of Object.keys(store.getState())) {
		// biome-ignore lint/suspicious/noExplicitAny: Provided code is for generic use
		(store.use as any)[k] = () => store((s) => s[k as keyof typeof s]) // skipcq: JS-0323
	}

	return store;
};

export default createSelectors;
