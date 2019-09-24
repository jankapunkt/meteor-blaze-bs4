import { Template } from 'meteor/templating'
import './dropdowns.html'

Template.dropdowns.helpers({
  getOnShow () {
    return (res) => global.alert('shown via ' + res.relatedTarget.id)
  },
  getOnShown () {
    return (res) => global.alert('shown via ' + res.relatedTarget.id)
  },
  getOnHide () {
    return (res) => global.alert('selected: ' + global.$(res.clickEvent.originalEvent.target).data('value'))
  },
  getOnHidden () {
    return (res) => global.alert('selected: ' + global.$(res.clickEvent.originalEvent.target).data('value'))
  }
})
