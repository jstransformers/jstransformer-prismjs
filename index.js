'use strict'

const extend = require('extend-shallow')
const escape = require('jstransformer-escape-html').render

exports.name = 'prismjs'
exports.inputFormats = ['code', 'prismjs', 'prism', 'highlight']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const opts = extend({}, options || {}, locals || {})
  const language = opts.language || 'none'
  const prefix = '<pre><code class="language-' + language + '">'
  const suffix = '</code></pre>'
  return prefix + escape(str) + suffix
}
