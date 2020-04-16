import { Template } from 'meteor/templating'
import { getDataAtts } from '../utils/dataAtts'
import { defaultAtts, getAtts } from '../utils/atts'
import './link.html'

const attributes = defaultAtts.concat(['href', 'download', 'hreflang', 'media', 'ping', 'rel', 'target', 'type', 'style'])

Template.link.helpers({
  attributes () {
    const data = Template.instance().data
    if (!data) return null

    const atts = getAtts(attributes, data)
    let classNames = ''

    if (data.button) {
      classNames += ` btn btn-${data.button} `
    }
    if (data.class) {
      classNames += ` ${data.class} `
    }

    if (data.disabled) {
      atts.classNames += ` disabled text-muted`
      atts.href = null
    }

    if (classNames.length > 0) {
      atts.class = classNames
    }

    return atts
  },
  dataAttributes () {
    return getDataAtts(Template.instance().data || {})
  }
})
