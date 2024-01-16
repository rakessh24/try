import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function DetailProduk() {
    return (
        <Container style={containerStyle}>
            <div className="product-details" style={productDetailsStyle}>
                <img src="/BataTempelMozaik.png" alt="Produk 1" style={imageStyle} />
                <Typography variant="h2" style={headingStyle}>
                    Bata Tempel Mozzaik
                </Typography>
                <Typography variant="body1" style={paragraphStyle}>
                    Spesifikasi :
                </Typography>
                <Typography variant="body1" style={paragraphStyle}>
                    • Warna : Putih
                </Typography>
                <Typography variant="body1" style={paragraphStyle}>
                    • Ukuran : 20 . 10 cm
                </Typography>
                <Typography variant="body1" style={paragraphStyle}>
                    <b>• Harga yang tertera untuk 1 pcs</b>
                </Typography>
                <div style={priceStyle}>Rp.2.500</div>
                <Button variant="contained" color="primary" href="keranjang.html" style={buttonStyle}>
                    <img src="/keranjang.png" alt="keranjang-icon" style={buttonImageStyle} />
                    <Typography variant="h4" style={buttonTextStyle}>
                        <b>Tambahkan ke Keranjang</b>
                    </Typography>
                </Button>
            </div>
        </Container>
    );
}

const containerStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const productDetailsStyle = {
    textAlign: 'center',
    marginTop: '10px',
};

const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
};

const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
};

const paragraphStyle = {
    marginLeft: '7cm',
    textAlign: 'left',
    fontSize: '16px',
    marginBottom: '20px',
};

const priceStyle = {
    fontSize: '20px',
    color: '#e44d26',
    marginBottom: '20px',
};

const buttonStyle = {
    width: '7cm',
    height: '2cm',
    backgroundColor: '#2d622e',
    color: '#fff',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
};

const buttonImageStyle = {
    width: '1.5cm',
    marginRight: '5px',
    verticalAlign: 'middle',
    transition: 'opacity 0.3s ease-in-out',
};

const buttonTextStyle = {
    margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: '0',
    transition: 'opacity 0.3s ease-in-out',
};

export default DetailProduk;
