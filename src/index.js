import utils from './utils';
import sinonMock from './sinon-mock';
import jestMock from './jest-mock';
import keyDisplayName from './key-display-name';
import keyName from './key-name';
import evaluate from './evaluate';

const service = {};

/**
 * Print data for the value
 *
 * @param {*} value - value being  used for serialisation
 * @param {Function} serialize - default serialise function as it is expose by Jest
 * @returns {String|Object} serialisedData
 */
service.print = (value, serialize) => (
  (sinonMock.testFunction(value) && sinonMock.print(value)) ||
  (jestMock.testFunction(value) && jestMock.print(value)) ||
  (keyDisplayName.testFunction(value) && keyDisplayName.print(value)) ||
  (keyName.testFunction(value) && keyName.print(value)) ||
  (evaluate.testFunction() && evaluate.print(value, serialize)) ||
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
