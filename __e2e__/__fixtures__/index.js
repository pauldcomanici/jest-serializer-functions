// dependencies
import service from './service';

const fixtures = {};

fixtures.awesomeObj = {
  anonymous: service.myAnonymousFunction,
  arrow: service.myArrowFunction,
  named: service.myNamedFunction,
};

fixtures.awesomeFn = (obj) => (obj);

export default fixtures;
