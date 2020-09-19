import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8F5B34', // Coconut brown
            main: '#E8DFE0', // Plat
            dark: '#8A9EA7' // Gray
        },
        secondary: {
            main: '#8D9B62' // Turtle green
        }
    },
    typography: {
        fontFamily: ['Playfair Display', 'serif']
    }
})

export default theme;