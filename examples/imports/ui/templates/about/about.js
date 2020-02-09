import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Routes } from '../../../api/Routes'
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

import './about.html'

const allTemplates = Object.values(Routes)

Template.about.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()

  Promise.all([
    BlazeBs4.button.load()
  ]).then(() => instance.state.set('loadComplete', true))
})

Template.about.helpers({
  loadComplete () {
    return Template.instance().state.get('loadComplete')
  },
  templates () {
    return allTemplates
  }
})
