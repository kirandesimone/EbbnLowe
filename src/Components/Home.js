import React from 'react'
import { useSpring, animated } from 'react-spring'
import background from '../Assets/background.jpg'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    heroImage: {
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top-center",
        //backgroundColor: theme.palette.primary.light
    },
    heroText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: 500,
        paddingTop: "27%",
        paddingLeft: "15%",
    },
    heroTextStyle: {
        color: theme.palette.primary.main, 
        fontFamily: theme.typography.fontFamily,
        paddingBottom: "5%"
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
            <animated.div style={fade} className={classes.heroImage}>
                <div className={classes.heroText}>
                    <Typography variant="h3" className={classes.heroTextStyle}>
                        Taking care of your mind, body and soul.
                    </Typography>
                    <Typography variant="h4">
                        <Link to="/book-a-class" style={{textDecoration: "undeline", color: theme.palette.primary.dark}}>
                            Book Now
                        </Link>
                    </Typography>
                </div>
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
