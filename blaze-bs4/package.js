/* eslint-env meteor */
Package.describe({
  name: 'jkuester:blaze-bs4',
  version: '0.8.0',
  // Brief, one-line summary of the package.
  summary: 'Generic Bootstrap 4 components library for Meteor Blaze.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-blaze-bs4.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.8.0.1')
  api.use('ecmascript')
  api.use('random')
  api.use('templating@1.3.2')
  api.addFiles([
    'alert/alert.js',
    'alert/alert.html',
    'badge/badge.html',
    'breadcrumb/breadcrumb.html',
    'button/button.html',
    'button/button.js',
    'jumbotron/jumbotron.html',
    'progress/progress.html',
    'progress/progress.js',
    'spinner/spinner.html'
  ], 'client')
})
