import { Template } from 'meteor/templating'
import { themeColors } from './shared'

const themeColorsList = Object.values(themeColors)

Template.registerHelper('themeColors', function () {
  return themeColorsList
})
