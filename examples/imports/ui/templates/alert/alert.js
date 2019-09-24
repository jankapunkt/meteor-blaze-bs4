import { Template } from 'meteor/templating'

import './alert.html'

Template.alerts.helpers({
  onClose () {
    return (res) => global.alert(res.type)
  },
  onClosed () {
    return (res) => global.alert(res.type)
  }
})
