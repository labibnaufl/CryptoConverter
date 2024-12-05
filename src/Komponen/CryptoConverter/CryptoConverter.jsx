import React, { useState } from "react";

const CryptoConverter = ({ mode }) => {
  const coins = [
    { code: "BTC", name: "Bitcoin", icon: "BTC" },
    { code: "ETH", name: "Ethereum", icon: "ETH" },
    { code: "DOGE", name: "DogeCoin", icon: "DOGE" },
  ];

  const fiats = [
    { code: "IDR", name: "Indonesian Rupiah", icon: "ID" },
    { code: "USD", name: "US Dollar", icon: "US" },
    { code: "EUR", name: "Euro", icon: "EU" },
  ];

  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [selectedFiat, setSelectedFiat] = useState("IDR");
  const [coinValue, setCoinValue] = useState("");
  const [fiatValue, setFiatValue] = useState("");

  const conversionRates = {
    BTC: { IDR: 450000000, USD: 30000, EUR: 28000 },
    ETH: { IDR: 32000000, USD: 2000, EUR: 1800 },
    DOGE: { IDR: 900, USD: 0.06, EUR: 0.05 },
  };

  const handleConvert = () => {
    if (mode === "CoinToFiat" && coinValue && conversionRates[selectedCoin]) {
      const rate = conversionRates[selectedCoin][selectedFiat];
      const convertedValue = coinValue * rate;
      setFiatValue(convertedValue.toFixed(2));
    } else if (mode === "FiatToCoin" && fiatValue && conversionRates[selectedCoin]) {
      const rate = conversionRates[selectedCoin][selectedFiat];
      const convertedValue = fiatValue / rate;
      setCoinValue(convertedValue.toFixed(6));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-60">
      {/* Heading */}
      <h1 className="text-4xl font-bold">Crypto Coin Conversion</h1>
      <p className="text-gray-600 mt-2">Free From Sign-Up, Limits, and Complications</p>

      {/* Main Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-96">
        {/* Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {mode === "CoinToFiat" ? "Coin" : "Fiat"}
          </label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="number"
              value={mode === "CoinToFiat" ? coinValue : fiatValue}
              onChange={(e) =>
                mode === "CoinToFiat"
                  ? setCoinValue(e.target.value)
                  : setFiatValue(e.target.value)
              }
              className="flex-1 px-4 text-gray-800 focus:outline-none"
              placeholder="0"
            />
            <select
              value={mode === "CoinToFiat" ? selectedCoin : selectedFiat}
              onChange={(e) =>
                mode === "CoinToFiat"
                  ? setSelectedCoin(e.target.value)
                  : setSelectedFiat(e.target.value)
              }
              className="bg-gray-200 px-4 py-2 text-gray-800 focus:outline-none"
            >
              {(mode === "CoinToFiat" ? coins : fiats).map((item) => (
                <option key={item.code} value={item.code}>
                  {item.icon}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Output */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {mode === "CoinToFiat" ? "Fiat" : "Coin"}
          </label>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="number"
              value={mode === "CoinToFiat" ? fiatValue : coinValue}
              readOnly
              className="flex-1 px-4 text-gray-800 focus:outline-none"
              placeholder="0"
            />
            <select
              value={mode === "CoinToFiat" ? selectedFiat : selectedCoin}
              onChange={(e) =>
                mode === "CoinToFiat"
                  ? setSelectedFiat(e.target.value)
                  : setSelectedCoin(e.target.value)
              }
              className="bg-gray-200 px-4 py-2 text-gray-800 focus:outline-none"
            >
              {(mode === "CoinToFiat" ? fiats : coins).map((item) => (
                <option key={item.code} value={item.code}>
                  {item.icon}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full bg-blue-300 text-black py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Convert
        </button>
      </div>

      {/* Footer */}
      <p className="text-gray-500 mt-4 text-sm">
        The Most Efficient and Visually Appealing Website for Crypto Conversion
      </p>
    </div>
  );
};

export default CryptoConverter;