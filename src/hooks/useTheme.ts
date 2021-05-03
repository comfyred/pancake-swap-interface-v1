import { useContext } from 'react'
import { ThemeContext as StyledThemeCopntext } from 'styled-components'
import { ThemeContext } from '../ThemeContext'

const useTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeCopntext)
  // console.log(theme)
  theme.colors = Object.assign(theme.colors, {
    failure: '#ED4B9E',
    primary: '#f0537e',
    primaryBright: '#53DEE9',
    primaryDark: '#f0537e',
    secondary: '#47c0cd',
    success: '#31D0AA',
    warning: '#FFB237',
    binance: '#F0B90B',
    background: '#0c001d',
    backgroundDisabled: '#3c3742',
    contrast: '#FFFFFF',
    dropdown: '#1E1D20',
    invertedContrast: '#191326',
    input: '#ad2a4e',
    inputSecondary: '#47c0cd',
    tertiary: '#353547',
    text: '#FFFFFF',
    textDisabled: '#666171',
    textSubtle: '#f0537e',
    borderColor: '#524B63',
    card: '#27262c',
  })

  return { isDark, toggleTheme, theme }
}

export default useTheme
