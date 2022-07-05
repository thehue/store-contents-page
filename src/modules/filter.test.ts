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

  it('handles togglePricingOptions', () => {
    const noZeroPricingOptionState = { ...initialState, pricingOptions: [] };
    const onlyZeroPricingOptionState = {
      ...initialState,
      pricingOptions: ['0'],
    };

    const toggledPrigingOptionState1 = filter(
      noZeroPricingOptionState,
      filterActions.togglePricingOptions('0'),
    );
    const toggledPrigingOptionState2 = filter(
      onlyZeroPricingOptionState,
      filterActions.togglePricingOptions('0'),
    );

    expect(toggledPrigingOptionState1.pricingOptions).toStrictEqual(['0']);
    expect(toggledPrigingOptionState2.pricingOptions).toStrictEqual([]);
  });
});
