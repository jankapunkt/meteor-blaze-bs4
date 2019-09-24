export const Routes = [ {
  template: 'about',
  name: 'About',
  load () {
    return import('../ui/templates/about/about')
  }
}, {
  template: 'alerts',
  name: 'Alert',
  load () {
    return import('../ui/templates/alert/alert')
  }
}, {
  template: 'badges',
  name: 'Badge',
  load () {
    return import('../ui/templates/badge/badge')
  }
}, {
  template: 'breadcrumbs',
  name: 'Breadcrumb',
  load () {
    return import('../ui/templates/breadcrumb/breadcrumb')
  }
}, {
  template: 'buttons',
  name: 'Button',
  load () {
    return import('../ui/templates/buttons/buttons')
  }
}, {
  template: 'buttongroups',
  name: 'Button Group',
  load () {
    return import('../ui/templates/buttongroups/buttongroups.js')
  }
}, {
  template: 'cards',
  name: 'Card',
  load () {
    return import('../ui/templates/cards/cards')
  }
}, {
  template: 'collapses',
  name: 'Collapse',
  load () {
    return import('../ui/templates/collapses/collapses')
  }
}, {
  template: 'dropdowns',
  name: 'Dropdown',
  load () {
    return import('../ui/templates/dropdowns/dropdowns')
  }
}, {
  template: 'jumbotrons',
  name: 'Jumbotron',
  load () {
    return import('../ui/templates/jumbotron/jumbotron.js')
  }
}, {
  template: 'links',
  name: 'Links',
  load () {
    return import('../ui/templates/links/links')
  }
}, {
  template: 'listgroups',
  name: 'List group',
  load () {
    return import('../ui/templates/listgroups/listgroups')
  }
}, {
  template: 'modals',
  name: 'Modal',
  load () {
    return import('../ui/templates/modals/modals')
  }
}, {
  template: 'navbars',
  name: 'Navbar',
  load () {
    return import('../ui/templates/navbars/navbars')
  }
}, {
  template: 'progressbars',
  name: 'Progress',
  load () {
    return import('../ui/templates/progress/progress')
  }
}, {
  template: 'spinners',
  name: 'Spinner',
  load () {
    return import('../ui/templates/spinners/spinners.js')
  }
}, {
  template: 'tooltips',
  name: 'Tooltips',
  load () {
    return import('../ui/templates/tooltips/tooltips')
  }
}]