# jstransformer-prismjs

[Prism.js](http://prismjs.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-prismjs/master.svg)](https://travis-ci.org/jstransformers/jstransformer-prismjs)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-prismjs/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-prismjs)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-prismjs/master.svg)](http://david-dm.org/jstransformers/jstransformer-prismjs)
[![NPM version](https://img.shields.io/npm/v/jstransformer-prismjs.svg)](https://www.npmjs.org/package/jstransformer-prismjs)

## Installation

    npm install jstransformer-prismjs

## API

```js
var prism = require('jstransformer')(require('jstransformer-prismjs'))

prism.render('p { color: red }', { language: 'css' }).body
//=> '<pre><code class="language-css">p { color: red }</code></pre>'
```

## License

MIT
