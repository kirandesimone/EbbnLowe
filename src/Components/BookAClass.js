import React from 'react'
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
        paddingRight: "20%",
        paddingLeft: "20%",
        
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
})

export default function BookAClass() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    Book a Class
                </Typography>
            </div>
            <div className={classes.container}>
                <iframe 
                src="https://app.acuityscheduling.com/schedule.php?owner=20766070" 
                title="Schedule Appointment" 
                width="100%" 
                height="800" 
                frameBorder="0"
                >
                </iframe>
                <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
            </div>
        </div>
    )
}

