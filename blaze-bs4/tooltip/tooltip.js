import { Template } from 'meteor/templating'
import './tooltip.html'

Template.tooltip.helpers({
  attributes () {
    const data = Template.instance().data
    return {
      tabindex: data.tabIndex || (void 0),
      style: data.style || (void 0),
      title: data.title || '',
      'data-animation': data.animation || true,
      'data-container': data.container || false,
      'data-delay': data.delay || 0,
      'data-html': data.html || false,
      'data-placement': data.placement || 'top',
      'data-selector': data.selector || false,
      'data-template': data.template || (void 0),
      'data-trigger': data.trigger || 'hover focus',
      'data-offset': data.offset || 0,
      'data-fallbackPlacement': data.fallbackPlacement || 'flip',
      'data-boundary': data.boundary || 'scrollParent'
      // sanitize: data.sanitize || true,
      // whiteList: data.whiteList || (void 0),
      // sanitizeFn: data.sanitizeFn || null
    }
  }
})
