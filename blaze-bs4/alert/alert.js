import { Template } from 'meteor/templating'
import { Random } from 'meteor/random'
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
  },
  handlers () {
    return eventHandlers
  }
}

const eventHandlers = {}

Template.alert.onCreated(function onAlertCreated () {
  const instance = this
  instance.id = Random.id()

  if (instance.data.onClose || instance.data.onClosed) {
    eventHandlers[ instance.id ] = {}
  }

  if (instance.data.onClose) {
    eventHandlers[ instance.id ][ 'close.bs.alert' ] = instance.data.onClose
  }
  if (instance.data.onClosed) {
    eventHandlers[ instance.id ][ 'closed.bs.alert' ] = instance.data.onClosed
  }
})

Template.alert.onRendered(function onAlertRendered () {
  const instance = this
  if (!instance._eventsAttached) {
    const instanceId = instance.id
    if (!eventHandlers[ instanceId ]) return
    Object.keys(eventHandlers[ instanceId ]).forEach(eventName => {
      const callback = eventHandlers[ instanceId ][ eventName ]
      instance.$('.bbs4-alert').on(eventName, callback)
    })
    instance._eventsAttached = true
  }
})

Template.alert.onDestroyed(function onAlertDestroyed () {
  const instance = this
  const instanceId = instance.id
  delete eventHandlers[ instanceId ]
})
