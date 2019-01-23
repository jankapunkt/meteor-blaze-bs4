import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating'

export const onCreatedWithDataAtts = function onCreatedWithDataAtts (instance) {
  if (!instance) {
    instance = this
  }
  instance.dataAtts = new ReactiveVar(null)
  instance.dataAtts.set(getDataAtts(instance.data))
}

export const getDataAtts = function getDataAtts (instanceData) {
  const data = {}
  Object.keys(instanceData).forEach(key => {
    if (key.indexOf('data-') > -1) {
      data[ key ] = instanceData[ key ]
    }
  })
  return data
}

export const dataAttsHelper = function dataAttsHelper () {
  return Template.instance().dataAtts.get()
}