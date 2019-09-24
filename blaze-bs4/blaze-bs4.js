export const BlazeBs4 = {
  alert: {
    template: 'alert',
    async load () {
      return import('./alert/alert.js')
    }
  },
  badge: {
    template: 'badge',
    async load () {
      return import('./badge/badge.js')
    }
  },
  breadcrumb: {
    template: 'breadcrumb',
    async load () {
      return import('./breadcrumb/breadcrumb.js')
    }
  },
  button: {
    template: 'button',
    async load () {
      return import('./button/button.js')
    }
  },
  card: {
    template: 'card',
    async load () {
      return import('./card/card.js')
    }
  },
  collapse: {
    template: 'collapse',
    async load () {
      return import('./collapse/collapse.js')
    }
  },
  dropdown: {
    template: 'dropdown',
    async load () {
      return import('./dropdown/dropdown.js')
    }
  },
  item: {
    template: 'item',
    async load () {
      return import('./item/item.js')
    }
  },
  jumnbotron: {
    template: 'jumbotron',
    async load () {
      return import('./jumbotron/jumbotron.js')
    }
  },
  link: {
    template: 'link',
    async load () {
      return import('./link/link.js')
    }
  },
  listgroup: {
    template: 'listgroup',
    async load () {
      return import('./listgroup/listgroup.js')
    }
  },
  modal: {
    template: 'modal',
    async load () {
      return import('./modal/modal.js')
    }
  },
  nav: {
    template: 'nav',
    async load () {
      return import('./nav/nav.js')
    }
  },
  navbar: {
    template: 'navbar',
    async load () {
      return import('./navbar/navbar.js')
    }
  },
  progress: {
    template: 'progress',
    async load () {
      return import('./progress/progress.js')
    }
  },
  spinner: {
    template: 'spinner',
    async load () {
      return import('./spinner/spinner.js')
    }
  },
  tooltip: {
    template: 'tooltip',
    async load () {
      return import('./tooltip/tooltip.js')
    }
  }
}