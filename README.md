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
</p>


# jest-serializer-functions
Jest snapshot serializer for functions. Reade more about [snapshotSerializers](https://jestjs.io/docs/en/configuration.html#snapshotserializers-array-string)

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
{
  ...
  "snapshotSerializers":[
    "jest-serializer-functions"
  ],
  ...
}
```

npm i --save-dev babel-jest @babel/core babel-core@7.0.0-bridge.0