// tested
import keyName from './../src/key-name';

// services
import genericName from './../src/generic-name';
jest.mock('./../src/generic-name');

describe('keyName', () => {
  const mocks = {
    value: function() {/*impl*/},
  };
  const genericNameByKey = genericName('name');

  describe('print', () => {
    it('returns result from generic serialiser based on function property `name`', () => {
      expect(keyName.print(mocks.value)).toBe(genericNameByKey.print());
    });
  });

  describe('testFunction', () => {
    it('returns result from generic serialiser based on function property `name`', () => {
      expect(keyName.testFunction(mocks.value)).toBe(genericNameByKey.testFunction());
    });
  });

  describe('test', () => {
    it('returns result from generic serialiser based on function property `name`', () => {
      expect(keyName.test(mocks.value)).toBe(genericNameByKey.test());
    });
  });
});