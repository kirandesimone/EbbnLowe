import React from 'react'
import { useSpring, animated } from 'react-spring'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import instructor2 from '../Assets/rsz_image.jpg'
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
        marginTop: 280,
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
    })
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
            
                <Typography variant="h2" className={classes.title}>
                    Instructors
                </Typography>
            </div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <animated.div style={fade}>
                        <img src={instructor2} alt="Kari the instructor"/>
                    </animated.div>
                    <div className={classes.description}>
                        <div className={classes.name}>
                            <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                Kari Lowe
                            </Typography>
                        </div>
                        <Typography style={{fontFamily: theme.typography.fontFamily}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus tellus. Pellentesque semper ex a dictum molestie. 
                            Integer at tortor viverra, rutrum nulla nec, dictum ipsum. Donec dapibus ultrices metus, sed scelerisque purus feugiat non. 
                            Sed a turpis ut odio dignissim sodales. Nullam at lobortis augue, ut viverra est. Integer risus lorem, feugiat quis ultrices in, 
                            consequat quis mauris. Etiam elit mi, placerat id sodales ut, lacinia eget diam. Ut faucibus ut tellus consequat blandit.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
