import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Routes } from '../../api/Routes'

Routes.forEach(route => {
  const path = `/${route.template}`

  FlowRouter.route(path, {
    name: route.template,
    waitOn () {
      if (Meteor.isDevelopment) {
        return route.load()
      } else {
        // this is to make this work wihtout dynamic import,
        // thus working without a server --> so it can be
        // hosted as a client-only application
        return route.loadSync()
      }
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
