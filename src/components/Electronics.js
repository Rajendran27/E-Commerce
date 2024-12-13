import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  CardActions,
} from "@mui/material";

const Electronics = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Electronics
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs. {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  fullWidth
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Electronics;
