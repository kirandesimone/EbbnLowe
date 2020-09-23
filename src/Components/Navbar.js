import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import theme from '../theme'



const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "transparent"
    },
    navContainer: {
       display: "flex",
       justifyContent: "space-between"
    },
    logo: {
        flexGrow: 1,
        marginLeft: 70,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main
        
    },
    link: {
        textDecoration: "none",
    },
    button: {
        color: theme.palette.primary.main,
        fontFamily: theme.typography.fontFamily
    }
    
})

export default function Navbar() {
    const classes = useStyles();
    return (
        <div>
           <AppBar position="absolute" className={classes.root}>
               <Toolbar className={classes.navContainer}>
                   <Link to="/" className={classes.link}>
                        <Typography variant="h4" className={classes.logo}>
                            Ebb&Lowe
                        </Typography>
                    </Link>
                    <div>
                        <Link to="/about" className={classes.link}>
                            <Button size="large" className={classes.button}>
                                About
                            </Button>
                        </Link>
                        <Link to="instructors" className={classes.link}>
                            <Button size="large" className={classes.button}>
                                Instructors
                            </Button>
                        </Link>
                        <Link to="classes" className={classes.link}>
                            <Button size="large" className={classes.button}>
                                Classes
                            </Button>
                        </Link>
                        <Link to="blog" className={classes.link}>
                        <Button size="large" className={classes.button}>
                            Blog
                        </Button>
                        </Link>
                        <Link to="book-a-class" className={classes.link}>
                            <Button 
                            variant="contained" 
                            style={{fontFamily: theme.typography.fontFamily}} 
                            size="large">
                                Book a Class
                            </Button>
                        </Link>
                    </div>
               </Toolbar>
           </AppBar>
        </div>
    )
}
