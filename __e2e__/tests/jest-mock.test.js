// tested
import fixtures from './../__fixtures__/index';

// dependencies
jest.mock('./../__fixtures__/service');

describe('fixtures - jest mock', () => {
  it('function used as prop', () => {
    expect(fixtures.awesomeObj).toMatchSnapshot();
  });
});

