import { Template } from 'meteor/templating'
import { Random } from 'meteor/random'
import './dropdown.html'

const eventHandlers = {}

Template.dropdown.onCreated(function onDropdownCreated () {
  const instance = this

  instance.id = Random.id()

  if (instance.data.onShow || instance.data.onShown || instance.data.onHide || instance.data.onHidden) {
    eventHandlers[instance.id] = {}
  }

  if (instance.data.onShow) {
    eventHandlers[instance.id]['show.bs.dropdown'] = instance.data.onShow
  }
  if (instance.data.onShown) {
    eventHandlers[instance.id]['shown.bs.dropdown'] = instance.data.onShown
  }
  if (instance.data.onHide) {
    eventHandlers[instance.id]['hide.bs.dropdown'] = instance.data.onHide
  }
  if (instance.data.onHidden) {
    eventHandlers[instance.id]['hidden.bs.dropdown'] = instance.data.onHidden
  }
})

Template.dropdown.onRendered(function onDropdownRendered () {
  const instance = this
  const instanceId = instance.id
  if (!instance._eventsAttached && eventHandlers[instanceId]) {
    Object.keys(eventHandlers[instanceId]).forEach(eventName => {
      const callback = eventHandlers[instanceId][eventName]
      instance.$('.bbs4-dropdown-container').on(eventName, callback)
    })
    instance._eventsAttached = true
  }
})

Template.dropdown.onDestroyed(function onDropdownDestroyed () {
  const instance = this
  const instanceId = instance.id
  delete eventHandlers[instanceId]
})