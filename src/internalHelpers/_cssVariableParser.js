// @flow

const cssVariableRegex = /var\((--[\S]*?)\)/g

// @private
export default function cssVariableParser(
  color: string | number,
): boolean | string {
  const cssVariable = cssVariableRegex.exec(color)
  if (cssVariable.length <= 1) return false
  // eslint-disable-next-line no-undef
  const parsedCSSVariable = getComputedStyle(
    // eslint-disable-next-line no-undef
    document.documentElement,
  ).getPropertyValue(cssVariable[1])
  return parsedCSSVariable === '' ? false : parsedCSSVariable
}
