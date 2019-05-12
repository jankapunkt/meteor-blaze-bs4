/* eslint-env mocha */
import { Template } from 'meteor/templating'
import { colorTypes, exists, toBBS4Name, toColorName, withRenderedTemplate } from '../tests/testUtils.tests'
import { assert } from 'meteor/practicalmeteor:chai'

import { alert } from './alert'

describe('alert', function () {
  beforeEach(function () {
    Template.registerHelper('_', key => key)
  })

  afterEach(function () {
    Template.deregisterHelper('_')
  })

  it('renders defaults', function (done) {
    withRenderedTemplate('alert', {}, (el) => {
      exists(el, '.alert')
      const bbs4name = toBBS4Name(alert.name)
      exists(el, bbs4name)
      const defaultColor = toColorName(alert.name, alert.props.type)
      exists(el, defaultColor)
      done()
    })
  })

  it('renders a dismiss button', function (done) {
    withRenderedTemplate('alert', { dismissible: true }, (el) => {
      exists(el, '.alert-dismissible')
      exists(el, '.fade')
      exists(el, '.show')
      exists(el, 'button[data-dismiss="alert"]')
      done()
    })
  })

  it('renders a heading', function (done) {
    const headingText = 'this is a heading'
    withRenderedTemplate('alert', { heading: headingText }, (el) => {
      const heading = exists(el, '.alert-heading')
      assert.equal(heading.text(), headingText)
      done()
    })
  })

  describe('color types', function () {
    colorTypes.forEach(colorType => {
      it(`renders with color type ${colorType}`, function (done) {
        withRenderedTemplate('alert', { type: colorType }, (el) => {
          const colorName = toColorName(alert.name, colorType)
          exists(el, colorName)
          done()
        })
      })
    })
  })

  describe('events', function () {

    it('triggers onClose', function (done) {
      function onClose () {
        done()
      }

      withRenderedTemplate('alert', { dismissible: true, onClose }, (el) => {
        setTimeout(() => {
          const button = exists(el, 'button[data-dismiss="alert"]')
          button.click()
        }, 100)
      })
    })
  })
})
