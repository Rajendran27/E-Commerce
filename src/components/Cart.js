import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <Grid item xs={12} sm={6} md={3} key={product.id}>
      <Card sx={{ maxWidth: 345, margin: 'auto' }}>
        <CardMedia
          component="img"
          alt={product.title}
          height="140"
          image={product.image}
          sx={{ objectFit: 'contain', padding: '10px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs. {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            variant="contained" 
            color="error" 
            onClick={() => removeToCart(product.id)}
          >
            Remove Item
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {cards}
    </Grid>
  );
};

export default Cart;
