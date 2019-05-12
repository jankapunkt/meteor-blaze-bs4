/* eslint-env mocha */

// These are the well known test helpers from the documentation,
// see: https://guide.meteor.com/testing.html#simple-blaze-unit-test

import { _ } from 'meteor/underscore'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'
import { Tracker } from 'meteor/tracker'
import { assert } from 'meteor/practicalmeteor:chai'

const withDiv = function withDiv (callback) {
  const el = document.createElement('div')
  document.body.appendChild(el)
  try {
    callback(el)
  } finally {
    // document.body.removeChild(el)
  }
}

export const withRenderedTemplate = function withRenderedTemplate (template, data, callback) {
  withDiv((el) => {
    const ourTemplate = _.isString(template) ? Template[ template ] : template
    Blaze.renderWithData(ourTemplate, data, el)
    Tracker.flush()
    callback(el)
  })
}

export const toBBS4Name = name => `.bbs4-${name}`

export const toColorName = (name, colorType, outline = false) => {
  if (outline) {
    return `.${name}-outline-${colorType}`
  } else {
    return `.${name}-${colorType}`
  }
}

export const exists = (target, selector, length = 1) => {
  const element = global.$(target).find(selector)
  assert.equal(element.length, length, selector)
  return global.$(target).find(selector)
}

export const colorTypes = [ 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark', 'light' ]
