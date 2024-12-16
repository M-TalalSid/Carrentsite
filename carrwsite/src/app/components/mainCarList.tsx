import React from "react";
import CarCard from "./carCard";

const MainCarList = () => {
  return (
    <div>
      <section className="w-3/4 grid grid-cols-3 gap-4 p-4">
        <CarCard name="New Rush" price="$99.00/day" img="ANR.png" />
        <CarCard name="CR-V" price="99.00" img="CRV.png" />
        <CarCard name="All New Terios" price="99.00" img="ANT.png" />
        <CarCard name="MG ZX Excite" price="99.00" img="MGZX.png" />
        <CarCard name="New MGZS" price="99.00" img="MGZS.png" />
        <CarCard name="MG ZX Exclusive" price="99.00" img="MG-ZX.png" />
        <CarCard name="CR-V" price="99.00" img="CR-V.png" />
        <CarCard name="All New Rush" price="99.00" img="ANR.png" />
        {/* Repeat */}
      </section>
    </div>
  );
};

export default MainCarList;
