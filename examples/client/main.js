import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import { ReactiveDict } from 'meteor/reactive-dict'
import { Themes } from '../imports/api/Themes'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { Routes } from '../imports/api/Routes'
import { BlazeBs4, Status } from 'meteor/jkuester:blaze-bs4'
import '../imports/startup/client/bootstrap'
import '../imports/startup/client/routes'
import '../imports/startup/client/templateHelpers'
import '../imports/ui/templates/code/code.html'
import './main.html'

const allTemplates = Object.values(Routes)
const current = new ReactiveVar()

console.info('[BlazeBs4]: startup ==<load Templates sync?>==> ', Status.isSync())

Template.mainTarget.onCreated(function () {
  const instance = this
  instance.state = new ReactiveDict()

  Promise.all([
    BlazeBs4.navbar.load(),
    BlazeBs4.collapse.load(),
    BlazeBs4.toast.load()
  ]).then(() => instance.state.set('navLoaded', true))

  instance.autorun(() => {
    FlowRouter.watchPathChange()
    const currentContext = FlowRouter.current()
    const { path } = currentContext
    current.set(path.replace('/meteor-blaze-bs4/', ''))
  })
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
    return current.get()
  },
  isCurrent (name) {
    return current.get() === name
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
    FlowRouter.go(`/meteor-blaze-bs4/${template}`)
    templateInstance.state.set('current', template)
  },
  'click .toggle-fluid' (event, templateInstance) {
    event.preventDefault()
    const fluid = templateInstance.state.get('fluid')
    templateInstance.state.set('fluid', !fluid)
  },
  'change .theme-select' (event, templateInstance) {
    const theme = templateInstance.$(event.currentTarget).val()
    const href = `/themes/${theme}.min.css`
    global.$('#bbs4-custom-theme').prop('href', href)
  }
})
