import { Template } from 'meteor/templating'
import { Random } from 'meteor/random'
import './alert.html'

const eventHandlers = {}

Template.alert.onCreated(function onAlertCreated () {
  const instance = this
  instance.id = Random.id()
  eventHandlers[instance.id] = {}
  if (instance.data.onClose) {
    eventHandlers[instance.id]['close.bs.alert'] = instance.data.onClose
  }
  if (instance.data.onClosed) {
    eventHandlers[instance.id]['closed.bs.alert'] = instance.data.onClosed
  }
})

Template.alert.onRendered(function onAlertRendered () {
  const instance = this
  if (!instance._eventsAttached) {
    const instanceId = instance.id
    Object.keys(eventHandlers[instanceId]).forEach(eventName => {
      const callback = eventHandlers[instanceId][eventName]
      instance.$('.alert').on(eventName, callback)
    })
    instance._eventsAttached = true
  }
})

Template.alert.onDestroyed(function onAlertDestroyed () {
  const instance = this
  const instanceId = instance.id
  delete eventHandlers[instanceId]
})
