// tested
import genericName from './../src/generic-name';

// services
import utils from './../src/utils';
jest.mock('./../src/utils');

describe('genericName', () => {
  const mocks = {
    propName: 'nameForProp',
  };
  const genericNameByKey = genericName(mocks.propName);
  let testSpecificMocks;

  beforeAll(() => {
    mocks.value = function () {/*impl*/};
    mocks.value[mocks.propName] = 'prop-name-value';
  });

  beforeEach(() => {
    testSpecificMocks = {};
  });

  describe('print', () => {
    afterEach(() => {
      utils.print.mockClear();
    });

    it('should print using property value from function', () => {
      genericNameByKey.print(mocks.value);

      expect(utils.print).toHaveBeenCalledWith(mocks.value[mocks.propName]);
    });

  });

  describe('testFunction', () => {
    it('should return true when function has desired property with truthy value', () => {
      expect(genericNameByKey.testFunction(mocks.value)).toBe(true);
    });

    it('should return false when function does not have desired property', () => {
      expect(genericNameByKey.testFunction({})).toBe(false);
    });

    it('should return false when function has desired property with falsy value', () => {
      testSpecificMocks.value = function () {/*impl*/};
      testSpecificMocks.value[mocks.propName] = false;

      expect(genericNameByKey.testFunction(testSpecificMocks.value)).toBe(false);
    });
  });

  describe('test', () => {
    beforeAll(() => {
      jest.spyOn(genericNameByKey, 'testFunction').mockReturnValue(true);
    });
    afterEach(() => {
      utils.test.mockClear();
      genericNameByKey.testFunction.mockClear();
    });
    afterAll(() => {
      genericNameByKey.testFunction.mockRestore();
    });

    it('will use utility tester to check if value is a function', () => {
      genericNameByKey.test(testSpecificMocks.value);

      expect(utils.test).toHaveBeenCalledWith(testSpecificMocks.value);
    });

    it('will use own tester to check if value has desired property with truthy value', () => {
      genericNameByKey.test(testSpecificMocks.value);

      expect(genericNameByKey.testFunction).toHaveBeenCalledWith(testSpecificMocks.value);
    });

    it('returns true if utility tester and own tester returns true', () => {
      expect(genericNameByKey.test(testSpecificMocks.value)).toBe(true);
    });

    it('returns false if utility tester returns false', () => {
      utils.test.mockReturnValueOnce(false);

      expect(genericNameByKey.test(testSpecificMocks.value)).toBe(false);
    });

    it('returns false if own tester returns false', () => {
      genericNameByKey.testFunction.mockReturnValueOnce(false);

      expect(genericNameByKey.test(testSpecificMocks.value)).toBe(false);
    });
  });
});
