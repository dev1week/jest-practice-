import { describe, expect, it } from '@jest/globals';
import { sum } from './sum.js';

describe('sum', () => {
  it('두 숫자의 합을 반환한다', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('음수와 0을 처리한다', () => {
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
});
