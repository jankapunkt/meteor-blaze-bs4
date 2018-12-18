import { Template } from 'meteor/templating'
import './badge.html'

Template.badges.helpers({
  atts () {
    return {
      href: '//www.blazejs.org',
      target: '_blank',
      'data-foo': 'bar'
    }
  }
})
