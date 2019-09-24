import { dataAttsHelper, onCreatedWithDataAtts } from '../utils/dataAtts'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import './item.html'
import { getParentView } from '../utils/getParentTemplate'

const ClassNameMapping = {
  dropdown: 'dropdown-item',
  listgroup: 'list-group-item',
  nav: 'nav-item'
}

const AdditionalClassnames = {
  listgroup ({ color, isLink, isButton }) {
    const classnames = []
    if (isButton || isLink) {
      classnames.push('list-group-item-action')
    }
    if (color) {
      classnames.push(`list-group-item-${color}`)
    }
    return classnames.join(' ')
  }
}

Template.item.onCreated(function onItemCreated () {
  const instance = this
  onCreatedWithDataAtts(instance)

  instance._additionalClassnames = new ReactiveVar()

  // if we not explicitly pass the type
  // then there is the need to iterate
  // all templates to find the parent and
  // resolve it by the mapping
  if (!instance.data.type) {
    const parentView = getParentView(instance)
    const parentName = parentView.name.split('.')[1]
    const className = ClassNameMapping[parentName]
    instance._defaultClassName = new ReactiveVar()
    instance._defaultClassName.set(className)

    // resolve additional classnames
    if (AdditionalClassnames[parentName] && (instance.data.color || instance.data.href || instance.data.button)) {
      const additionalClassnames = AdditionalClassnames[parentName]({
        color: instance.data.color,
        isLink: instance.data.href,
        isButton: instance.data.button
      })
      instance._additionalClassnames.set(additionalClassnames)
    }
  }
})

Template.item.helpers({
  data_atts: dataAttsHelper,
  defaultClassName () {
    const { _defaultClassName } = Template.instance()
    return _defaultClassName.get() && _defaultClassName.get()
  },
  additionalClassnames () {
    const { _additionalClassnames } = Template.instance()
    return _additionalClassnames && _additionalClassnames.get()
  }
})
