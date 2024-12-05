import React, { useState } from "react";
import Navbar from './Komponen/NavBar/Navbar';
import CryptoConverter from './Komponen/CryptoConverter/CryptoConverter';

const App = () => {
  // State untuk menyimpan mode (Coin to Fiat atau Fiat to Coin)
  const [mode, setMode] = useState("CoinToFiat");

  return (
    <main>
      {/* Meneruskan state setMode ke Navbar dan mode ke CryptoConverter */}
      <Navbar setMode={setMode} />
      <CryptoConverter mode={mode} />
    </main>
  );
};

export default App;
