export const defaultAtts = ['title', 'tabindex']

/**
 * Creates attributes from the instance's data. Only undefined values are not added to the atts,
 * so null can be used to explicitly turn values off.
 * @param attsList
 * @param data
 */
export const getAtts = function getAtts (attsList, data) {
  const atts = {}
  attsList.forEach(name => {
    const value = data[name]
    if (typeof value !== 'undefined') {
      atts[name] = value
    }
  })
  return atts
}
