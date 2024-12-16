import React from "react";

const transactions = [
  {
    id: 1,
    name: "Nissan GT - R",
    date: "20 July",
    price: "$80.00",
    image: "NissanGT-R.png", // Replace with actual car image
  },
  {
    id: 2,
    name: "Koenigsegg",
    date: "19 July",
    price: "$99.00",
    image: "Koenigsegg.png", // Replace with actual car image
  },
  {
    id: 3,
    name: "Rolls-Royce",
    date: "18 July",
    price: "$96.00",
    image: "Rolls-Royce.png", // Replace with actual car image
  },
  {
    id: 4,
    name: "CR - V",
    date: "17 July",
    price: "$80.00",
    image: "CR-V.png", // Replace with actual car image
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-500">Recent Transactions</h2>
        <a href="/" className="text-blue-500 hover:underline">
          View All
        </a>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={transaction.image}
                alt={transaction.name}
                className="w-16 h-10 object-cover rounded-md"
              />
              <div>
                <h3 className="text-blue-500 font-medium">{transaction.name}</h3>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="text-blue-500 font-semibold">{transaction.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
