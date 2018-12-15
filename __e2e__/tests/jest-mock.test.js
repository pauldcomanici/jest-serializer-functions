
// tested
import fixtures from './../__fixtures__/index';

// dependencies
import service from './../__fixtures__/service';
jest.mock('./../__fixtures__/service');

describe('fixtures - jest mock', () => {
  let testSpecificMocks;

  beforeEach(() => {
    testSpecificMocks = {};
  });

  it('static - function used as prop', () => {
    expect(fixtures.awesomeObj).toMatchSnapshot();
  });

  it('dynamic - function used as prop', () => {
    testSpecificMocks.obj = {
      fn: function x() {/*impl*/},
      mockRef: service.myNamedFunction,
      spy: jest.fn().mockReturnValue('jest spy'),
    };

    expect(fixtures.awesomeFn(testSpecificMocks.obj)).toMatchSnapshot();
  });
});

