import { it, expect, describe } from 'vitest';

import filter, { filterActions, initialState } from './filter';

describe('filter reducer', () => {
  it('has initial state', () => {
    expect(filter(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('handles initialize', () => {
    const state = filter(
      { ...initialState, pricingOptions: ['0', '1', '2'] },
      filterActions.initialize(),
    );
    expect(state.pricingOptions === []);
  });

  it('handles setPricingOptions', () => {
    const payload = ['0'];
    const state = filter(
      { ...initialState, pricingOptions: [] },
      filterActions.setPricingOptions(payload),
    );

    expect(state.pricingOptions === payload);
  });
});
