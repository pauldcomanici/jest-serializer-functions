import utils from 'utils';
import sinonMock from 'sinon-mock';
import jestMock from 'jest-mock';
import keyDisplayName from 'key-display-name';
import keyName from 'key-name';
import evaluate from 'evaluate';

const service = {};

service.print = (value, serialize) => (
  (sinonMock.testFunction(value) && sinonMock.print(value)) ||
  (jestMock.testFunction(value) && jestMock.print(value)) ||
  (keyDisplayName.testFunction(value) && keyDisplayName.print(value)) ||
  (keyName.testFunction(value) && keyName.print(value)) ||
  (evaluate.testFunction(value, serialize) && evaluate.print(value, serialize)) ||
  utils.print()
);

/**
 * Test for function
 *
 * @param {*} value - value tested
 * @return {Boolean} isFunction
 */
service.test = (value) => (
  utils.test(value)
);

export default service;
