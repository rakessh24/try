import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import Navbarcomp from '../../components/navbarcomp';
import Gambar from '../../image/BannerHome.png';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 150,
      description: 'Description for Product 2',
      image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];

  return (
    <Container>
      <Navbarcomp />
      <Typography component={"h2"} variant="h4" gutterBottom>
        Welcome to Our Online Store
      </Typography>
      <div>
      <img src={Gambar} alt="Deskripsi Gambar" width="100%" height="none" />
    </div>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  Price: ${product.price}
                </Typography>
                <Button variant="contained" color="primary">
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
