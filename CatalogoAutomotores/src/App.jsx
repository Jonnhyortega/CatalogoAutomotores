import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "./components/Navbar";
import { stock } from "./Js/autos";
import "./App.css";

const formatPrice = (price) => {
  return price.toLocaleString("es-AR");
};

const App = () => {
  const [selectedCar, setSelectedCar] = useState(stock[4]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <>
      <Navbar onCarSelect={handleCarSelect} />
      <div id="galerys">
        {selectedCar && (
          <div className="car">
            <img src={selectedCar.make} alt="Logo" />
            <h2>{selectedCar.version}</h2>
            <div id="boxInformation">
              <p>Precio de lista: ${formatPrice(selectedCar.price)}</p>
              <p>Modelo: {selectedCar.model}</p>
              <p>Kilometraje: {formatPrice(selectedCar.kilometers)}</p>
              <p>Motor: {selectedCar.engine}</p>
              <p>Combustible: {selectedCar.fuel}</p>
            </div>
            <ImageGallery
              items={selectedCar.pictures}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              autoPlay={false}
              infinite={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
