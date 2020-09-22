import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import StripeCheckout from 'react-stripe-checkout'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
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

export default function BookAClass() {
    const classes = useStyles();

    const [product, setProduct] = useState({
        name: "React",
        price: 10,
        productBy: "FaceBook"
    });

    const makePayment = token => {
        const body = {
            product,
            token
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`http://localhost:3001/payment`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            const {status} = res;
            console.log(status);
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <div className={classes.root}>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    Book a Class
                </Typography>
            </div>
            <div className={classes.container}>
                <StripeCheckout 
                    stripeKey="pk_test_51HSpvqA4tqhUmZLBCNsvZUNp2fJsjx3qrx1jkhUJlWa3Zy6EpB8oznvNpQbhHwJFRkyiPGa2ZxEPfDTsWILwnTrV00pRclb6tA"
                    token={makePayment}
                    name="Checkout"
                    amount={product.price * 100}
                    //shippingAddress
                    //billingAddress
                >
                    <Button>
                        Checkout
                    </Button>
                </StripeCheckout>
            </div>
        </div>
    )
}
