import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const ProductItems = ({ id, image, title, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add({ id, image, title, price }));
  };

  return (
    <div className="col-md-3" style={{ marginBottom: '10px' }}>
      <Card key={id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: '100px', height: '130px', margin: 'auto', paddingTop: '10px' }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rs. {price}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button variant="contained" color="primary" fullWidth onClick={addToCart}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductItems;
