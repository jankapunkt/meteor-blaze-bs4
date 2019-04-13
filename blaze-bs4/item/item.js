import { dataAttsHelper, onCreatedWithDataAtts } from '../utils/dataAtts'
import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import './item.html'
import { getParentView } from '../utils/getParentTemplate'

const ClassNameMapping = {
  dropdown: 'dropdown-item',
  listgroup: 'list-group-item'
}

const AdditionalClassnames = {
  listgroup: 'list-group-item-action'
}

Template.item.onCreated(function onItemCreated () {
  const instance = this
  onCreatedWithDataAtts(instance)

  // if we not explicitly pass the type
  // then there is the need to iterate
  // all templates to find the parent and
  // resolve it by the mapping
  if (!instance.data.type) {
    const parentView = getParentView(instance)
    const parentName = parentView.name.split('.')[ 1 ]
    const className = ClassNameMapping[ parentName ]
    const additionalClassnames = AdditionalClassnames[ parentName ]
    instance._defaultClassName = new ReactiveVar()
    instance._defaultClassName.set(className)
    instance._additionalClassnames = new ReactiveVar()
    instance._additionalClassnames.set(additionalClassnames)
  } else {
    // TODO how to resolve additional classnames here?
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
