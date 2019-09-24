import { Template } from 'meteor/templating'
import './link.html'

Template.links.onRendered(function () {
  const instance = this
  if (!instance.tooltipsInitialized) {
    global.$(function () {
      global.$('[data-toggle="tooltip"]').tooltip()
    })
    instance.tooltipsInitialized = true
  }
})
