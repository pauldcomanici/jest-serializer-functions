// tested
import keyDisplayName from './../src/key-display-name';

// services
import genericName from './../src/generic-name';
jest.mock('./../src/generic-name');

describe('keyDisplayName', () => {
  const mocks = {
    value: function() {/*impl*/},
  };
  const genericNameByKey = genericName('displayName');

  describe('print', () => {
    it('returns result from generic serialiser based on function property `displayName`', () => {
      expect(keyDisplayName.print(mocks.value)).toBe(genericNameByKey.print());
    });
  });

  describe('testFunction', () => {
    it('returns result from generic serialiser based on function property `displayName`', () => {
      expect(keyDisplayName.testFunction(mocks.value)).toBe(genericNameByKey.testFunction());
    });
  });

  describe('test', () => {
    it('returns result from generic serialiser based on function property `displayName`', () => {
      expect(keyDisplayName.test(mocks.value)).toBe(genericNameByKey.test());
    });
  });

});