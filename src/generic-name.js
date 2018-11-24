import utils from 'utils';

/**
 * Serialise generator based on specified property
 *
 * @param {String} propName - property name from function
 * @return {Object} snapshotSerialiser
 */
const generator = (propName) => {
  const service = {};

  /**
   * Prints string for function based on property name
   *
   * @param {Function} value - function tested
   * @return {String} serializedFunction
   */
  service.print = (value) => (
    utils.print(value[propName])
  );

  /**
   * Test for property name on function
   *
   * @param {Function} value - value tested
   * @return {Boolean} isWithTruthyPropValue
   */
  service.testFunction = (value) => (
    Boolean(value[propName])
  );

  /**
   * Tester. Uses generic function tested and specific tester.
   *
   * @param {*} value - value tested
   * @return {Boolean} isFunctionWithTruthyPropValue
   */
  service.test = (value) => (
    utils.test(value) && service.testFunction(value)
  );

  return service;
};

export default generator;
