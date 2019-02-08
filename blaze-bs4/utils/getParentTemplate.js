export const getParentView = function (instance) {
  let parentView = instance.view.originalParentView || instance.view.parentView
  let security = 0
  while (parentView.name.indexOf('Template.') === -1) {
    parentView = parentView.originalParentView || parentView.parentView
    if (security >= 10000) {
      throw new Error('Max iterations exceeded, expected to find templarte, ended up in infinite loop.')
    }
    security++
  }
  return parentView
}
