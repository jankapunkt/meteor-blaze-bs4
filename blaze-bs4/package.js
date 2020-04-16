/* eslint-env meteor */
Package.describe({
  name: 'jkuester:blaze-bs4',
  version: '0.16.1',
  // Brief, one-line summary of the package.
  summary: 'Generic Bootstrap 4 components library for Meteor Blaze.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jankapunkt/meteor-blaze-bs4.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
})

Package.onUse(function (api) {
  const allowSync = !!(process.env.BBS4_SYNC_IMPORT)

  api.versionsFrom('1.8.0.1')
  api.use('ecmascript')
  api.use('random')
  api.use('templating@1.3.2')

  if (allowSync) {
    api.addFiles([
      './alert/alert.html',
      './alert/alert.js',
      './badge/badge.html',
      './badge/badge.js',
      './breadcrumb/breadcrumb.html',
      './breadcrumb/breadcrumb.js',
      './button/button.html',
      './button/button.js',
      './card/card.html',
      './card/card.js',
      './collapse/collapse.html',
      './collapse/collapse.js',
      './dropdown/dropdown.html',
      './dropdown/dropdown.js',
      './item/item.html',
      './item/item.js',
      './jumbotron/jumbotron.html',
      './jumbotron/jumbotron.js',
      './link/link.html',
      './link/link.js',
      './listgroup/listgroup.html',
      './listgroup/listgroup.js',
      './modal/modal.html',
      './modal/modal.js',
      './nav/nav.html',
      './nav/nav.js',
      './navbar/navbar.html',
      './navbar/navbar.js',
      './progress/progress.html',
      './progress/progress.js',
      './spinner/spinner.html',
      './spinner/spinner.js',
      './tooltip/tooltip.html',
      './tooltip/tooltip.js'
    ], 'client')
    api.mainModule('blaze-bs4-sync.js', 'client')
  } else {
    api.mainModule('blaze-bs4.js', 'client')
  }
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('blaze')
  api.use('underscore')
  api.use('templating')
  api.use('tracker')
  api.use('practicalmeteor:chai')
  api.use('meteortesting:mocha')
  api.use('jkuester:blaze-bs4')
  api.addFiles([
    'tests/main.tests.html'
  ], 'client')
  api.mainModule('tests/main.tests.js', 'client')
})
