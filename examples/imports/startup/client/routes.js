import { Template } from 'meteor/templating'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Routes } from '../../api/Routes'

const prefix = Meteor.isDevelopment ? '' : '/meteor-blaze-bs4' // fix for GitHub pages

Routes.forEach(route => {
  const path = `${prefix}/${route.template}`

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
  triggersEnter: [() => FlowRouter.go('/about')],
  waitOn() {
    return Routes[0].load() // instant fix to handle redirect and async loading
  }
})

// Create 404 route (catch-all)
FlowRouter.route('*', {
  triggersEnter: [() => FlowRouter.go('/about')]
})
