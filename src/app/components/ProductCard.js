import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function ProductCard({
    product,
    imageURL,
    productName,
    productPrice,
    discounts,
    addnlDesc = '',
    rating,
    watchAction = () => { },
    onClick
}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => onClick(product)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="p">
                        {productName}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="h2">
                        ${productPrice}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {discounts}%
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component="p">
                        {addnlDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Rating
                    name="rating"
                    value={rating}
                    readOnly
                />
                <Button
                    startIcon={<FavoriteBorderOutlinedIcon />}
                    size="small"
                    color="primary"
                    onClick={watchAction}
                >
                    Watch
                </Button>
            </CardActions>
        </Card>
    );
}
