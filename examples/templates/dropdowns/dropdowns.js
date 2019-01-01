import './dropdowns.html'

Template.dropdowns.helpers({
  getOnShow () {
    return (res) => alert("shown via " + res.relatedTarget.id)
  },
  getOnShown () {
    return (res) => alert("shown via " + res.relatedTarget.id)
  },
  getOnHide () {
    return (res) => alert("selected: " + $(res.clickEvent.originalEvent.target).data('value'))
  },
  getOnHidden () {
    return (res) => alert("selected: " + $(res.clickEvent.originalEvent.target).data('value'))
  }
})
