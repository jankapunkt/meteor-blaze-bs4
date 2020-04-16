import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

export const Routes = [{
  template: 'about',
  name: 'About',
  async load () {
    return Promise.all([
      import('../ui/templates/about/about'),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'alerts',
  name: 'Alert',
  async load () {
    return Promise.all([
      import('../ui/templates/alert/alert'),
      BlazeBs4.alert.load()
    ])
  }
}, {
  template: 'badges',
  name: 'Badge',
  async load () {
    return Promise.all([
      import('../ui/templates/badge/badge'),
      BlazeBs4.badge.load()
    ])
  }
}, {
  template: 'breadcrumbs',
  name: 'Breadcrumb',
  async load () {
    return Promise.all([
      import('../ui/templates/breadcrumb/breadcrumb'),
      BlazeBs4.breadcrumb.load()
    ])
  }
}, {
  template: 'buttons',
  name: 'Button',
  async load () {
    return Promise.all([
      import('../ui/templates/buttons/buttons'),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'buttongroups',
  name: 'Button Group',
  async load () {
    return Promise.all([
      import('../ui/templates/buttongroups/buttongroups.js'),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'cards',
  name: 'Card',
  async load () {
    return Promise.all([
      import('../ui/templates/cards/cards'),
      BlazeBs4.alert.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.link.load(),
      BlazeBs4.card.load(),
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load()
    ])
  }
}, {
  template: 'collapses',
  name: 'Collapse',
  async load () {
    return Promise.all([
      import('../ui/templates/collapses/collapses'),
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.card.load(),
      BlazeBs4.collapse.load()
    ])
  }
}, {
  template: 'dropdowns',
  name: 'Dropdown',
  async load () {
    return Promise.all([
      import('../ui/templates/dropdowns/dropdowns'),
      BlazeBs4.dropdown.load(),
      BlazeBs4.item.load()
    ])
  }
}, {
  template: 'jumbotrons',
  name: 'Jumbotron',
  async load () {
    return Promise.all([
      import('../ui/templates/jumbotron/jumbotron.js'),
      BlazeBs4.jumbotron.load()
    ])
  }
}, {
  template: 'links',
  name: 'Links',
  async load () {
    return Promise.all([
      import('../ui/templates/links/links'),
      BlazeBs4.link.load(),
      BlazeBs4.tooltip.load()
    ])
  }
}, {
  template: 'listgroups',
  name: 'List group',
  async load () {
    return Promise.all([
      import('../ui/templates/listgroups/listgroups'),
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load(),
      BlazeBs4.badge.load(),
      BlazeBs4.alert.load()
    ])
  }
}, {
  template: 'modals',
  name: 'Modal',
  async load () {
    return Promise.all([
      import('../ui/templates/modals/modals'),
      BlazeBs4.modal.load(),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'navbars',
  name: 'Navbar',
  async load () {
    return Promise.all([
      import('../ui/templates/navbars/navbars'),
      BlazeBs4.navbar.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.item.load(),
      BlazeBs4.collapse.load()
    ])
  }
}, {
  template: 'progressbars',
  name: 'Progress',
  async load () {
    return Promise.all([
      import('../ui/templates/progress/progress'),
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.progress.load()
    ])
  }
}, {
  template: 'spinners',
  name: 'Spinner',
  async load () {
    return Promise.all([
      import('../ui/templates/spinners/spinners.js'),
      BlazeBs4.spinner.load(),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'tooltips',
  name: 'Tooltips',
  async load () {
    return Promise.all([
      import('../ui/templates/tooltips/tooltips'),
      BlazeBs4.tooltip.load()
    ])
  }
}, {
  template: 'toasts',
  name: 'Toasts',
  async load () {
    return Promise.all([
      import('../ui/templates/toasts/toasts'),
      BlazeBs4.button.load()
    ])
  }
}]
