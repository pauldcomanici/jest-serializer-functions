import utils from './utils';

const service = {};

/**
 * Prints string with function evaluated
 *
 * @param {Function} value - function tested
 * @param {Function} serialize - default serializer
 * @return {String} serializedFunction
 */
service.print = (value, serialize) => {
  let fnData = '';
  let evaluatedValue = '';
  try {
    // called with empty object as param as some code uses function calls with params
    // and the param may be from an object where destructuring is used.
    evaluatedValue = value({}, {}, {}, {}, {});
    if (evaluatedValue && typeof evaluatedValue !== 'string') {
      fnData = `() => (${serialize(evaluatedValue)})`;
    }
  } catch (e) {
    // ignore
  }

  return utils.print(fnData);
};

/**
 * Specific tester.
 * This function exist just to support consistent model for every micro-serialiser.
 *
 * @return {Boolean} alwaysTrue
 */
service.testFunction = () => (true);

/**
 * Tester. Uses generic function tested and specific tester.
 *
 * @param {*} value - value tested
 * @return {Boolean} isFunction
 */
service.test = (value) => (
  utils.test(value)
);

export default service;
