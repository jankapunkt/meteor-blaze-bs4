import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

export const Routes = [{
  template: 'about',
  name: 'About',
  load () {
    return ([
      require('../ui/templates/about/about'),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'alerts',
  name: 'Alert',
  load () {
    return ([
      require('../ui/templates/alert/alert'),
      BlazeBs4.alert.load()
    ])
  }
}, {
  template: 'badges',
  name: 'Badge',
  load () {
    return ([
      require('../ui/templates/badge/badge'),
      BlazeBs4.badge.load()
    ])
  }
}, {
  template: 'breadcrumbs',
  name: 'Breadcrumb',
  load () {
    return ([
      require('../ui/templates/breadcrumb/breadcrumb'),
      BlazeBs4.breadcrumb.load()
    ])
  }
}, {
  template: 'buttons',
  name: 'Button',
  load () {
    return ([
      require('../ui/templates/buttons/buttons'),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'buttongroups',
  name: 'Button Group',
  load () {
    return ([
      require('../ui/templates/buttongroups/buttongroups.js'),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'cards',
  name: 'Card',
  load () {
    return ([
      require('../ui/templates/cards/cards'),
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
  load () {
    return ([
      require('../ui/templates/collapses/collapses'),
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.card.load(),
      BlazeBs4.collapse.load()
    ])
  }
}, {
  template: 'dropdowns',
  name: 'Dropdown',
  load () {
    return ([
      require('../ui/templates/dropdowns/dropdowns'),
      BlazeBs4.dropdown.load(),
      BlazeBs4.item.load()
    ])
  }
}, {
  template: 'jumbotrons',
  name: 'Jumbotron',
  load () {
    return ([
      require('../ui/templates/jumbotron/jumbotron.js'),
      BlazeBs4.jumbotron.load()
    ])
  }
}, {
  template: 'links',
  name: 'Links',
  load () {
    return ([
      require('../ui/templates/links/links'),
      BlazeBs4.link.load(),
      BlazeBs4.tooltip.load()
    ])
  }
}, {
  template: 'listgroups',
  name: 'List group',
  load () {
    return ([
      require('../ui/templates/listgroups/listgroups'),
      BlazeBs4.listgroup.load(),
      BlazeBs4.item.load(),
      BlazeBs4.badge.load(),
      BlazeBs4.alert.load()
    ])
  }
}, {
  template: 'modals',
  name: 'Modal',
  load () {
    return ([
      require('../ui/templates/modals/modals'),
      BlazeBs4.modal.load(),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'navbars',
  name: 'Navbar',
  load () {
    return ([
      require('../ui/templates/navbars/navbars'),
      BlazeBs4.navbar.load(),
      BlazeBs4.nav.load(),
      BlazeBs4.item.load(),
      BlazeBs4.collapse.load()
    ])
  }
}, {
  template: 'progressbars',
  name: 'Progress',
  load () {
    return ([
      require('../ui/templates/progress/progress'),
      BlazeBs4.alert.load(),
      BlazeBs4.button.load(),
      BlazeBs4.progress.load()
    ])
  }
}, {
  template: 'spinners',
  name: 'Spinner',
  load () {
    return ([
      require('../ui/templates/spinners/spinners.js'),
      BlazeBs4.spinner.load(),
      BlazeBs4.button.load()
    ])
  }
}, {
  template: 'tooltips',
  name: 'Tooltips',
  load () {
    return ([
      require('../ui/templates/tooltips/tooltips'),
      BlazeBs4.tooltip.load()
    ])
  }
}, {
  template: 'toasts',
  name: 'Toasts',
  load () {
    return ([
      require('../ui/templates/toasts/toasts'),
      BlazeBs4.button.load()
    ])
  }
}]
