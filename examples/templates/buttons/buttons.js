import './buttons.html'

Template.buttons.helpers({
  exampleAtts () {
    return {
      id: 'example-atts-button',
      class: 'btn btn-primary btn-lg',
      title: 'this is an example of dynamic atts'
    }
  }
})

Template.buttons.events({
  'click #example-atts-button' (event, templateInstance) {
    global.alert(templateInstance.$(event.currentTarget).prop('title'))
  }
})