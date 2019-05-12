/* eslint-env mocha */
import { Template } from 'meteor/templating'
import { assert } from 'meteor/practicalmeteor:chai'
import { withRenderedTemplate } from '../tests/testUtils.tests'

import './alert'

const exists = (target, selector, length = 1) => {
  assert.equal($(target).find(selector).length, length)
}

describe('alert', function () {
  beforeEach(function () {
    Template.registerHelper('_', key => key)
  })

  afterEach(function () {
    Template.deregisterHelper('_')
  })

  it('renders an alert by defaults', function (done) {
    withRenderedTemplate('alert', {}, (el) => {
      exists(el, '.alert')
      done()
    })
  })
})
