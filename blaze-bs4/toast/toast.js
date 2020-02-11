import { Template } from 'meteor/templating'
import { Random } from 'meteor/random'
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'
import { Blaze } from 'meteor/blaze'

import './toast.css'
import './toast.html'

BlazeBs4.toast.add = function ({ id = Random.id(), label = 'test', body = 'Toast Body', autohide = true, delay = 5000, headerBg = 'warning', headerFg = 'light', transparent = true, small = '', showId = false, width = 'inherit', animation = true, prepend = true, position = 'top-right', debug = BlazeBs4.toast.debug, onShow, onShown, onHide, onHidden }) {
  const self = this
  if (showId) small = id
  const toast = {
    id: id,
    debug: debug,
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
    animation: animation,
    onShow, onShown, onHide, onHidden
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
    if (debug) console.log(`created toast ${toast.id}`, view)
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
  if (instance.data.debug) console.log(`${instance.view.name}`, instance.data)
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
  if (instance.data.debug) console.info(`${instance.view.name}.onDestroyed ${instance.data.id}`)
})
Template.toast_entry.helpers({
  transparent () {
    const instance = Template.instance()
    return instance.data.transparent === true ? 'bg-transparent' : ''
  }
})
Template.toast_entry.events({
  'show.bs.toast div.toast' (event, templateInstance) {
    const toast = event.currentTarget
    if (templateInstance.data.onShow) {
      templateInstance.data.onShow({ toast })
    }
    if (templateInstance.data.debug) console.log(`show ${toast.id}`)
  },
  'shown.bs.toast div.toast' (event, templateInstance) {
    const toast = event.currentTarget
    if (templateInstance.data.onShown) {
      templateInstance.data.onShown({ toast })
    }
    if (templateInstance.data.debug) console.log(`shown ${toast.id}`)
  },
  'hide.bs.toast div.toast' (event, templateInstance) {
    const toast = event.currentTarget
    if (templateInstance.data.onHide) {
      templateInstance.data.onHide({ toast })
    }
    if (templateInstance.data.debug) console.log(`hide ${toast.id}`)
  },
  'hidden.bs.toast div.toast' (event, templateInstance) {
    const toast = event.currentTarget
    if (templateInstance.data.onHidden) {
      templateInstance.data.onHidden({ toast })
    }
    if (templateInstance.data.debug) console.log(`hidden ${toast.id}`)
    // since we Blaze.renderWithData we need to Blaze.remove
    // delay removal so parent event handlers fire
    Meteor.setTimeout(() => {
      Blaze.remove(templateInstance.view)
    }, 500)
  }
})
