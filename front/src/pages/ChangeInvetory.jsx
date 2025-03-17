import { useState } from "react";

const ChangeInvetory = () => {
  const [inventoryName, setInventoryName] = useState("");
  const [category, setCategory] = useState("Stationary");
  const [qty, setQty] = useState(0);

  return (
    <div className="bg-yellow-300 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Change Inventory</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-medium">Inventory Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={inventoryName}
            onChange={(e) => setInventoryName(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Stationary</option>
            <option>Electronics</option>
            <option>Furniture</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Qty</label>
          <div className="flex items-center">
            <input
              type="number"
              className="w-16 p-2 border rounded text-center"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
            <button onClick={() => setQty(qty + 1)} className="ml-2 px-3 py-1 bg-gray-300 rounded">+</button>
            <button onClick={() => setQty(qty > 0 ? qty - 1 : 0)} className="ml-2 px-3 py-1 bg-gray-300 rounded">-</button>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="px-4 py-2 bg-orange-500 text-black rounded">Add New Item</button>
        <button className="px-4 py-2 bg-blue-500 text-black rounded">Submit</button>
        <button className="px-4 py-2 bg-green-500 text-black rounded">Clear</button>
      </div>
    </div>
  );
};

export default ChangeInvetory;
