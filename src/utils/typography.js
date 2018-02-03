import './fonts.css';
import './main.css';

import Typography from 'typography'
import Moraga from 'typography-theme-moraga'

Moraga.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

Moraga.bodyFontFamily = ["Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", "sans-serif"];
Moraga.headerFontFamily = ["Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", "sans-serif"];

const typography = new Typography(Moraga)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
