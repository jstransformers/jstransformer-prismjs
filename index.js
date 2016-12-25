'use strict'

var extend = require('extend-shallow')
var escape = require('jstransformer-escape-html').render

exports.name = 'prismjs'
exports.inputFormats = ['code', 'prismjs', 'prism', 'highlight']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  var opts = extend({}, options || {}, locals || {})
  var language = opts.language || 'none'
  var prefix = '<pre><code class="language-' + language + '">'
  var suffix = '</code></pre>'
  return prefix + escape(str) + suffix
}
