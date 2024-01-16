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
    Iamge: "/Rosterbatik.png",
    description: " Roster Batik",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterDaduDua.png",
    description: " Roster Dadu 2",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterDaduempat.png",
    description: " Roster Dadu 4",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterDaduTiga.png",
    description: " Roster Dadu 3",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterDaun.png",
    description: " Roster Motif Daun",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterMelati.png",
    description: " Roster Motif Melati",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterN.png",
    description: " Roster Bentuk N",
    price: "Rp.14000",
  },
  {
    Iamge: "/RosterPanah.png",
    description: " Roster Bentuk Panah",
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
