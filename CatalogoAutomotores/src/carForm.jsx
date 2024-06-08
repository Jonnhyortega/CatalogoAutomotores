import React, { useState } from "react";
import { cars } from "./ineterestCalculator";

const CarForm = ({ onCalculate }) => {
  const [advancePayment, setAdvancePayment] = useState("");
  const [selectedCar, setSelectedCar] = useState("");

  const handleAdvanceChange = (event) => {
    setAdvancePayment(event.target.value);
  };

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (advancePayment && selectedCar) {
      onCalculate(parseInt(advancePayment), selectedCar);
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="advancePayment">Anticipo:</label>
        <input
          type="number"
          id="advancePayment"
          value={advancePayment}
          onChange={handleAdvanceChange}
          required
        />
      </div>
      <div>
        <label htmlFor="car">Seleccione un auto:</label>
        <select
          id="car"
          value={selectedCar}
          onChange={handleCarChange}
          required
        >
          <option value="">Seleccione un auto</option>
          {cars.map((car, index) => (
            <option key={index} value={car.name}>
              {car.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default CarForm;
