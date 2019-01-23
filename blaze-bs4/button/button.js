import { Template } from 'meteor/templating'
import { dataAttsHelper, onCreatedWithDataAtts } from '../utils/dataAtts'
import './button.html'

Template.button.onCreated(onCreatedWithDataAtts)

Template.button.helpers({
  dataAtts: dataAttsHelper
})
