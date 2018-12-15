// tested
import utils from './../src/utils';

describe('utils', () => {

  describe('print', () => {

    it('should return default string when param has falsy value (empty string)', () => {
      expect(utils.print('')).toBe('[Function]');
    });

    it('should return default string when param has falsy value (undefined)', () => {
      expect(utils.print()).toBe('[Function]');
    });

    it('should return default string when param has falsy value (null)', () => {
      expect(utils.print(null)).toBe('[Function]');
    });

    it('should return default string concatenated with param value when param has truthy value', () => {
      expect(utils.print('awesomeFn')).toBe('[Function] awesomeFn');
    });
  });

  describe('test', () => {
    it('returns true when param is a function', () => {
      expect(utils.test(function () {/*impl*/})).toBe(true);
    });

    it('returns false when param is a bool', () => {
      expect(utils.test(true)).toBe(false);
    });

    it('returns false when param is a number', () => {
      expect(utils.test(5)).toBe(false);
    });

    it('returns false when param is a string', () => {
      expect(utils.test('str')).toBe(false);
    });

    it('returns false when param is an array', () => {
      expect(utils.test(['str'])).toBe(false);
    });

    it('returns false when param is an object', () => {
      expect(utils.test({})).toBe(false);
    });

  });
});
