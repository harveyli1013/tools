
import assert from 'assert';
import {myFirstFunc} from '../src';

describe('validate:', () => {
  /**
   * myFirstFunc
   */
  describe('myFirstFunc', () => {
    test('return hello world', () => {
      assert.strictEqual(myFirstFunc('world'), 'hello world');
    });
  });
});