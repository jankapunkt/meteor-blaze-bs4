import { Template } from 'meteor/templating'
import './alert.html'

export const alert = {
  name: 'alert',
  props: {
    type: 'secondary',
    dismissible: false,
    heading: (void 0)
  },
  events: {
    onClose: 'close.bs.alert',
    onClosed: 'closed.bs.alert'
  }
}

Template.alert.onCreated(function onAlertCreated () {
  const instance = this
  instance.events = {}

  if (instance.data.onClose) {
    instance.events[ alert.events.onClose ] = instance.data.onClose
  }
  if (instance.data.onClosed) {
    instance.events[ alert.events.onClosed ] = instance.data.onClosed
  }
})

Template.alert.onRendered(function onAlertRendered () {
  const instance = this
  if (!instance._eventsAttached) {
    Object.keys(instance.events).forEach(eventName => {
      const callback = instance.events[ eventName ]
      instance.$('.bbs4-alert').on(eventName, callback)
    })
    instance._eventsAttached = true
  }
})
