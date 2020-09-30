import React from 'react'
import { useSpring, animated } from 'react-spring'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Newsletter from '../Components/Newsletter'
import LazyLoad from 'react-lazyload'
import background from '../Assets/background.jpg'
import homePic1 from '../Assets/rsz_home1.jpg'
import homePic2 from '../Assets/rsz_home2.jpg'
import mobile1 from '../Assets/mobile_home1.jpg'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import { Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
    heroImage: {
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top-center",
        position: "relative"
    },
    heroText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: "22%",
        paddingTop: "27%",
        paddingLeft: "15%",
    },
    heroTextStyle: {
        color: theme.palette.primary.main, 
        fontFamily: theme.typography.fontFamily,
        paddingBottom: "5%"
    },
    classes: {
        paddingTop: "5%",
        paddingLeft: "12%",
        paddingBottom: "3%",
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
        paddingTop: "5%",
        paddingLeft: "12%",
        paddingBottom: "3%",
        backgroundColor: theme.palette.secondary.main
    },
    newsletterWrapper: {
        display: "flex",
        justifyContent: "center",
        maxWidth: 1440,
        paddingTop: "5%"
    },
    newsletterContent: {
        display: "flex",
        flexDirection: "column"
    },
    about: {
        paddingTop: "5%",
        paddingLeft: "12%",
        paddingBottom: "3%",
    },
    aboutContent: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 1440,
        paddingTop: "3%"
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
    });
    const matches = useMediaQuery('(max-width:600px)');
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
                        <LazyLoad height={200} offset={100}>
                            <img src={matches ? mobile1 : homePic1} alt="Teacher Kari doing a pose"/>
                        </LazyLoad>
                    </div>
                    <div>
                        <LazyLoad height={200} offset={100}>
                            <img src={homePic2} alt="Teacher Kari doing a pose"/>
                        </LazyLoad>
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
            <section>
                <div className={classes.about}>
                    <div className={classes.aboutContent}>
                        <Typography variant="h3" style={{fontFamily: theme.typography.fontFamily, color: theme.palette.primary.dark}}>
                            Virtual yoga takes place in the surroundings you choose. With life swirling around, at a seemingly dizzying pace, 
                            it can be challenging to find a peaceful escape to focus on and prioritize yourself.
                        </Typography>
                    </div>
                    <div style={{paddingTop: 40}}>
                        <Typography variant="h4">
                            <Link to="/about" style={{textDecoration: "underline", color: theme.palette.primary.dark}}>
                                Learn More
                            </Link>
                        </Typography>
                    </div>
                </div>
            </section>
            <section className={classes.newsletter}>
                <Typography variant="h3" className={classes.sectionHeader}>
                    Newsletter
                </Typography>
                <div className={classes.newsletterWrapper}>
                    <div className={classes.newsletterContent}>
                        <div style={{paddingBottom: 20}}>
                            <Typography variant="h5" style={{color: theme.palette.primary.main}}>
                                Stay updated by subscribing to our newsletter!
                            </Typography>
                        </div>
                        <MailchimpSubscribe 
                            url={process.env.REACT_APP_MAILCHIMP}
                            render={({ subscribe, status, message }) => (
                                <Newsletter 
                                status={status}
                                message={message}
                                onValidated={formData => subscribe(formData)}
                                />
                            )}
                        />
                    </div>
                </div>
            </section>
       </div>
      
   )
}
