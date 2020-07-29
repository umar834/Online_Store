import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import {shoes} from './Store'

import styles from './latest.module.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 230,
    },
});

function Latest() {

    const classes = useStyles();
    return (
        <div className={styles.container}>
            <h2 className={styles.mainheading}>Latest Designs</h2>

            <Grid container spacing={3} alignContent="center">
            {Object.entries(shoes).map(([slug, { name, img, price }]) => (
                <Grid className={styles.singleproduct} item xs={12} lg={4} sm={4}>
                    <Card className={classes.root}>
                    <Link className={styles.link} to={`/store/${slug}`}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img}
                                title={name}
                            />
                            <CardContent>
                                <Typography className={styles.shoetitle} align="center" gutterBottom variant="h6" component="h5">
                                    {name}
                                </Typography>
                                <Typography className={styles.price} align="center" variant="h6" component="h4">
                                    {price} pkr
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    <div className={styles.addtocart}>
                            <a>ADD TO CART</a>
                    </div>
                    </Card>
                </Grid>
             ))}
            </Grid>
        
</div>
    )
}

export default Latest
