import sinon from 'sinon';

// tested
import fixtures from './../__fixtures__/index';

// dependencies
import service from './../__fixtures__/service';

describe('fixtures - sinon mock', () => {
  let testSpecificMocks;

  beforeEach(() => {
    sinon.spy(service, 'myArrowFunction');
    sinon.spy(service, 'myAnonymousFunction');
    sinon.stub(service, 'myNamedFunction').returns('sinon-stub-result');

    testSpecificMocks = {};
  });
  afterEach(() => {
    service.myArrowFunction.restore();
    service.myAnonymousFunction.restore();
    service.myNamedFunction.restore();
  });

  it('static - function used as prop', () => {
    expect(fixtures.awesomeObj).toMatchSnapshot();
  });

  it('dynamic - function used as prop', () => {
    testSpecificMocks.obj = {
      fn: function x() {/*impl*/},
      spy: sinon.spy(),
      stub: service.myNamedFunction,
    };

    expect(fixtures.awesomeFn(testSpecificMocks.obj)).toMatchSnapshot();
  });
});

