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
                            <LazyLoad height={200}>
                                <animated.div style={fade} once>
                                    <img src={aboutPic} alt="Kari smiling"/>
                                </animated.div>
                            </LazyLoad>
                        </div>
                        <div className={classes.description}>
                            <Typography variant="h5" style={{fontFamily: theme.typography.fontFamily, paddingBottom: 30}}>
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
