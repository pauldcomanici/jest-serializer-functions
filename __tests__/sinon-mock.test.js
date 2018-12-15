// tested
import sinonMock from './../src/sinon-mock';

// services
import utils from './../src/utils';
jest.mock('./../src/utils');

describe('sinonMock', () => {
  const mocks = {};
  let testSpecificMocks;

  beforeAll(() => {
    mocks.value = function () {/*impl*/};
    mocks.value.isSinonProxy = true;
    mocks.value.displayName = 'spy';
  });

  beforeEach(() => {
    testSpecificMocks = {};
  });

  describe('print', () => {
    afterEach(() => {
      utils.print.mockClear();
    });

    it('should print using an empty string when value is a sinon mock', () => {
      sinonMock.print(mocks.value);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using an empty string when value is not a sinon mock (displayName prop has falsy value)', () => {
      testSpecificMocks.value = () => {/*impl*/};
      sinonMock.print(testSpecificMocks.value);

      expect(utils.print).toHaveBeenCalledWith('');
    });

    it('should print using specific string when value is not a sinon mock', () => {
      testSpecificMocks.value = () => {/*impl*/};
      testSpecificMocks.value.displayName = 'specific-mock-name';
      sinonMock.print(testSpecificMocks.value);

      expect(utils.print).toHaveBeenCalledWith('specific-mock-name');
    });
  });

  describe('testFunction', () => {
    it('should return true when function is a mocked function (has truthy value for `isSinonProxy` prop)', () => {
      expect(sinonMock.testFunction(mocks.value)).toBe(true);
    });

    it('should return false when function does not have desired property', () => {
      expect(sinonMock.testFunction(()=> ({}))).toBe(false);
    });

    it('should return false when function has desired property with falsy value', () => {
      testSpecificMocks.value = function () {/*impl*/};
      testSpecificMocks.value.isSinonProxy = false;

      expect(sinonMock.testFunction(testSpecificMocks.value)).toBe(false);
    });
  });

  describe('test', () => {
    beforeAll(() => {
      jest.spyOn(sinonMock, 'testFunction').mockReturnValue(true);
    });
    afterEach(() => {
      utils.test.mockClear();
      sinonMock.testFunction.mockClear();
    });
    afterAll(() => {
      sinonMock.testFunction.mockRestore();
    });

    it('will use utility tester to check if value is a function', () => {
      sinonMock.test(mocks.value);

      expect(utils.test).toHaveBeenCalledWith(mocks.value);
    });

    it('will use own tester to check if value has desired property with truthy value', () => {
      sinonMock.test(mocks.value);

      expect(sinonMock.testFunction).toHaveBeenCalledWith(mocks.value);
    });

    it('returns true if utility tester and own tester returns true', () => {
      expect(sinonMock.test(mocks.value)).toBe(true);
    });

    it('returns false if utility tester returns false', () => {
      utils.test.mockReturnValueOnce(false);

      expect(sinonMock.test(mocks.value)).toBe(false);
    });

    it('returns false if own tester returns false', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);

      expect(sinonMock.test(mocks.value)).toBe(false);
    });
  });

});
