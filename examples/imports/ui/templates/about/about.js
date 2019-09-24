import { Template } from 'meteor/templating'
import { Routes } from '../../../api/Routes'
import './about.html'

const allTemplates = Object.values(Routes)

Template.about.helpers({
  templates () {
    return allTemplates
  }
})
