import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'

export const Routes = [ {
  template: 'about',
  name: 'About',
  load () {
    return [
      BlazeBs4.button.load(),
      import('../ui/templates/about/about')
    ]
  },
  loadSync () {
    BlazeBs4.button.loadSync()
    import '../ui/templates/about/about'
    return true
  }
}, {
  template: 'alerts',
  name: 'Alert',
  load () {
    return [
      BlazeBs4.alert.load(),
      import('../ui/templates/alert/alert')
    ]
  },
  loadSync () {
    BlazeBs4.alert.loadSync()
    import '../ui/templates/alert/alert'
    return true
  }
}, {
  template: 'badges',
  name: 'Badge',
  load () {
    return [
      BlazeBs4.badge.load(),
      import('../ui/templates/badge/badge')
    ]
  },
  loadSync () {
    BlazeBs4.badge.loadSync()
    import '../ui/templates/badge/badge'
    return true
  }
}, {
  template: 'breadcrumbs',
  name: 'Breadcrumb',
  load () {
    return [
      BlazeBs4.breadcrumb.load(),
      import('../ui/templates/breadcrumb/breadcrumb')
    ]
  },
  loadSync () {
    BlazeBs4.breadcrumb.loadSync()
    import '../ui/templates/breadcrumb/breadcrumb'
    return true
  }

}, {
  template: 'buttons',
  name: 'Button',
  load () {
    return [
      BlazeBs4.button.load(),
      import('../ui/templates/buttons/buttons')
    ]
  },
  loadSync () {
    BlazeBs4.button.loadSync()
    import '../ui/templates/buttons/buttons'
    return true
  }
}, {
  template: 'buttongroups',
  name: 'Button Group',
  load () {
    return [
      BlazeBs4.button.load(),
      import('../ui/templates/buttongroups/buttongroups.js')
    ]
  },
  loadSync () {
    BlazeBs4.button.loadSync()
    import '../ui/templates/buttongroups/buttongroups.js'
    return true
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
  },
  loadSync () {
    BlazeBs4.alert.loadSync()
    BlazeBs4.nav.loadSync()
    BlazeBs4.link.loadSync()
    BlazeBs4.card.loadSync()
    BlazeBs4.listgroup.loadSync()
    BlazeBs4.item.loadSync()
    import '../ui/templates/cards/cards'
    return true
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
  },
  loadSync () {
    BlazeBs4.alert.loadSync()
    BlazeBs4.button.loadSync()
    BlazeBs4.card.loadSync()
    BlazeBs4.collapse.loadSync()
    import '../ui/templates/collapses/collapses'
    return true
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
  },
  loadSync () {
    BlazeBs4.dropdown.loadSync()
    BlazeBs4.item.loadSync()
    import '../ui/templates/dropdowns/dropdowns'
    return true
  }
}, {
  template: 'jumbotrons',
  name: 'Jumbotron',
  load () {
    return [
      BlazeBs4.jumnbotron.load(),
      import('../ui/templates/jumbotron/jumbotron.js')
    ]
  },
  loadSync () {
    BlazeBs4.jumnbotron.loadSync()
    import '../ui/templates/jumbotron/jumbotron.js'
    return true
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
  },
  loadSync () {
    BlazeBs4.link.loadSync()
    BlazeBs4.tooltip.loadSync()
    import '../ui/templates/links/links'
    return true
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
  },
  loadSync () {
    BlazeBs4.listgroup.loadSync()
    BlazeBs4.item.loadSync()
    BlazeBs4.badge.loadSync()
    BlazeBs4.alert.loadSync()
    import '../ui/templates/listgroups/listgroups'
    return true
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
  },
  loadSync () {
    BlazeBs4.modal.loadSync()
    BlazeBs4.button.loadSync()
    import '../ui/templates/modals/modals'
    return true
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
  },
  loadSync () {
    BlazeBs4.navbar.loadSync()
    BlazeBs4.nav.loadSync()
    BlazeBs4.item.loadSync()
    BlazeBs4.collapse.loadSync()
    import '../ui/templates/navbars/navbars'
    return true
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
  },
  loadSync () {
    BlazeBs4.alert.loadSync()
    BlazeBs4.button.loadSync()
    BlazeBs4.progress.loadSync()
    import '../ui/templates/progress/progress'
    return true
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
  },
  loadSync () {
    BlazeBs4.spinner.loadSync()
    BlazeBs4.button.loadSync()
    import '../ui/templates/spinners/spinners.js'
    return true
  }
}, {
  template: 'tooltips',
  name: 'Tooltips',
  load () {
    return [
      BlazeBs4.tooltip.load(),
      import('../ui/templates/tooltips/tooltips')
    ]
  },
  loadSync () {
    BlazeBs4.tooltip.loadSync()
    BlazeBs4.button.loadSync()
    import '../ui/templates/tooltips/tooltips'
    return true
  }
} ]
