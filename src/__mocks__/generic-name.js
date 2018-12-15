export default jest.fn.mockImplementation(
  (prop) => (
    {
      print: jest.fn().mockReturnValue(`generic-${prop}::print`),
      test: jest.fn().mockReturnValue(true),
      testFunction: jest.fn().mockReturnValue(true),
    }
  )
);
