
const service = {};

/**
 * Print serialized function
 *
 * @param {String} [name] - function name or serialized data
 * @return {String} serializedFunction
 */
service.print = (name) => {
  const fnPrefix = '[Function]';
  const fnName = name || '';
  return fnName ? `${fnPrefix} ${fnName}` : fnPrefix;
};

/**
 * Test for function
 *
 * @param {*} value - value tested
 * @return {Boolean} isFunction
 */
service.test = (value) => (
  typeof value === 'function'
);

export default service;
