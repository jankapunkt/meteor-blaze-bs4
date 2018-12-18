import { ReactiveDict } from 'meteor/reactive-dict'
import { Template } from 'meteor/templating'
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import popper from 'popper.js'

import '../templates/helpers/helpers'
import '../templates/alert/alert'
import '../templates/badge/badge'
import '../templates/breadcrumb/breadcrumb'
import '../templates/buttons/buttons'
import './main.html'

global.Popper = popper

const allTemplates = [
  'alerts',
  'badges',
  'breadcrumbs',
  'buttons'
]

Template.body.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()
  instance.state.set('current', allTemplates[ 0 ])
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
  'click .template-select' (event, templateInstance) {
    const template = templateInstance.$(event.currentTarget).data('template')
    templateInstance.state.set('current', template)
  }
})
