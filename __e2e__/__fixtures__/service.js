const service = {};

service.myArrowFunction = () => ('my-arrow-function-result');
service.myAnonymousFunction = function () {return 'my-anonymous-function-result'};
service.myNamedFunction = function named() {return 'my-named-function-result'};

export default service;
