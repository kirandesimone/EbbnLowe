import React from 'react'
import { useSpring, animated } from 'react-spring'
import LazyLoad from 'react-lazyload'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import instructorPic from '../Assets/rsz_instructor.jpg'
import theme from '../theme'


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
    },
    description: {
        marginTop: 180,
        marginLeft : 100
    },
    name: {
        marginBottom: 40,
    },
    words: {
        fontFamily: theme.typography.fontFamily,
    }
    
});

export default function Instructors() {
    const classes = useStyles();
    const fade = useSpring({
        opacity: 1,
        from: {opacity: 0},
    });
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
            
                <Typography variant="h2" className={classes.title}>
                    Instructors
                </Typography>
            </div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <LazyLoad height={200}>
                        <animated.div style={fade}>
                            <img src={instructorPic} alt="Kari the instructor" />
                        </animated.div>
                    </LazyLoad>
                    <div className={classes.description}>
                        <div className={classes.name}>
                            <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                Kari Lowe
                            </Typography>
                        </div>
                        <Typography style={{fontFamily: theme.typography.fontFamily}}>
                            For Kari, yoga means home. She first discovered the artform on visits back to Cleveland during college, she and her mom would take classes to connect with each other and unwind. Hobby turned to passion as Kari quickly recognized the 
                            interconnectivity between mind, body and soul and how yoga enhances these powerful relationships. Many free trials and yoga memberships later, 
                            Kari decided to get certified herself by completing her 200 hour training requirement in 2017. Soon after, she began teaching at various studios throughout DC and Philadelphia, 
                            developing a well-rounded teaching style with students at the center. Whether it be individual attention throughout class or creating a new music playlist to support each session’s intention, Kari has kept one thing constant in her practice, students come first.
                            Exploration of the many forms yoga embodies helped to deepen Kari’s appreciation for the physical practice overall as well as committed her to being a student for life. Through private sessions, group classes, 
                            and large workshops, she has taught over 1,000 hours of yoga to a wide range of skill levels. Kari creates flows that aim to touch on the fundamentals of yoga while getting us one inch lower in the Shiva squat. 
                            The focus of class is always an inclusive environment meant to help each student meet their individual goals
                            Kari’s style is best described as a powerful, breath-centric flow, designed to connect the mind, body and spirit.  When she’s not living in the nursing school library, you can find her in Philadelphia, PA.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
