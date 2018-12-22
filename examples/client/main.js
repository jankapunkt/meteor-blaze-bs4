import { ReactiveDict } from 'meteor/reactive-dict'
import { Template } from 'meteor/templating'
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import popper from 'popper.js'

import '../templates/helpers/helpers'
import '../templates/code/code.html'

import '../templates/alert/alert'
import '../templates/badge/badge'
import '../templates/breadcrumb/breadcrumb'
import '../templates/buttons/buttons'
import '../templates/buttongroups/buttongroups.html'
import '../templates/jumbotron/jumbotron.html'
import '../templates/progress/progress'

import './main.html'

global.Popper = popper

const allTemplates = [
  { template: 'alerts', name: 'Alert' },
  { template: 'badges', name: 'Badge' },
  { template: 'breadcrumbs', name: 'Breadcrumb' },
  { template: 'buttons', name: 'Button' },
  { template: 'buttongroups', name: 'Button Group' },
  { template: 'jumbotrons', name: 'Jumbotron' },
  { template: 'progressbars', name: 'Progress' },
]

Template.body.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()
  const param = global.window.location.href.split('#')
  if (param.length === 1) {
    instance.state.set('current', allTemplates[ 0 ].template)
  } else {
    const templateName = param[ 1 ]
    const current = allTemplates.find(el => el.template === templateName) || allTemplates[ 0 ]
    instance.state.set('current', current.template)
  }
})

Template.body.helpers({
  bstemplates () {
    return allTemplates
  },
  current () {
    return Template.instance().state.get('current')
  },
  isCurrent (name) {
    return Template.instance().state.get('current') === name
  }
})

Template.body.events({
  'change .template-select' (event, templateInstance) {
    const template = templateInstance.$(event.currentTarget).val()
    global.window.location.href = `#${template}`
    templateInstance.state.set('current', template)
  }
})
