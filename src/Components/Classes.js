import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import classes1 from '../Assets/rsz_classes1.jpg'
import classes2 from '../Assets/rsz_classes2.jpg'
import classes3 from '../Assets/rsz_classes3.jpg'
import classes4 from '../Assets/rsz_classes4.jpg'
import theme from '../theme'
import LazyLoad from 'react-lazyload'
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: 150,
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: 1400
        
    },
    banner: {
        backgroundColor: theme.palette.primary.dark,
    },
    title: {
        paddingTop: 250,
        paddingBottom: 100, 
        paddingLeft: 200,
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    content: {
        display: "flex",
        paddingBottom: "15%"
    },
    description: {
        marginTop: 100,
        marginLeft : 100
    },
    flippedDescription: {
        marginTop: 100,
        marginRight: 100
    },
    name: {
        marginBottom: 40,
    },
    words: {
        fontFamily: theme.typography.fontFamily,
    }
});




export default function Classes() {
    const classes = useStyles();
    const fade = useSpring({
        opacity: 1,
        from: {opacity: 0},
    });

    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    Our Flows
                </Typography>
            </div>
            <div>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <LazyLoad height={200} once>
                            <animated.div style={fade}>
                                <img src={classes1} alt="Class 1"/>
                            </animated.div>
                        </LazyLoad>
                        <div className={classes.description}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Vinyas Flow
                                </Typography>
                            </div>
                            <Typography style={{fontFamily: theme.typography.fontFamily}}>
                                Start your practice with some tea or a cup of coffee and a YAS attitude. 
                                This flow aims to challenge your core after a week/end of doing…. Anything (or nothing). A power flow that stretches, flexes, and increases strength throughout the mind and the body. 
                                This class sets all levels of yogis up for success mixing in foundational postures as well as providing various options to go deeper. 
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.flippedDescription}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Don't Plan(k) On It Flow
                                </Typography>
                            </div>
                            <Typography style={{fontFamily: theme.typography.fontFamily}}>
                                Work your core and arm strength up in a full body strength and inversion based class. 
                                If you are dying to get upside down, this class welcomes all levels of yogis looking to challenge themselves and work up to an inversion or practice the skills to get there. 
                                (Video participation is STRONGLY recommended) 
                            </Typography>
                        </div>
                        <LazyLoad height={200} once>
                            <animated.div style={fade}>
                                <img src={classes2} alt="Class 2"/>
                            </animated.div>
                        </LazyLoad>
                    </div>
                    <div className={classes.content}>
                        <LazyLoad height={200} once>
                            <animated.div style={fade}>
                                <img src={classes3} alt="Class 3"/>
                            </animated.div>
                        </LazyLoad>
                        <div className={classes.description}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Quick Flow
                                </Typography>
                            </div>
                            <Typography style={{fontFamily: theme.typography.fontFamily}}>
                                A 30 min class that can be taken during a morning or afternoon routine that allows for a quick reset for your mind and body.
                                **COMING TO THE SCHEDULE SOON**
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.flippedDescription}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Soothing Souls Flow
                                </Typography>
                            </div>
                            <Typography style={{fontFamily: theme.typography.fontFamily}}>
                                Restore your body after the weekend with a minor piece of workout and flexibility. 
                                Work on what your body is calling to you. **COMING TO THE SCHEDULE SOON**
                            </Typography>
                        </div>
                        <LazyLoad height={200} once>
                            <animated.div style={fade}>
                                <img src={classes4} alt="Class 2"/>
                            </animated.div>
                        </LazyLoad>

                    </div>
                </div>
            </div>
        </div>
    )
}
