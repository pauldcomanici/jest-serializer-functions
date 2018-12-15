export default {
  print: jest.fn().mockReturnValue('evaluate::print'),
  test: jest.fn().mockReturnValue(true),
  testFunction: jest.fn().mockReturnValue(true),
};
