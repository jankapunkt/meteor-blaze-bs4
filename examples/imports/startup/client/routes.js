import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Routes } from '../../api/Routes'

Routes.forEach(route => {
  const path = `/meteor-blaze-bs4/${route.template}`

  FlowRouter.route(path, {
    name: route.template,
    waitOn () {
      return route.load()
    },
    action () {
      if (!Template[route.template]) {
        console.info(`[${route.template}] not yet loaded, skip rendering`)
        return
      }
      // Render a template using Blaze
      this.render('mainTarget', route.template)
    }
  })
})


FlowRouter.route('/meteor-blaze-bs4', {
  triggersEnter: [() => FlowRouter.go('/meteor-blaze-bs4/about')],
  waitOn() {
    return Routes[0].load() // instant fix to handle redirect and async loading
  }
})

// Create 404 route (catch-all)
FlowRouter.route('*', {
  triggersEnter: [() => FlowRouter.go('/meteor-blaze-bs4/about')]
})
