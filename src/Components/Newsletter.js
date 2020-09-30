import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'


const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    input: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      }
    }
})

export default function Newsletter(props) {
    const classes = useStyles();
    let email = ""; 
    let name = "";
    const submit = () => {
        email &&
        name && 
        email.value.indexOf("@") > -1 &&
        props.onValidated({
            EMAIL: email.value,
            NAME: name.value
        });
    }
    return (
      <div className={classes.root}>
        {props.status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {props.status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: props.message }}
        />
        )}
        {props.status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: props.message }}
          />
        )}
        <form className={classes.input} noValidate autoComplete="off">
          <TextField
            variant="filled"
            ref={node => (name = node)}
            type="text"
            placeholder="Your name"
          />
          <TextField
            variant="filled"
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
          />
        </form>
        <div>
          <Button variant="outlined" size="small" onClick={submit}>
            Subscribe
          </Button>
        </div>
      </div>
    )
}
