import React from 'react'
import aboutPic from '../Assets/rsz_about.jpg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
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
        justifyContent: "space-between",
        marginTop: "10%",
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
        paddingLeft: "12%",
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    content: {
        display: "flex",
        paddingBottom: "15%"
    },
    heading: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.light, 
        paddingBottom: 30
    },
    description: {
        marginTop: "9%",
        marginLeft : "7%"
    },
})

export default function About() {
    const classes = useStyles();
    const fade = useSpring({
        opacity: 1,
        from: {opacity: 0},
    });
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    About
                </Typography>
            </div>
            <div>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div>
                            <LazyLoad height={200} once>
                                <animated.div style={fade}>
                                    <img src={aboutPic} alt="Kari smiling"/>
                                </animated.div>
                            </LazyLoad>
                        </div>
                        <div className={classes.description}>
                            <Typography variant="h5" className={classes.heading}>
                                Lets get it OM! 
                            </Typography>
                            <Typography style={{paddingBottom: 20}}>
                                Virtual yoga takes place in the surroundings you choose. With life swirling around, at a seemingly dizzying pace, 
                                it can be challenging to find a peaceful escape to focus on and prioritize yourself. 
                            </Typography>
                            <Typography>
                                At Ebb&Lowe, we want that first step onto your mat to be the beginning of a personal journey that removes you from the rigors of day-to-day life and serves as the 
                                foundation for calmness. The 6 foot by 2 foot space we all share should encourage you to comfortably push yourself, to be present and to move your mind, body and 
                                soul together one breath to one movement. 
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
