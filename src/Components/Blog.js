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
})

export default function Blog() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    Blog
                </Typography>
            </div>
            <div>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <Typography variant="h1" style={{fontFamily: theme.typography.fontFamily, color: theme.palette.primary.light}}>
                            COMING SOON
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
