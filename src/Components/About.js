import React from 'react'
import aboutPic from '../Assets/rsz_about.jpg'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
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
        paddingBottom: "15%"
    },
    description: {
        marginTop: 100,
        marginLeft : 100
    },
})

export default function About() {
    const classes = useStyles();
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
                            <img src={aboutPic} alt="Kari smiling"/>
                        </div>
                        <div className={classes.description}>
                            <Typography variant="h5" style={{fontFamily: theme.typography.fontFamily, paddingBottom: 10}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus tellus. Pellentesque semper ex a dictum molestie. 
                            </Typography>
                            <Typography>
                                Sed a turpis ut odio dignissim sodales. Nullam at lobortis augue, ut viverra est. Integer risus lorem, feugiat quis ultrices in, 
                                consequat quis mauris. Etiam elit mi, placerat id sodales ut, lacinia eget diam. Ut faucibus ut tellus consequat blandit.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
