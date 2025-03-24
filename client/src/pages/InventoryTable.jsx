import { useEffect, useState } from "react";
import Instance from "../AxiosConfig"

const InventoryTable = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Instance.get("/add/getTable")
      .then((res) => {
        setInventory(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
        setLoading(false);
      });
    // fetchData();
  }, []);

// async function fetchData() {
//   try {
//     const inventory = await Instance.get("/add/getTable")
//     setInventory(res.data);
//     setLoading(false);
//   } catch (error) {
//     console.error("Error fetching inventory:", error);
//     setLoading(false);
//   }

// }



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Inventory List</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-black">Serial No</th>
                <th className="border px-4 py-2 text-black">Item Name</th>
                <th className="border px-4 py-2 text-black">Category</th>
                <th className="border px-4 py-2 text-black">Quantity</th>
                <th className="border px-4 py-2 text-black">Threshold</th>
                <th className="border px-4 py-2 text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.srno} className="border">
                  <td className="border px-4 py-2 text-black">{item.srno}</td>
                  <td className="border px-4 py-2 text-black">{item.itemname}</td>
                  <td className="border px-4 py-2 text-black">{item.category}</td>
                  <td className="border px-4 py-2 text-black">{item.qty}</td>
                  <td className="border px-4 py-2 text-black">{item.threshold}</td>
                  <td
                    className={`border px-4 py-2 ${
                      item.status === "instock" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
