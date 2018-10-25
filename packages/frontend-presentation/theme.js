// example theme.js
import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  // extends the default theme
  ...theme,
  // custom colors
  colors: {
    background: '#f5da55',
    text: '#24292e'
  },
  heading: {
    color: '#24292e'
  },
  prism: {
    style: okaidia
  }
}
