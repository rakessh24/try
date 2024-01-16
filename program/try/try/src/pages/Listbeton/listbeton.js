import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  CardContent,
  Card,
  CardActions
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../Utils/getTheme';
import Navbarcomp from '../../components/navbarcomp';
import Buttons from '../../components/Button/Button';

//data dari backend
//ini contoh data dummy
const dataRoster = [
  {
    Iamge: "/ListAntik.png",
    description: " List Motif Antik",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListGaris.png",
    description: " List Motif Garis",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListKotakB.png",
    description: "List Motif Motif Kotak Besar",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListKotakK.png",
    description: "List Motif Kotak Kecil",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListLabirin.png",
    description: "List Motif Labirin",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListMinimalis.png",
    description: "List Motif Minimalis",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListPlang.png",
    description: "List Motif Plang",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListSpatu.png",
    description: "List Motif Sepatu",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListSpiral.png",
    description: "List Motif Spiral",
    price: "Rp.14000",
  },
  {
    Iamge: "/ListTirai.png",
    description: "List Motif Tirai",
    price: "Rp.14000",
  }
]

export default function roster() {
  return (
    <ThemeProvider theme={theme}>
      <Container >
        <Navbarcomp />
        <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }} align="center" >
          <Typography component={"h4"} variant={"h5"} align="center" gutterBottom >
            Halo, Selamat Datang
          </Typography>
          <Typography variant={"h6"} align="center" color={"text.secondary"}> Kami siap mengirimkan produk ke seluruh Indonesia</Typography>
        </Container>
        <Container component={"main"} maxWidth="md" >
          <Grid container spacing={5} alignItems="flex-end">
            {
              dataRoster.map((item, index) => {
                return (
                  <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
                    <Card>
                      <CardContent>
                        <div style={{ textAlign: "center" }}>
                          <img
                            src={item.Iamge}
                            widht={150}
                            height={150}
                          />
                        </div>
                        <Typography component={"h5"} variant={"h6"} color="text.primary">
                          {item.description}
                        </Typography>
                        <Box sx={{
                          display: "flex",
                          justifyContent: "left",
                          alignItems: "baseline",
                          mb: 2,
                        }}
                        >
                          <Typography component={"h6"} variant={"h6"} color="text.primary" >
                            {item.price}
                          </Typography>
                          <Typography variant={"h6"} color="text.secondary">
                            /pcs
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Buttons label="Buy Now"
                          variant="outlined" />
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
