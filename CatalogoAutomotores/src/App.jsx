import React, { useState } from "react";
// import CarForm from "./carForm";
import { calculatorInt } from "./calculator";
import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import MyNavbar from './components/Navbar'
import {
  corsa,
  clio2013,
  prisma2016,
  suran2016,
  c4,
  voyage2015,
  punto2011,
  ecosport2012,
  focus2014,
  partner2016,
  model3082015,
} from "./assets/autosVar";

const App = () => {

  return (
    <div>


      <MyNavbar />
      <div id="galerys">
        
        <div id="corsa" className="car">
          <h2>Chevrolet Corsa Clasic</h2>
          <h4>$10.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2016</p>
            <p>Km 92.000</p>
            <p>Motor 1.6</p>
            <p>Nafta/Gnc</p>
          </div>
          <ImageGallery
            items={corsa}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="clio" className="car">
          <h2>Renault Clio Campus</h2>
          <h4>$9.500.000</h4>
          <div id="boxInformation">
            <p>Modelo 2013</p>
            <p>Km 130.000</p>
            <p>Motor 1.2</p>
            <p>Nafta</p>
          </div>
          <ImageGallery
            items={clio2013}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="prisma" className="car">
          <h2>Chevrolet Prisma LT</h2>
          <h4>$13.500.000</h4>
          <div id="boxInformation">
            <p>Modelo 2018</p>
            <p>Km 82.000</p>
            <p>Motor 1.4</p>
            <p>Nafta/Gnc</p>
          </div>
          <ImageGallery
            items={prisma2016}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="suran" className="car">
          <h2>Wolkswagen Suran Confortline</h2>
          <h4>$12.500.000</h4>
          <div id="boxInformation">
            <p>Modelo 2016</p>
            <p>Km 79.000</p>
            <p>Motor 1.6</p>
            <p>Nafta</p>
            <p>GNC de 5ta (opcional)</p>
          </div>
          <ImageGallery
            items={suran2016}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="c4" className="car">
          <h2>Citroen C4 Lounge</h2>
          <h4>$12.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2015</p>
            <p>Km 80.000</p>
            <p>Motor 2.0</p>
            <p>Nafta</p>
          </div>
          <ImageGallery
            items={c4}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="voyage" className="car">
          <h2>Wolkswagen Voyage Trendline</h2>
          <h4>$10.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2015</p>
            <p>Km 96.000</p>
            <p>Nafta/Gnc</p>
            <p>Motor 1.6</p>
          </div>
          <ImageGallery
            items={voyage2015}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="punto" className="car">
          <h2>Fiat Punto Atractive</h2>
          <h4>$9.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2011</p>
            <p>Km 120.000</p>
            <p>Nafta</p>
            <p>Motor 1.4</p>
          </div>
          <ImageGallery
            items={punto2011}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="ecoSport" className="car">
          <h2>Ford Eco Sport XL</h2>
          <h4>$10.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2012</p>
            <p>Km 110.000</p>
            <p>Nafta/Gnc</p>
            <p>Motor 1.6</p>
          </div>
          <ImageGallery
            items={ecosport2012}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="focus" className="car">
          <h2>Ford Focus SE PLUS</h2>
          <h4>$12.500.000</h4>
          <div id="boxInformation">
            <p>Modelo 2014</p>
            <p>Km 112.000</p>
            <p>Nafta</p>
          </div>
          <ImageGallery
            items={focus2014}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="partner" className="car">
          <h2>Peugeot Partner </h2>
          <h4>$12.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2016</p>
            <p>Km 80.000</p>
            <p>Nafta</p>
            <p>Motor 1.4</p>
          </div>
          <ImageGallery
            items={partner2016}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>

        <div id="model_308" className="car">
          <h2>Peugeot 308 Feline</h2>
          <h4>$13.000.000</h4>
          <div id="boxInformation">
            <p>Modelo 2015</p>
            <p>Km 70.000</p>
            <p>Nafta</p>
            <p>Motor 2.0</p>
          </div>
          <ImageGallery
            items={model3082015}
            showThumbnails={true}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={false}
            infinite={true}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
