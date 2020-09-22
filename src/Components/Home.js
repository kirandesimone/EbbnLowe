import React from 'react'
import { useSpring, animated } from 'react-spring'
import picture from '../Assets/wallhaven-2evd36_1920x1080.png'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import { Typography } from '@material-ui/core'



const useStyles = makeStyles({
    root: {
        backgroundColor: theme.palette.primary.light
    },
    classes: {
        paddingTop: 30,
        paddingLeft: 200,
        paddingBottom: 70,
        backgroundColor: theme.palette.primary.light
    },
    newsletter: {
        paddingTop: 30,
        paddingLeft: 200,
        paddingBottom: 70,
        backgroundColor: theme.palette.primary.dark
    },
    sectionHeader: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
    }
})

export default function Home() {
    const classes = useStyles();
    const fade = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })
    return (
       <div>
            <animated.div style={fade} className={classes.root}>
                <img src={picture} alt="pic"/>
            </animated.div>
            <section className={classes.classes}>
                <Typography variant="h3" className={classes.sectionHeader}>
                    Upcoming Classes
                </Typography>
            </section>
            <section className={classes.newsletter}>
                <Typography variant="h3" className={classes.sectionHeader}>
                    Newsletter
                </Typography>
            </section>
       </div>
      
   )
}
