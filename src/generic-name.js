import utils from 'utils';

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
   * Test for display name property on function
   *
   * @param {Function} value - value tested
   * @return {Boolean} isWithTruthyPropValue
   */
  service.testFunction = (value) => (
    Boolean(value[propName])
  );

  /**
   * Test for jest mock
   *
   * @param {*} value - value tested
   * @return {Boolean} isFunctionWithTruthyPropValue
   */
  service.test = (value) => (
    utils.test(value) && service.testFunction(value)
  );
};

export default generator;
