import { useState } from "react";

const InventoryTable = () => {
  const [inventory, setInventory] = useState([
    { id: "INV001", name: "Notebook", category: "Stationary", qty: 50, threshold: 20 },
    { id: "INV002", name: "Laptop", category: "Electronics", qty: 10, threshold: 5 },
    { id: "INV003", name: "Chair", category: "Furniture", qty: 25, threshold: 10 },
  ]);

  return (
    <div className="bg-yellow-200 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Inventory Table</h2>

      <table className="w-full border border-brown-700 text-center">
        <thead>
          <tr className="bg-yellow-300 text-lg font-bold">
            <th className="border border-brown-700 px-4 py-2">S.No</th>
            <th className="border border-brown-700 px-4 py-2">Item ID</th>
            <th className="border border-brown-700 px-4 py-2">Item Name</th>
            <th className="border border-brown-700 px-4 py-2">Category</th>
            <th className="border border-brown-700 px-4 py-2">Qty</th>
            <th className="border border-brown-700 px-4 py-2">Threshold</th>
            <th className="border border-brown-700 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={item.id} className="bg-yellow-100">
              <td className="border border-brown-700 px-4 py-2">{index + 1}</td>
              <td className="border border-brown-700 px-4 py-2">{item.id}</td>
              <td className="border border-brown-700 px-4 py-2">{item.name}</td>
              <td className="border border-brown-700 px-4 py-2">{item.category}</td>
              <td className="border border-brown-700 px-4 py-2">{item.qty}</td>
              <td className="border border-brown-700 px-4 py-2">{item.threshold}</td>
              <td
                className={`border border-brown-700 px-4 py-2 font-bold ${
                  item.qty <= item.threshold ? "text-red-600" : "text-green-600"
                }`}
              >
                {item.qty <= item.threshold ? "Low Stock" : "Available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
