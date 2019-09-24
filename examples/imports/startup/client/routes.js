import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Routes } from '../../api/Routes'

Routes.forEach(route => {
  const path = `/${route.template}`

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

// Create 404 route (catch-all)
FlowRouter.route('/', {
  triggersEnter: [() => FlowRouter.go('/about')]
})

// Create 404 route (catch-all)
FlowRouter.route('*', {
  triggersEnter: [() => FlowRouter.go('/')]
})
