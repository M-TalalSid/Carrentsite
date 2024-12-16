import React from "react";

const topCars = [
  { id: 1, name: "Rolls-Royce", value: 17_439, color: "bg-blue-600" },
  { id: 2, name: "Nissan GT-R", value: 18_197, color: "bg-blue-400" },
  { id: 3, name: "All New Rush", value: 12_510, color: "bg-blue-300" },
  { id: 4, name: "MG ZX Excite", value: 14_406, color: "bg-blue-200" },
  { id: 5, name: "CR-V", value: 9_478, color: "bg-blue-500" },
];

const Top5CarRental = () => {
  const totalRentals = topCars.reduce((sum, car) => sum + car.value, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-blue-500 mb-4">Top 5 Car Rental</h2>
      <div className="flex items-center justify-center">
        {/* Circle Chart */}
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {topCars.reduce(
              (acc, car) => {
                const startAngle = acc.endAngle;
                const angle = (car.value / totalRentals) * 360;
                const endAngle = startAngle + angle;
                const largeArcFlag = angle > 180 ? 1 : 0;

                const startX = 50 + 50 * Math.cos((startAngle * Math.PI) / 180);
                const startY = 50 + 50 * Math.sin((startAngle * Math.PI) / 180);
                const endX = 50 + 50 * Math.cos((endAngle * Math.PI) / 180);
                const endY = 50 + 50 * Math.sin((endAngle * Math.PI) / 180);

                (acc.segments as React.ReactNode[]).push(
                    <path
                      key={car.id}
                      d={`M50 50 L${startX} ${startY} A50 50 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                      fill={`var(--tw-${car.color})`}
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                  );

                acc.endAngle = endAngle;
                return acc;
              },
              { segments: [], endAngle: 0 }
            ).segments}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-700 font-bold text-lg">{totalRentals.toLocaleString()}</p>
            <p className="text-blue-500 text-sm">Rental Cars</p>
          </div>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {topCars.map((car) => (
          <li key={car.id} className="flex justify-between">
            <span className="text-gray-700">{car.name}</span>
            <span className="text-gray-800 font-semibold">{car.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top5CarRental;
