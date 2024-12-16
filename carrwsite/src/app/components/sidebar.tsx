import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-1/4 p-4 bg-gray-100 h-screen">
        <h3 className="font-bold mt-4 mb-2 text-blue-500">Type</h3>
        <div>
          <label>
            <input type="checkbox text-blue-500" /> Sport(10)
          </label>
          <label>
            <input type="checkbox text-blue-500" /> SUV(12)
          </label>
          <label>
            <input type="checkbox text-blue-500" /> MPV(16)
          </label>
          <label>
            <input type="checkbox text-blue-500" /> Sedan(20)
          </label>
          <label>
            <input type="checkbox text-blue-500" /> Coupe(14)
          </label>
          <label>
            <input type="checkbox text-blue-500" /> HatchBack(14)
          </label>
        </div>
        <h3 className="font-bold mt-4 text-blue-500">Capacity</h3>
        <div>
          <label>
            <input type="checkbox" /> 2 Person(10)
          </label>
          <label>
            <input type="checkbox" /> 4 Person(14)
          </label>
          <label>
            <input type="checkbox" /> 6 Person(12)
          </label>
          <label>
            <input type="checkbox" /> 8 or More(16)
          </label>
        </div>
        <h3 className="font-bold mt-4 text-blue-500">Price</h3>
        <input type="range" className="w-full" />
      </aside>
    </div>
  );
};

export default Sidebar;
