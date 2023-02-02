import assert from 'assert'
import { sum } from '../src'
import { ERROR_THE_VARIATE_IS_NOT_EITHER_STRING_TYPE_OR_NUMBER_TYPE } from '../reminder'

describe('sum', () => {
  it('should sum two numbers', () => {
    assert.strictEqual(sum(6, 4), 10)
    assert.strictEqual(sum(-6, 4), -2)
    assert.strictEqual(sum(-6, -4), -10)
  })

  it('should not coerce arguments to numbers', () => {
    assert.strictEqual(sum('6', '4'), '64')
    assert.strictEqual(sum('x', 'y'), 'xy')
    assert.strictEqual(sum('x', 10), 'x10')
    expect(() => sum({} as string, 10)).toThrow(
      ERROR_THE_VARIATE_IS_NOT_EITHER_STRING_TYPE_OR_NUMBER_TYPE,
    )
  })
})
