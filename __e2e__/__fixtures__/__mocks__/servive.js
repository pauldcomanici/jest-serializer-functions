const mock = jest.genMockFromModule('./../service');

export default {
  ...mock.default,
  // overwrite specific mocks
  myFunction: jest.fn().mockReturnValue('my-function-result-mocked'),
};
