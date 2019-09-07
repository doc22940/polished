// @flow
import cssVariableParser from '../_cssVariableParser'

describe('cssVariableParser', () => {
  it('properly gets a css variable', () => {
    expect(cssVariableParser('var(--testing-variable)')).toEqual('#000')
  })
})
