import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'
import './progress.html'

Template.progressbars.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()
})

Template.progressbars.helpers({
  isAnimated () {
    return Template.instance().state.get('isAnimated')
  }
})

Template.progressbars.events({
  'click .toggle-progress-bar' (event, templateInstance) {
    event.preventDefault()
    const isAnimated = templateInstance.state.get('isAnimated')
    templateInstance.state.set('isAnimated', !isAnimated)
  }
})
