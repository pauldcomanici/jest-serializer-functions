export default {
  print: jest.fn().mockReturnValue('jest-mock::print'),
  test: jest.fn().mockReturnValue(true),
  testFunction: jest.fn().mockReturnValue(true),
};
