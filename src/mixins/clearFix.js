// @flow
/** @module Mixins */

/**
 * CSS to contain a float (credit to CSSMojo)
 * @static
 * @param {string} [parent = &] - Optional parent selector
 * @return {Object} CSS as JS.
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '',
 *   'display': 'table'
 * }
 */

function clearFix(parent: string = '&') {
  const pseudoSelector = `${parent}::after`
  return {
    [pseudoSelector]: {
      'clear': 'both',
      'content': '',
      'display': 'table',
    },
  }
}

export default clearFix