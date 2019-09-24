import { Template } from 'meteor/templating'
import { Themes } from '../imports/api/Themes'
import { BlazeBs4 } from 'meteor/jkuester:blaze-bs4'
import '../imports/startup/client/bootstrap'
import '../imports/startup/client/routes'
import './main.html'

const allTemplates = Object.values(BlazeBs4).map(t => ({ template: t.template, name: t.template }))

Template.mainTarget.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()

  const all = Promise.all([
    BlazeBs4.navbar.load(),
    BlazeBs4.collapse.load()
  ]).then(() => instance.state.set('navLoaded', true))
})

Template.mainTarget.helpers({
  navLoaded () {
    return Template.instance().state.get('navLoaded')
  },
  bstemplates () {
    return allTemplates
  },
  bsthemes () {
    return Themes
  },
  current () {
    return Template.instance().state.get('current')
  },
  isCurrent (name) {
    return Template.instance().state.get('current') === name
  },
  isTheme (value) {
    return Template.instance().state.get('theme') === value
  },
  fluid () {
    return Template.instance().state.get('fluid')
  }
})

Template.mainTarget.events({
  'change .template-select' (event, templateInstance) {
    const template = templateInstance.$(event.currentTarget).val()
    global.window.location.href = `#${template}`
    templateInstance.state.set('current', template)
  },
  'click .toggle-fluid' (event, templateInstance) {
    event.preventDefault()
    const fluid = templateInstance.state.get('fluid')
    templateInstance.state.set('fluid', !fluid)
  },
  'change .theme-select' (event, templateInstance) {
    const theme = templateInstance.$(event.currentTarget).val()
    const href = `themes/${theme}.min.css`
    console.log(theme, href)
    global.$('#bbs4-custom-theme').prop('href', href)
  }
})
