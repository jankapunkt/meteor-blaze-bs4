import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

export const Routes = [{
  template: 'about',
  name: 'About',
  load () {
    return [
      BlazeBs4.button.load(),
      import('../ui/templates/about/about')
    ]
  }
}, {
  template: 'alerts',
  name: 'Alert',
  load () {
    return [
      BlazeBs4.alert.load(),
      import('../ui/templates/alert/alert')
    ]
  }
}, {
  template: 'badges',
  name: 'Badge',
  load () {
    return [
      BlazeBs4.badge.load(),
      import('../ui/templates/badge/badge')
    ]
  }
}, {
  template: 'breadcrumbs',
  name: 'Breadcrumb',
  load () {
    return [
      BlazeBs4.breadcrumb.load(),
      import('../ui/templates/breadcrumb/breadcrumb')
    ]
  }
}, {
  template: 'buttons',
  name: 'Button',
  load () {
    return [
      BlazeBs4.button.load(),
      import('../ui/templates/buttons/buttons')
    ]
  }
}, {
  template: 'buttongroups',
  name: 'Button Group',
  load () {
    return [
      BlazeBs4.button.load(),
      import('../ui/templates/buttongroups/buttongroups.js')
    ]
  }
}, {
  template: 'cards',
  name: 'Card',
  load () {
    return [
      BlazeBs4.alert.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.link.load(),
      BlazeBs4.card.load(),
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load(),
      import('../ui/templates/cards/cards')
    ]
  }
}, {
  template: 'collapses',
  name: 'Collapse',
  load () {
    return [
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.card.load(),
      BlazeBs4.collapse.load(),
      import('../ui/templates/collapses/collapses')
    ]
  }
}, {
  template: 'dropdowns',
  name: 'Dropdown',
  load () {
    return [
      BlazeBs4.dropdown.load(),
      BlazeBs4.item.load(),
      import('../ui/templates/dropdowns/dropdowns')
    ]
  }
}, {
  template: 'jumbotrons',
  name: 'Jumbotron',
  load () {
    return [
      BlazeBs4.jumnbotron.load(),
      import('../ui/templates/jumbotron/jumbotron.js')
    ]
  }
}, {
  template: 'links',
  name: 'Links',
  load () {
    return [
      BlazeBs4.link.load(),
      BlazeBs4.tooltip.load(),
      import('../ui/templates/links/links')
    ]
  }
}, {
  template: 'listgroups',
  name: 'List group',
  load () {
    return [
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load(),
      BlazeBs4.badge.load(),
      BlazeBs4.alert.load(),
      import('../ui/templates/listgroups/listgroups')
    ]
  }
}, {
  template: 'modals',
  name: 'Modal',
  load () {
    return [
      BlazeBs4.modal.load(),
      BlazeBs4.button.load(),
      import('../ui/templates/modals/modals')
    ]
  }
}, {
  template: 'navbars',
  name: 'Navbar',
  load () {
    return [
      BlazeBs4.navbar.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.item.load(),
      BlazeBs4.collapse.load(),
      import('../ui/templates/navbars/navbars')
    ]
  }
}, {
  template: 'progressbars',
  name: 'Progress',
  load () {
    return [
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.progress.load(),
      import('../ui/templates/progress/progress')
    ]
  }
}, {
  template: 'spinners',
  name: 'Spinner',
  load () {
    return [
      BlazeBs4.spinner.load(),
      BlazeBs4.button.load(),
      import('../ui/templates/spinners/spinners.js')
    ]
  }
}, {
  template: 'tooltips',
  name: 'Tooltips',
  load () {
    return [
      BlazeBs4.tooltip.load(),
      import('../ui/templates/tooltips/tooltips')
    ]
  }
}]
