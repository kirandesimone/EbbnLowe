import React from 'react'
import { useSpring, animated } from 'react-spring'
import background from '../Assets/background.jpg'
import homePic1 from '../Assets/rsz_home1.jpg'
import homePic2 from '../Assets/rsz_home2.jpg'
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
    classPictures: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: 1440,
        paddingTop: "5%"
    },
    newsletter: {
        paddingTop: 30,
        paddingLeft: 200,
        paddingBottom: 250,
        backgroundColor: theme.palette.primary.dark
    },
    newsletterContent: {
        display: "flex",
        justifyContent: "center",
        maxWidth: 1440,
        paddingTop: "5%"
    },
    sectionHeader: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
    }
});

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
                        <Link to="/book-a-class" style={{textDecoration: "underline", color: theme.palette.primary.dark}}>
                            Book Now
                        </Link>
                    </Typography>
                </div>
            </animated.div>
            <section className={classes.classes}>
                <Typography variant="h3" className={classes.sectionHeader}>
                    Upcoming Classes
                </Typography>
                <div className={classes.classPictures}>
                    <div>
                        <img src={homePic1} alt="Teacher Kari doing a pose"/>
                    </div>
                    <div>
                        <img src={homePic2} alt="Teacher Kari doing a pose"/>
                    </div>
                </div>
                <div style={{paddingTop: 40}}>
                    <Typography variant="h4">
                        <Link to="/classes" style={{textDecoration: "underline", color: theme.palette.primary.dark}}>
                                View More
                        </Link>
                    </Typography>
                </div>
            </section>
            <section className={classes.newsletter}>
                <Typography variant="h3" className={classes.sectionHeader}>
                    Newsletter
                </Typography>
                <div className={classes.newsletterContent}>
                    <Typography style={{color: theme.palette.primary.main, fontFamily: theme.typography.fontFamily}}>
                        COMING SOON
                    </Typography>
                </div>
            </section>
       </div>
      
   )
}
