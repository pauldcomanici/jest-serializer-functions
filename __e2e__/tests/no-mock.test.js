// tested
import fixtures from './../__fixtures__/index';

describe('fixtures - no mock', () => {
  it('function used as prop', () => {
    expect(fixtures.awesomeObj).toMatchSnapshot();
  });
});

