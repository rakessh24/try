import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import Roster from './pages/Roster/roster';
import Bata from './pages/Bata/bata';
import Listbeton from './pages/Listbeton/listbeton';
import Login from './pages/Login/login';
import Signin from './pages/Signin/signin';
import Riwayat from './pages/Riwayat/riwayat';
import Keranjang from './pages/Keranjang/keranjang';
import Profil from './pages/Profil/profil';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/bata" element={<Bata />} />
          <Route path="/listbeton" element={<Listbeton />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
    </Router>
  );
}

export default App;
