export default {
  print: jest.fn().mockReturnValue('key-name::print'),
  test: jest.fn().mockReturnValue(true),
  testFunction: jest.fn().mockReturnValue(true),
};
