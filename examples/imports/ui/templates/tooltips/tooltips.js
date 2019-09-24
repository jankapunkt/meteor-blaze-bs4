import { Template } from 'meteor/templating'
import './tooltips.html'

Template.tooltips.onRendered(function () {
  const instance = this
  if (!instance.tooltipsInitialized) {
    global.$(function () {
      global.$('[data-toggle="tooltip"]').tooltip()
    })
    instance.tooltipsInitialized = true
  }
})
