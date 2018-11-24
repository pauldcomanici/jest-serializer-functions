import utils from 'utils';

const service = {};

/**
 * Prints string for the jest mock.
 *
 * @param {Function} value - function tested
 * @param {Function} value.getMockName - getter that returns function name
 * @return {String} serializedFunction
 */
service.print = (value) => {
  let fnName = '';
  const mockedFnName = value.getMockName();
  if (mockedFnName === 'jest.fn()') {
    fnName = '';
  }

  return utils.print(fnName);
};

/**
 * Test for jest mock, value is a function.
 *
 * @param {Function} value - value tested
 * @param {Boolean} [value._isMockFunction] - flag as it is exposed by jest when function is mocked
 * @return {Boolean} isJestMock
 */
service.testFunction = (value) => (
  Boolean(value._isMockFunction)
);

/**
 * Tester. Uses generic function tested and specific tester.
 *
 * @param {*} value - value tested
 * @return {Boolean} isJestMock
 */
service.test = (value) => (
  utils.test(value) && service.testFunction(value)
);

export default service;
