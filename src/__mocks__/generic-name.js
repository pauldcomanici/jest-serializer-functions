/**
 * Function `test` and `testFunction` returns true or false
 *  here we are returning string with property name in it, that will help test generated serializers
 */
export default jest.fn().mockImplementation(
  (prop) => (
    {
      print: jest.fn().mockReturnValue(`generic-${prop}::print`),
      test: jest.fn().mockReturnValue(`generic-${prop}::test`),
      testFunction: jest.fn().mockReturnValue(`generic-${prop}::testFunction`),
    }
  )
);
