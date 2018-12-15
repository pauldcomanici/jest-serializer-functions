// tested
import jestMock from './../src/jest-mock';

// services
import utils from './../src/utils';
jest.mock('./../src/utils');

describe('jestMock', () => {
  const mocks = {};
  let testSpecificMocks;

  beforeAll(() => {
    mocks.value = function () {/*impl*/};
    mocks.value._isMockFunction = true;
    mocks.value.getMockName = () => 'jest.fn()';
  });

  beforeEach(() => {
    testSpecificMocks = {};
  });

  describe('print', () => {
    afterEach(() => {
      utils.print.mockClear();
    });

    it('should print using an empty string when value is a jest mock', () => {
      jestMock.print(mocks.value);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using specific string when value is not a jest mock', () => {
      testSpecificMocks.value = () => {/*impl*/};
      testSpecificMocks.value.getMockName = () => 'specific-mock-name';
      jestMock.print(testSpecificMocks.value);

      expect(utils.print).toHaveBeenCalledWith('specific-mock-name');
    });
  });

  describe('testFunction', () => {
    it('should return true when function is a mocked function (has truthy value for `_isMockFunction` prop)', () => {
      expect(jestMock.testFunction(mocks.value)).toBe(true);
    });

    it('should return false when function does not have desired property', () => {
      expect(jestMock.testFunction(()=> ({}))).toBe(false);
    });

    it('should return false when function has desired property with falsy value', () => {
      testSpecificMocks.value = function () {/*impl*/};
      testSpecificMocks.value._isMockFunction = false;

      expect(jestMock.testFunction(testSpecificMocks.value)).toBe(false);
    });
  });

  describe('test', () => {
    beforeAll(() => {
      jest.spyOn(jestMock, 'testFunction').mockReturnValue(true);
    });
    afterEach(() => {
      utils.test.mockClear();
      jestMock.testFunction.mockClear();
    });
    afterAll(() => {
      jestMock.testFunction.mockRestore();
    });

    it('will use utility tester to check if value is a function', () => {
      jestMock.test(mocks.value);

      expect(utils.test).toHaveBeenCalledWith(mocks.value);
    });

    it('will use own tester to check if value has desired property with truthy value', () => {
      jestMock.test(mocks.value);

      expect(jestMock.testFunction).toHaveBeenCalledWith(mocks.value);
    });

    it('returns true if utility tester and own tester returns true', () => {
      expect(jestMock.test(mocks.value)).toBe(true);
    });

    it('returns false if utility tester returns false', () => {
      utils.test.mockReturnValueOnce(false);

      expect(jestMock.test(mocks.value)).toBe(false);
    });

    it('returns false if own tester returns false', () => {
      jestMock.testFunction.mockReturnValueOnce(false);

      expect(jestMock.test(mocks.value)).toBe(false);
    });
  });

});
