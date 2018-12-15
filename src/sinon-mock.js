import utils from './utils';

const service = {};

/**
 * Prints string for sinon mock.
 *
 * @param {Function} value - function tested
 * @param {String} value.displayName - function name
 * @return {String} serializedFunction
 */
service.print = (value) => {
  let fnName = value.displayName || '';
  if (fnName === 'spy') {
    // this is a spy
    fnName = '';
  }

  return utils.print(fnName);
};

/**
 *
 * Test for sinon mock, value is a function.
 *
 * @param {Function} value - value tested
 * @param {Boolean} [value.isSinonProxy] - flag as it is exposed by sinon when function is mocked
 * @return {Boolean} isSinonMock
 */
service.testFunction = (value) => (
  Boolean(value.isSinonProxy)
);

/**
 * Tester. Uses generic function tested and specific tester.
 *
 * @param {*} value - value tested
 * @return {Boolean} isSinonMock
 */
service.test = (value) => (
  utils.test(value) && service.testFunction(value)
);

export default service;
