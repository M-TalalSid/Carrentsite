import React from "react";

const CarCard = ({
  name = "Koenisegg",
  type = "SUV",
  price = "$99.00",
  img = "/Koenigsegg.png",
  fuel = "100l",
  transmission = "Automatic",
  capacity = "4 Person",

}) => {
  return (
    <div>
      <div className="border rounded-lg shadow p-4">
        <img src={img} alt={name} className="w-full h-32 object-cover mb-4" />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-blue-500">${price}/day</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
