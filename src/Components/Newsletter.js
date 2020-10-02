import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'


const useStyles = makeStyles({
    button: {
      backgroundColor: theme.palette.primary.main,
    }
    
})

export default function Newsletter() {
    const classes = useStyles();
  return (
    <div id="mc_embed_signup">
      <form 
      action={process.env.REACT_APP_MAILCHIMP} 
      method="post" 
      id="mc-embedded-subscribe-form" 
      name="mc-embedded-subscribe-form" 
      target="_blank" 
      noValidate
      >
        <div>
          <Button 
          type="submit" 
          variant="contained"
          size="large"
          name="subscribe" 
          id="mc-embedded-subscribe" 
          className={classes.button}> 
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  ) 
}
