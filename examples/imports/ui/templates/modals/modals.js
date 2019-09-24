import { Template } from 'meteor/templating'
import './modals.html'

Template.modals.helpers({
  getEvent (name) {
    return () => console.log(name)
  }
})

Template.modals.events({
  'show.bs.modal #exampleModalWhatever' (event, templateInstance) {
    const button = templateInstance.$(event.relatedTarget) // Button that triggered the modal
    const recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or
    // other methods instead.
    // Note: `this` binding is not working here as in the examples, because t refers not to the modal but
    // to the Template instance.
    const modal = templateInstance.$('#exampleModalWhatever')
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  }
})
