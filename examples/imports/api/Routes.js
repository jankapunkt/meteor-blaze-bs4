import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

export const Routes = [ {
  template: 'about',
  name: 'About',
  load () {
    import '../ui/templates/about/about'
    return [
      BlazeBs4.button.load(),
    ]
  },
}, {
  template: 'alerts',
  name: 'Alert',
  load () {
    import '../ui/templates/alert/alert'
    return [
      BlazeBs4.alert.load(),
    ]
  },
}, {
  template: 'badges',
  name: 'Badge',
  load () {
    import '../ui/templates/badge/badge'
    return [
      BlazeBs4.badge.load(),
  ]
  },
}, {
  template: 'breadcrumbs',
  name: 'Breadcrumb',
  load () {
    import '../ui/templates/breadcrumb/breadcrumb'
    return [
      BlazeBs4.breadcrumb.load(),
  ]
  },
}, {
  template: 'buttons',
  name: 'Button',
  load () {
    import '../ui/templates/buttons/buttons'
    return [
      BlazeBs4.button.load(),
  ]
  },
}, {
  template: 'buttongroups',
  name: 'Button Group',
  load () {
    import '../ui/templates/buttongroups/buttongroups.js'
    return [
      BlazeBs4.button.load(),
  ]
  },
}, {
  template: 'cards',
  name: 'Card',
  load () {
    import '../ui/templates/cards/cards'
    return [
      BlazeBs4.alert.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.link.load(),
      BlazeBs4.card.load(),
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load(),
  ]
  },
}, {
  template: 'collapses',
  name: 'Collapse',
  load () {
    import '../ui/templates/collapses/collapses'
    return [
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.card.load(),
      BlazeBs4.collapse.load(),
  ]
  },
}, {
  template: 'dropdowns',
  name: 'Dropdown',
  load () {
    import '../ui/templates/dropdowns/dropdowns'
    return [
      BlazeBs4.dropdown.load(),
      BlazeBs4.item.load(),
  ]
  },
}, {
  template: 'jumbotrons',
  name: 'Jumbotron',
  load () {
    import '../ui/templates/jumbotron/jumbotron.js'
    return [
      BlazeBs4.jumnbotron.load(),
  ]
  },
}, {
  template: 'links',
  name: 'Links',
  load () {
    import '../ui/templates/links/links'
    return [
      BlazeBs4.link.load(),
      BlazeBs4.tooltip.load(),
  ]
  },
}, {
  template: 'listgroups',
  name: 'List group',
  load () {
    import '../ui/templates/listgroups/listgroups'
    return [
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load(),
      BlazeBs4.badge.load(),
      BlazeBs4.alert.load(),
  ]
  },
}, {
  template: 'modals',
  name: 'Modal',
  load () {
    import '../ui/templates/modals/modals'
    return [
      BlazeBs4.modal.load(),
      BlazeBs4.button.load(),
  ]
  },
}, {
  template: 'navbars',
  name: 'Navbar',
  load () {
    import '../ui/templates/navbars/navbars'
    return [
      BlazeBs4.navbar.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.item.load(),
      BlazeBs4.collapse.load(),
  ]
  },
}, {
  template: 'progressbars',
  name: 'Progress',
  load () {
    import '../ui/templates/progress/progress'
    return [
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.progress.load(),
  ]
  },
}, {
  template: 'spinners',
  name: 'Spinner',
  load () {
    import '../ui/templates/spinners/spinners.js'
    return [
      BlazeBs4.spinner.load(),
      BlazeBs4.button.load(),
  ]
  },
}, {
  template: 'tooltips',
  name: 'Tooltips',
  load () {
    import '../ui/templates/tooltips/tooltips'
    return [
      BlazeBs4.tooltip.load(),
  ]
  },
} ]
