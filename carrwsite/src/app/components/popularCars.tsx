import React from "react";
import CarCard from "./carCard";

const PopularCars = () => {
  return (
    <div>
      <section>
        <h2 className="text-xl font-bold p-4 text-blue-500">Popular Cars</h2>
        <div className="grid grid-cols-3 gap-4 p-4">
          <CarCard name="Koenigsegg" 
          price="$99.00" 
          img="Koenigsegg.png" 
          fuel="100l" 
          transmission="Automatic" 
          capacity="4 Person" />
          <CarCard
            name="Nissan GT-R"
            price="$85.00"
            img="NissanGT-R.png"
            fuel="80l"
            transmission="Automatic"
            capacity="4 Person"
            type="SUV"
          />
          <CarCard
            name="Rolls-Royce"
            price="$90.00"
            img="Rolls-Royce.png"
          />
          <CarCard name="Nissan GTR" 
          price="$85.00" 
          img="NissanGTR.png" />

          {/* Repeat for other cars */}
        </div>
      </section>
    </div>
  );
};

export default PopularCars;
