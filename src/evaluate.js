import utils from 'utils';

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
 * Function tester
 *
 * @return {Boolean} alwaysTrue
 */
service.testFunction = () => (true);

/**
 * Test for function with specific
 *
 * @param {*} value - value tested
 * @return {Boolean} isFunction
 */
service.test = (value) => (
  utils.test(value) && service.testFunction(value)
);

export default service;
