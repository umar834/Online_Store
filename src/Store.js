import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import styles from './latest.module.css'
import styles1 from './store.module.css'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 230,
    },
});

function Store() {


    const classes = useStyles();
    return (
      <div>
      <div className={styles1.imagecover}>
        <img className={styles1.banner} src="https://i.pinimg.com/originals/a5/3c/59/a53c5901712da82a3f52618f14ab2756.jpg" />
      </div> 
        
         <div className={styles1.container}>
            <h1 className={styles1.title}>Umaas Store</h1>
            <h2 className={styles1.mainheading}>Give your feet the beauty treatment that only brand new shoes can give.</h2>
            
            <h3>Hot Collection</h3>
            <Grid container spacing={3} alignContent="center">
                {Object.entries(moreshoe).map(([slug, { name, img, price }]) => (
                <Grid className={styles.singleproduct} item xs={12} lg={4} sm={4}>
                    <Card className={classes.root}>
                    <Link className={styles1.link} to={`/store/${slug}`}>
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

            <h3>Latest Entries</h3>
            <Grid container spacing={3} alignContent="center">
                {Object.entries(shoes).map(([slug, { name, img, price }]) => (
                <Grid className={styles.singleproduct} item xs={12} lg={4} sm={4}>
                    <Card className={classes.root}>
                    <Link className={styles1.link}  to={`/store/${slug}`}>
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
      </div>
    )
}

export default Store

export const moreshoe = {
      "AIR-MAX-INVIGOR-SNEAKER": {
        name: "AIR MAX INVIGOR SNEAKER",
        img: "https://www.famousfootwear.com/ProductImages/shoes_ia71330.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
        price: 9000
      },
      "cloudfoam-adapt-3.0": {
        name: "Cloudfoam Adapt 3.0",
        img: "https://www.famousfootwear.com/ProductImages/shoes_ia50139.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
        price: 7800
      },
      "Cloudfoam-Slip-On-Sneakers": {
        name: "Cloudfoam Slip On Sneakers",
        img: "https://www.famousfootwear.com/ProductImages/shoes_ia50134.jpg?trim.threshold=105&width=600&height=350&paddingWidth=40&anchor=bottomcenter",
        price: 11090
      }
}

export const shoes = {
    "Nike-Air-Force-1": {
        name: "Nike Air Force 1 '07 LX",
        img:
          "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/5f7c8341-24ac-49a5-bb79-020438beb39d/air-force-1-07-lx-womens-shoe-lwZ4x1.jpg",
        price: 3000
      },
      "Nike-Air-Max-270-React-SE": {
        name: "Nike Air Max 270 React SE",
        img:
          "https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/b2bfaf14-ed59-48a7-b8ae-e684b1d605ce/air-max-270-react-se-womens-shoe-6bhhrf.jpg",
        price: 5000
      },
      "EX-9209-BLACK": {
        name: "EX-9209-BLACK",
        img:
          "https://cdn-images-fishry.azureedge.net/product/1553510978405-product.jpeg/xs",
        price: 3500
      },
      "Air-Jordan-1-Mid-SE": {
        name: "Air Jordan 1 Mid SE",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-fa1114e5-bc96-4684-a9a2-22b7fc53262e/air-jordan-1-mid-se-mens-shoe-kDdH3C.jpg",
        price: 4000
      },
      "Nike-Air-Max-2090": {
        name: "Nike Air Max 2090",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71a31b15-d464-48b5-a0df-80a6bc20c69c/air-max-2090-mens-shoe-3pVM46.jpg",
        price: 7000
      },
      "Nike-Blazer-Mid-77-Suede": {
        name: "Nike Blazer Mid '77 Suede",
        img:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-d3df7a75-3a70-4927-9148-01705134bd0c/blazer-mid-77-suede-shoe-HxFGDP.jpg",
        price: 8500
      },
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: 4000
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: 5000
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: 3500
    }
  };
