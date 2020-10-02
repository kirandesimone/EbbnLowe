import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FaInstagram, FaFacebookSquare, FaSpotify, FaRegCopyright } from 'react-icons/fa'
import logo from '../Assets/rsz_ebb_and_lowe.png'

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "17%",
        maxWidth: 1200
    },
    socialMedia: {
        
    },
    logo: {
        display: "flex",
    }
    
})

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <div className={classes.socialMedia}>
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
            <div className={classes.logo}>
                <img src={logo} alt="ebbnlowe logo"/>
            </div>
        </footer>

    )
}
