import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import classes1 from '../Assets/rsz_classes1.jpg'
import classes2 from '../Assets/rsz_classes2.jpg'
import classes3 from '../Assets/rsz_classes3.jpg'
import theme from '../theme'

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
        paddingBottom: 120
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

    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    Classes
                </Typography>
            </div>
            <div>
                <div className={classes.container}>
                    <div className={classes.content}>
                    
                        <img src={classes1} alt="Class 1"/>
                        
                        <div className={classes.description}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Example Class
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
                    <div className={classes.content}>
                        <div className={classes.flippedDescription}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Example Class
                                </Typography>
                            </div>
                            <Typography style={{fontFamily: theme.typography.fontFamily}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus tellus. Pellentesque semper ex a dictum molestie. 
                                Integer at tortor viverra, rutrum nulla nec, dictum ipsum. Donec dapibus ultrices metus, sed scelerisque purus feugiat non. 
                                Sed a turpis ut odio dignissim sodales. Nullam at lobortis augue, ut viverra est. Integer risus lorem, feugiat quis ultrices in, 
                                consequat quis mauris. Etiam elit mi, placerat id sodales ut, lacinia eget diam. Ut faucibus ut tellus consequat blandit.
                            </Typography>
                        </div>

                        <img src={classes2} alt="Class 2"/>

                    </div>
                    <div className={classes.content}>
                    
                        <img src={classes3} alt="Class 3"/>
                        
                        <div className={classes.description}>
                            <div className={classes.name}>
                                <Typography variant="h2" style={{color: theme.palette.primary.light, fontFamily: theme.typography.fontFamily}}>
                                    Example Class
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
        </div>
    )
}
