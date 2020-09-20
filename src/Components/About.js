import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'


const useStyles = makeStyles({
    root: {
        marginTop: 150
    },
    banner: {
        backgroundColor: theme.palette.primary.dark,
    },
    title: {
        paddingTop: 160,
        paddingBottom: 40,
        paddingLeft: 100,
        color: theme.palette.primary.main
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default function About() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    About
                </Typography>
            </div>
            <Container maxWidth="md" className={classes.root}>
                <div className={classes.container}>
                    <div>
                        <Typography>
                            Picture
                        </Typography>
                    </div>
                    <div>
                        <Typography>
                            Words
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    )
}
