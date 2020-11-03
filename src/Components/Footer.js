import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FaInstagram, FaFacebookSquare, FaSpotify, FaRegCopyright } from 'react-icons/fa'
import mobileLogo from '../Assets/rsz_ebb_and_lowe.png'
import logo from '../Assets/ebb_n_lowe_logo.png'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
    root: {
        display: "flex",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "17%",
        maxWidth: 1200
    },
    icons: {
        display: "flex",
        flexDirection: "column"
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: "32%"
    },
    mobileLogo: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: "25%"
    }
})

export default function Footer() {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    return (
        <footer className={classes.root}>
            <div className={classes.icons}>
                <div>
                    <a 
                    href="https://www.instagram.com/ebbnlowe/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{color:"inherit"}}
                    >
                        <FaInstagram size="2rem"/>
                    </a>
                    <a 
                    href="https://www.facebook.com/EbbnLowe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{color:"inherit"}}
                    >
                        <FaFacebookSquare size="2rem"/>
                    </a>
                    <a 
                    href="https://open.spotify.com/user/1236008412?si=DykbpL5QQ1OakQuIutO0CA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{color:"inherit"}}
                    >
                        <FaSpotify size="2rem"/>
                    </a>
                </div>
                <div>
                    <FaRegCopyright/>Ebb&Lowe
                </div>
            </div>
            <div className={matches ? classes.mobileLogo : classes.logo}>
                <img src={matches ? mobileLogo : logo} alt="ebbnlowe logo"/>
            </div>
        </footer>

    )
}
