import { Template } from 'meteor/templating'
import { themeColors } from './shared'

import './codeblock'

const themeColorsList = Object.values(themeColors)

Template.registerHelper('themeColors', function () {
  return themeColorsList
})
