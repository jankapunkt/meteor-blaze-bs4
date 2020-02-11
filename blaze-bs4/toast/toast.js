import { Template } from 'meteor/templating'
import { Random } from 'meteor/random'
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'
import { Blaze } from 'meteor/blaze'

import './toast.css'
import './toast.html'

BlazeBs4.toast.add = function ({ label = 'test', body = 'Toast Body', autohide = true, delay = 5000, headerBg = 'warning', headerFg = 'light', transparent = true, small = '', showId = false, width = 'inherit', animation = true, prepend = true, position = 'top-right' }) {
  const self = this
  let id = Random.id()
  if (showId) small = id
  const toast = {
    id: id,
    active: true,
    rendered: false,
    label: label,
    bg: headerBg,
    fg: headerFg,
    autohide: autohide,
    delay: delay,
    body: body,
    small: small,
    transparent: transparent,
    width: width,
    animation: animation
  }
  const parentNode = BlazeBs4.toast.positions[position] ? BlazeBs4.toast.positions[position] : BlazeBs4.toast.positions['top-right']
  if (parentNode) {
    const nextNodeQuery = `.toasts.${position.replace('-', '.')} .toast`
    const nextNode = document.querySelector(nextNodeQuery)
    let view = null
    if (nextNode && prepend === true) {
      view = Blaze.renderWithData(Template.toast_entry, toast, parentNode, nextNode)
    } else {
      view = Blaze.renderWithData(Template.toast_entry, toast, parentNode)
    }
    if (BlazeBs4.toast.debug) console.log(`created toast ${toast.id}`, view)
  } else {
    console.error('BlazeBs4.toast: no parentNode', self)
  }
}

Template.toast.onRendered(function () {
  const instance = this
  BlazeBs4.toast.positions = {
    'top-right': instance.find('#toasts-top-right'),
    'top-left': instance.find('#toasts-top-left'),
    'bottom-right': instance.find('#toasts-bottom-right'),
    'bottom-left': instance.find('#toasts-bottom-left')
  }
  //
  // keep top toasts visible when scrolling
  //
  let $document = $(document)
  let className = 'hasScrolled'

  $document.scroll(function () {
    const s = $document.scrollTop()
    if (s >= document.querySelector('nav').offsetHeight) {
      instance.$('.toasts').addClass(className)
    } else {
      instance.$('.toasts').removeClass(className)
    }
  })
})

Template.toast_entry.onRendered(function () {
  const instance = this
  instance.element = instance.$('div.toast')
  if (BlazeBs4.toast.debug) console.log(`${instance.view.name}`, instance.data)
  instance.element
    .toast({
      autohide: instance.data.autohide === true,
      animation: instance.data.animation === true,
      delay: instance.data.delay ? parseInt(instance.data.delay) : 2000
    })
    .toast('show')
    .css('minWidth', instance.data.width)
})
Template.toast_entry.onDestroyed(function () {
  const instance = this
  if (BlazeBs4.toast.debug) console.info(`${instance.view.name}.onDestroyed ${instance.data.id}`)
})
Template.toast_entry.helpers({
  transparent () {
    const instance = Template.instance()
    return instance.data.transparent === true ? 'bg-transparent' : ''
  }
})
Template.toast_entry.events({
  'shown.bs.toast div.toast' (event) {
    const toast = event.currentTarget
    if (BlazeBs4.toast.debug) console.log(`shown ${toast.id}`)
  },
  'hidden.bs.toast div.toast' (event, instance) {
    const toast = event.currentTarget
    if (BlazeBs4.toast.debug) console.log(`hidden ${toast.id}`)
    // since we Blaze.renderWithData we need to Blaze.remove
    // delay removal so parent event handlers fire
    Meteor.setTimeout(() => {
      Blaze.remove(instance.view)
    }, 500)
  }
})
