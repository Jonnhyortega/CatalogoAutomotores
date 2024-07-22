export const calculatorInt = (advancePayment, car) => {
    let moneyToReturn = car - advancePayment;

    return `
       <div>
          <p>Opciones de pago:</p>
          <span>60 cuotas</span><span>$${Math.round(moneyToReturn/60)}</span>
          <span>48 cuotas</span><span>$${Math.round(moneyToReturn/48)}</span>
          <span>36 cuotas</span><span>$${Math.round(moneyToReturn/36)}</span>
          <span>24 cuotas</span><span>$${Math.round(moneyToReturn/60)}</span>
          <span>12 cuotas</span><span>$${Math.round(moneyToReturn/12)}</span>
       </div>
    `;
 };
 