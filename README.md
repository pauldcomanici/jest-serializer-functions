<p align="center">
  <a href="https://travis-ci.org/darkyndy/jest-serializer-functions">
    <img
      alt="Travis Status"
      src="https://travis-ci.org/darkyndy/jest-serializer-functions.svg?branch=master"
    />
  </a>
  <a href="https://codecov.io/gh/darkyndy/jest-serializer-functions">
    <img
      alt="Coverage Status"
      src="https://codecov.io/gh/darkyndy/jest-serializer-functions/branch/master/graph/badge.svg"
    />
  </a>
  <a href="https://snyk.io/test/github/darkyndy/jest-serializer-functions?targetFile=package.json">
    <img
      alt="Known Vulnerabilities"
      src="https://snyk.io/test/github/darkyndy/jest-serializer-functions/badge.svg?targetFile=package.json"
      data-canonical-src="https://snyk.io/test/github/darkyndy/jest-serializer-functions?targetFile=package.json"
      style="max-width:100%;"
    />
  </a>
  <a href="https://david-dm.org/darkyndy/jest-serializer-functions">
    <img
      alt="dependencies status"
      src="https://david-dm.org/darkyndy/jest-serializer-functions/status.svg"
    />
  </a>
  <a href="https://david-dm.org/darkyndy/jest-serializer-functions?type=dev">
    <img
      alt="devDependencies status"
      src="https://david-dm.org/darkyndy/jest-serializer-functions/dev-status.svg"
    />
  </a>
  <a href="https://www.npmjs.com/package/jest-serializer-functions">
    <img
      alt="npm Downloads"
      src="https://img.shields.io/npm/dm/jest-serializer-functions.svg?maxAge=57600"
    />
  </a>
  <a href="https://github.com/darkyndy/jest-serializer-functions/blob/master/LICENSE">
    <img
      alt="MIT License"
      src="https://img.shields.io/npm/l/jest-serializer-functions.svg"
    />
  </a>
  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fdarkyndy%2Fjest-serializer-functions?ref=badge_shield">
    <img
      alt="FOSSA Status"
      src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdarkyndy%2Fjest-serializer-functions.svg?type=shield"
    />
  </a>
  <br/>
  <a href="https://www.patreon.com/paul_comanici">
    <img
      alt="support the author"
      src="https://img.shields.io/badge/patreon-support%20the%20author-blue.svg"
    />
  </a>
  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T645WN5RWR6WS&source=url">
    <img
      alt="donate"
      src="https://img.shields.io/badge/paypal-donate-blue.svg"
    />
  </a>
</p>


# jest-serializer-functions
Jest snapshot serializer for functions. Read more about [snapshotSerializers](https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string)

## Background
Whenever you are using Jest for snapshot you may notice that functions will appear in snapshots in different ways.
If the function is mocked you will see it as:
* `[Function]`
  * when the function is not mocked with Jest
  * when you have React component that has a function inside JSX (consumers) 
* `[MockFunction]`
  * when the function is mocked with jest, usually implementation is: `myFn = jest.fn()`
* `[MockFunction <<function-name>>]`
  * where `<<function-name>>` is the name of the function
* ```[MockFunction] {calls: [] results: []}```
  * when the mocked function was called previously
  
### How it works
This serializer will help you have a more consistent way of viewing functions as every time will return `[Function]` as the base.

If the function has a name it will serialize it as `[Function] <<function-name>>`.
As the part where the function is mocked or not just adds noise to the important part.

Now the good part :astonished: is when you are using this serialiser
with (React)[https://www.npmjs.com/package/react] (and [enzyme](https://www.npmjs.com/package/enzyme))
as it will improve what you can see in the snapshot. Take as example source code:
```jsx
<Context.Consumer>
  {
    (handler) => (
      <Subscriber
        handler={handler
      />
    )
  }
</Context.Consumer>
```
this will result in a snapshot that will look like:
```jsx
<Context.Consumer>
  [Function]
</Context.Consumer>
```
I would not say this is very helpful (if I change something from the function nothing will break in my snapshot).
This serializer will return:

```jsx
<Context.Consumer>
  () => (<Subscriber
    handler={handler}
  />)
</Context.Consumer>
```

## Installation
```sh
npm install --save-dev jest-serializer-functions
```
Or if you are using [yarn](https://yarnpkg.com/en/)
```sh
yarn add --dev jest-serializer-functions
```

## Usage

### Having jest config as json
```json
// jest.json
{
  ...
  "snapshotSerializers": [
    "jest-serializer-functions"
  ],
  ...
}
```

### Having jest config as json inside package.json
```json
// package.json
{
  ...
  "jest": {
    ...
    "snapshotSerializers": [
      "jest-serializer-functions"
    ],
    ...
  },
  ...
}
```

## Take into consideration

> Everything has pros & cons.

### Pros
This serializer will help you with a better understanding of your functions and fail tests that until now passed when doing partial refactoring.

### Cons
The time to execute your tests will increase (depending on how many snapshots you have like this).

The space used by snapshot will increase, as more data will be stored.

## Contributing

Pull requests and issues are welcome :heart:.
