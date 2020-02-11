import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import './toasts.html'

const positions = ['top-right', 'top-left', 'bottom-left', 'bottom-right']

const englishCount = function (n) {
  var r = `${n}th`
  if (n === 1) r = '1st'
  else if (n === 2) r = '2nd'
  else if (n === 3) r = `${n}rd`
  return r
}

Template.toasts.onCreated(function () {
  const instance = this
  instance.counter = 1
  instance.position = 0
  instance.loaded = new ReactiveVar(false)
  instance.transparent = false
  instance.autohide = false
  instance.prepend = true

  Promise.all([
    BlazeBs4.jumbotron.load()
  ]).then(() => instance.loaded.set(true))
})
Template.toasts.helpers({
  loaded () {
    return Template.instance().loaded.get()
  }
})
Template.toasts.events({
  'change input#transparent' (event, instance) {
    instance.transparent = event.currentTarget.checked
  },
  'change input#autohide'(event, instance) {
    instance.autohide = event.currentTarget.checked
  },
  'change input#prepend'(event, instance) {
    instance.prepend = event.currentTarget.checked
  },
  'click button' (event, instance) {
    const color = event.currentTarget.dataset.color
    BlazeBs4.toast.add({
      label: `Hello World ${color}`,
      body: `<p>This is my ${englishCount(instance.counter++)} toast</p><p>${new Date()}</p>`,
      headerBg: color,
      headerFg: color === 'light' ? 'dark' : 'light',
      width: '30em',
      transparent: instance.transparent,
      autohide: instance.autohide,
      prepend: instance.prepend,
      animation: true,
      showId: true,
      position: positions[instance.position++]
    })
    if (instance.position>=positions.length) instance.position = 0
  }
})
