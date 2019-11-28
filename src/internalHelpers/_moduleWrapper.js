// @flow
import cssVariableParser from './_cssVariableParser'

// @private
// eslint-disable-next-line no-unused-vars
function moduleWrapper(func, ...args) {
  // eslint-disable-next-line
  return function wrappedModule(...args) {
    const parsedArgs = args.map(arg => cssVariableParser(arg))
    return func(...parsedArgs)
  }
}

export default moduleWrapper
