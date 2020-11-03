import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 150,
        paddingRight: "20%",
        paddingLeft: "20%",
        paddingBottom: "20%"
        
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
    mobileTitle: {
        paddingTop: 250,
        paddingBottom: 100,
        paddingLeft: "5%",
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    },
    content: {
        display: "flex",
    },
    button: {
        backgroundColor: theme.palette.secondary.main
    },
})

export default function BookAClass() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={ matches ? classes.mobileTitle : classes.title}>
                    Book a Class
                </Typography>
            </div>
            <div className={classes.container}>
                {matches ? (
                    <div className={classes.mobileBook}>
                        <Button className={classes.button} variant="contained" size="large">
                            <a 
                            href='https://app.acuityscheduling.com/schedule.php?owner=20766070' 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{color: theme.palette.primary.main}} 
                            >
                                Book now
                            </a>
                        </Button>
                    </div>
                 ) : ( 
                    <Fragment>
                        <iframe 
                        src="https://app.acuityscheduling.com/schedule.php?owner=20766070" 
                        title="Schedule Appointment" 
                        width="100%" 
                        height="800" 
                        frameBorder="0"
                        >
                        </iframe>
                        <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
                    </Fragment>
                 )
                }
            </div>
        </div>
    )
}

