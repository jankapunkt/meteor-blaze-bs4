import { Template } from 'meteor/templating'

Template.registerHelper('themeColors', function () {
  return ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark']
})
