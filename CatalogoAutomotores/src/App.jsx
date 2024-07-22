import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from './components/Navbar';
import { stock } from "./Js/autos";
import "./App.css";

// Función de utilidad para formatear números con puntos como separadores de miles
const formatPrice = (price) => {
  return price.toLocaleString('es-AR');
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
            <h2>{selectedCar.version}</h2>
            <h4>${formatPrice(selectedCar.price)}</h4>
            <div id="boxInformation">
              <p>Modelo {selectedCar.model}</p>
              <p>Km {formatPrice(selectedCar.kilometers)}</p>
              <p>Motor {selectedCar.engine}</p>
              <p>{selectedCar.fuel}</p>
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
