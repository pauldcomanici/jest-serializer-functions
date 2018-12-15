// tested
import jestSerializerFunctions from './../src/index';

// services
import utils from './../src/utils';
jest.mock('./../src/utils');
import sinonMock from './../src/sinon-mock';
jest.mock('./../src/sinon-mock');
import jestMock from './../src/jest-mock';
jest.mock('./../src/jest-mock');
import keyDisplayName from './../src/key-display-name';
jest.mock('./../src/key-display-name');
import keyName from './../src/key-name';
jest.mock('./../src/key-name');
import evaluate from './../src/evaluate';
jest.mock('./../src/evaluate');

describe('jestSerializerFunctions', () => {
  const mocks = {
    serialize: function () {/*impl for serializer*/},
    value: function () {/*impl*/},
  };

  describe('print', () => {
    afterEach(() => {
      sinonMock.testFunction.mockClear();
      sinonMock.print.mockClear();
      jestMock.testFunction.mockClear();
      jestMock.print.mockClear();
      keyDisplayName.testFunction.mockClear();
      keyDisplayName.print.mockClear();
      keyName.testFunction.mockClear();
      keyName.print.mockClear();
      evaluate.testFunction.mockClear();
      evaluate.print.mockClear();
      utils.print.mockClear();
    });

    it('should check if the function is a sinon mock', () => {
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(sinonMock.testFunction).toHaveBeenCalledWith(mocks.value);
    });

    it('should print specific sinon-mock data if the function is a sinon mock', () => {
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(sinonMock.print).toHaveBeenCalledWith(mocks.value);
    });

    it('should not print specific sinon-mock data if the function is not a sinon mock', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(sinonMock.print).not.toHaveBeenCalled();
    });

    it('should check if the function is a jest mock', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(jestMock.testFunction).toHaveBeenCalledWith(mocks.value);
    });

    it('should print specific jest-mock data if the function is a jest mock', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(jestMock.print).toHaveBeenCalledWith(mocks.value);
    });

    it('should not print specific jest-mock data if the function is not a jest mock', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(jestMock.print).not.toHaveBeenCalled();
    });

    it('should check if the function has truthy value for `displayName` property', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(keyDisplayName.testFunction).toHaveBeenCalledWith(mocks.value);
    });

    it('should print specific displayName data if the function has truthy value for `displayName` property', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(keyDisplayName.print).toHaveBeenCalledWith(mocks.value);
    });

    it('should not print specific displayName data if the function has falsy value for `displayName` property', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(keyDisplayName.print).not.toHaveBeenCalled();
    });

    it('should check if the function has truthy value for `name` property', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(keyName.testFunction).toHaveBeenCalledWith(mocks.value);
    });

    it('should print specific name data if the function has truthy value for `name` property', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(keyName.print).toHaveBeenCalledWith(mocks.value);
    });

    it('should not print specific name data if the function has falsy value for `name` property', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      keyName.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(keyName.print).not.toHaveBeenCalled();
    });

    it('should check if the function can be evaluated', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      keyName.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(evaluate.testFunction).toHaveBeenCalledWith();
    });

    it('should print specific evaluated data if the function can be evaluated', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      keyName.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(evaluate.print).toHaveBeenCalledWith(mocks.value, mocks.serialize);
    });

    it('should not print specific evaluated data if the function cannot be evaluated', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      keyName.testFunction.mockReturnValueOnce(false);
      evaluate.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(evaluate.print).not.toHaveBeenCalled();
    });

    it('should print default data as fallback', () => {
      sinonMock.testFunction.mockReturnValueOnce(false);
      jestMock.testFunction.mockReturnValueOnce(false);
      keyDisplayName.testFunction.mockReturnValueOnce(false);
      keyName.testFunction.mockReturnValueOnce(false);
      evaluate.testFunction.mockReturnValueOnce(false);
      jestSerializerFunctions.print(mocks.value, mocks.serialize);

      expect(utils.print).toHaveBeenCalledWith();
    });
  });

  describe('test', () => {
    afterEach(() => {
      utils.test.mockClear();
    });

    it('will use utility tester to check if value is a function', () => {
      jestSerializerFunctions.test(mocks.value);

      expect(utils.test).toHaveBeenCalledWith(mocks.value);
    });

    it('returns true if utility tester returns true', () => {
      expect(jestSerializerFunctions.test(mocks.value)).toBe(true);
    });

    it('returns false if utility tester returns false', () => {
      utils.test.mockReturnValueOnce(false);

      expect(jestSerializerFunctions.test(mocks.value)).toBe(false);
    });
  });
});
