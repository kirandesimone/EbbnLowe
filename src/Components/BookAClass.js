import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import StripeCheckout from 'react-stripe-checkout'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
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
    }
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
        <div>
            <div className={classes.banner}>
                <Typography variant="h2" className={classes.title}>
                    Book a Class
                </Typography>
            </div>
            <Container maxWidth="md" className={classes.root}>
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
            </Container>
        </div>
    )
}
