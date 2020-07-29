import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import {shoes, moreshoe} from './Store'
import Grid from '@material-ui/core/Grid';

import styles from './shoe.module.css'

function Shoe() {
    var [quantity, setQuantity] = useState(1);
    const {slug} = useParams()
    const shoe = shoes[slug]

    if(!shoe){
    const shoe1 = moreshoe[slug]
    if(!shoe1){
        return(
            <h2>Shoe not found</h2>
        )
    }
    else {
        const {name, img, price} = shoe1
        return (
            <div className={styles.container}>
                <Grid container spacing={3} alignContent="center">
                    <Grid className={styles.image} item xs={12} lg={6} sm={6}>
                        <img src={img} />
                    </Grid>
                    <Grid className={styles.content} item xs={12} lg={6} sm={6}>
                        <div>
                            <h2>{name}</h2>
                            <h4>Price: {price}</h4>
                            <span>Quantity: </span>
                            <button onClick={()=> {
                                if(quantity > 0){
                                setQuantity(quantity-=1)}
                            }} className={styles.minus}>-</button>
                            <input min="1" max="50" value={quantity} type="number" />
                            <button onClick={()=> {
                                setQuantity(quantity+=1)
                            }} className={styles.plus}>+</button>
                            <div className={styles.addtocart}>
                                <a>ADD TO CART</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }}

    else {
        const {name, img, price} = shoe
        return (
            <div className={styles.container}>
                <Grid container spacing={3} alignContent="center">
                    <Grid className={styles.image} item xs={12} lg={6} sm={6}>
                        <img src={img} />
                    </Grid>
                    <Grid className={styles.content} item xs={12} lg={6} sm={6}>
                        <div>
                            <h2>{name}</h2>
                            <h4>Price: {price}</h4>
                            <span>Quantity: </span>
                            <button onClick={()=> {
                                if(quantity > 0){
                                setQuantity(quantity-=1)}
                            }} className={styles.minus}>-</button>
                            <input min="1" max="50" value={quantity} type="number" />
                            <button onClick={()=> {
                                setQuantity(quantity+=1)
                            }} className={styles.plus}>+</button>
                            <div className={styles.addtocart}>
                                <a>ADD TO CART</a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Shoe
