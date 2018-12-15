export default {
  print: jest.fn().mockReturnValue('sinon-mock::print'),
  test: jest.fn().mockReturnValue(true),
  testFunction: jest.fn().mockReturnValue(true),
};
