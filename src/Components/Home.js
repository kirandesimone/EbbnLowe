import React from 'react'
import picture from '../Assets/wallhaven-2evd36_1920x1080.png'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import { Typography } from '@material-ui/core'



const useStyles = makeStyles({
    classes: {
        backgroundColor: theme.palette.primary.dark
    },
    newsletter: {
        backgroundColor: theme.palette.secondary.main
    },
    header: {
        fontFamily: theme.typography.fontFamily
    }
})

export default function Home() {
    const classes = useStyles();
    return (
       <div className={classes.classes}>
        <section>
            <img src={picture} alt="pic"/>
        </section>
        <section className={classes.classes}>
            <Typography variant="h2" className={classes.header}>
                Upcoming Classes
            </Typography>
        </section>
        <section className={classes.newsletter}>
        <Typography variant="h2" className={classes.header}>
                Newsletter
            </Typography>
        </section>
       </div>
      
   )
}
