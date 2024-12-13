import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Dress = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <Grid item xs={12} sm={6} md={3} key={product.id}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ height: 140, objectFit: "contain", margin: "auto" }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Rs. {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" fullWidth onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Dress
      </Typography>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </>
  );
};

export default Dress;
