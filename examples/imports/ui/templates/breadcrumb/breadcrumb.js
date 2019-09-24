import { Template } from 'meteor/templating'
import './breadcrumb.html'

Template.breadcrumbs.helpers({
  breadcrumbEntries () {
    return [
      {
        title: 'home',
        active: false,
        href: '/'
      },
      {
        title: 'examples',
        active: false,
        href: '/examples'
      },
      {
        title: 'breadcrumbs',
        active: true,
        href: '/examples/breadcrumbs'
      }
    ]
  }
})
