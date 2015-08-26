# jstransformer-prismjs

[Prism.js](http://prismjs.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-prism/master.svg)](https://travis-ci.org/jstransformers/jstransformer-prism)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-prism/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-prism?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-prism/master.svg)](http://david-dm.org/jstransformers/jstransformer-prism)
[![NPM version](https://img.shields.io/npm/v/jstransformer-prism.svg)](https://www.npmjs.org/package/jstransformer-prism)

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
