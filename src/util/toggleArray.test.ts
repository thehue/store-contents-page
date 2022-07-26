import { it, expect, describe } from 'vitest';
import { toggleArray } from './toggleArray';

describe('toggleArray', () => {
  it('should subtract the input value, if input array has the input value', () => {
    const inputArray = ['0'];
    const inputValue = '0';

    const result = toggleArray(inputArray, inputValue);

    expect(result).toStrictEqual([]);
  });

  it("should add the input value, if input array doesn't have the input value", () => {
    const inputArray = [] as string[];
    const inputValue = '0';

    const result = toggleArray(inputArray, inputValue);

    expect(result).toStrictEqual(['0']);
  });
});
