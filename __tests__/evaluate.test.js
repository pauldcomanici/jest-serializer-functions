// tested
import evaluate from './../src/evaluate';

// services
import utils from './../src/utils';
jest.mock('./../src/utils');

describe('evaluate', () => {
  let testSpecificMocks;

  beforeEach(() => {
    testSpecificMocks = {};
  });

  describe('print', () => {
    beforeEach(() => {
      testSpecificMocks.serializedValue = 'serialize';
      testSpecificMocks.value = 'string';
      testSpecificMocks.serialize = jest.fn().mockImplementation((evaluatedVal) => (
        `${testSpecificMocks.serializedValue}--${typeof evaluatedVal}`
      ));
    });
    afterEach(() => {
      utils.print.mockClear();
    });

    it('should print using an empty string when value is a string', () => {
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using an empty string when value is an object', () => {
      testSpecificMocks.value = {
        prop: 'val',
      };
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using an empty string when value is an array', () => {
      testSpecificMocks.value = ['val', true, 3];
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using an empty string when value is a number', () => {
      testSpecificMocks.value = 3;
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using an empty string when value is a bool', () => {
      testSpecificMocks.value = false;
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using an empty string when value is a function that returns a string', () => {
      testSpecificMocks.value = () => ('str');
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using a string based on serialised value when value is a function that returns an object', () => {
      testSpecificMocks.value = () => ({prop: 'val'});
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith(`() => (${testSpecificMocks.serializedValue}--object)`);
    });

    it('should print using a string based on serialised value when value is a function that returns an array', () => {
      testSpecificMocks.value = () => (['str', 1, true]);
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith(`() => (${testSpecificMocks.serializedValue}--object)`);
    });

    it('should print using a string based on serialised value when value is a function that returns a number', () => {
      testSpecificMocks.value = () => (2);
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith(`() => (${testSpecificMocks.serializedValue}--number)`);
    });

    it('should print using a string based on serialised value when value is a function that returns a bool', () => {
      testSpecificMocks.value = () => (true);
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith(`() => (${testSpecificMocks.serializedValue}--boolean)`);
    });

    it('should print using a string based on serialised value when value is a function that returns a bool', () => {
      testSpecificMocks.value = () => (() => {/*fn impl*/});
      evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize);

      expect(utils.print).toHaveBeenCalledWith(`() => (${testSpecificMocks.serializedValue}--function)`);
    });

    it('returns print utility result', () => {
      expect(
        evaluate.print(testSpecificMocks.value, testSpecificMocks.serialize)
      ).toBe(utils.print());
    });
  });

  describe('testFunction', () => {
    it('should return true as it expects to receive a function, exists only to expose same API', () => {
      expect(evaluate.testFunction()).toBe(true);
    });
  });

  describe('test', () => {
    beforeEach(() => {
      testSpecificMocks.value = function x() {/*code*/};
    });
    afterEach(() => {
      utils.test.mockClear();
    });

    it('will use utility tester to check if value is a function', () => {
      evaluate.test(testSpecificMocks.value);

      expect(utils.test).toHaveBeenCalledWith(testSpecificMocks.value);
    });

    it('returns true if utility tester returns true', () => {
      expect(evaluate.test(testSpecificMocks.value)).toBe(true);
    });

    it('returns false if utility tester returns false', () => {
      utils.test.mockReturnValueOnce(false);

      expect(evaluate.test(testSpecificMocks.value)).toBe(false);
    });
  });
});
