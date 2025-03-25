import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Instance from "../AxiosConfig";
import { useNavigate } from "react-router-dom";

function IssueInventory() {
  const [issueInventory, setIssueInventory] = useState([]);
  const [itemName, setItemName] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const [qty, setQty] = useState("");
  const [deptName, setDeptName] = useState("");
  const [date, setDate] = useState("");

  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Fetch issued inventory
  useEffect(() => {
    const fetchIssuedInventory = async () => {
      try {
        const response = await Instance.get("/add/getIssuedInventory");
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching issued inventory:", error);
      }
    };

    fetchIssuedInventory();
  }, []);

  // Handle issue inventory submission
  const handleIssueInventory = async (e) => {
    e.preventDefault();

    try {
      const response = await Instance.post("/add/issueInventory", {
        faculty: facultyName,
        date: date,
        name: itemName,
        qty: parseInt(qty, 10),
        dept: deptName,
      });

      if (response.status === 200 || response.status === 201) {
        alert("Inventory issued successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Issued Inventory error:", error.response?.data || error.message);
      alert("Error issuing inventory");
    }
  };

  return (
    <div className="wrapper">
      <div className="main flex items-start justify-center">
        <div className="add_inventory rounded-2xl bg-blue-100 w-4/5 m-auto my-8 px-10 py-8">
          <h1 className="text-blue-900 text-3xl font-bold text-center px-8 py-2">
            Issued Inventory
          </h1>
          <form onSubmit={handleIssueInventory}>
            <div className="grid grid-cols-3 gap-8 px-8 py-10">
              {/* Inventory Name */}
              <div className="font-bold">
                <label htmlFor="itemName " className="text-blue-900">Inventory Name</label>
                <input
                  className="border-2 my-2 px-5 py-2 text-black w-full"
                  type="text"
                  placeholder="Item Name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  required
                />
              </div>

              {/* Quantity */}
              <div className="font-bold">
                <label htmlFor="qty" className="text-blue-900">Quantity</label>
                <input
                  className="border-2 my-2 px-5 py-2 text-black w-full"
                  type="number"
                  value={qty}
                  placeholder="Qty"
                  onChange={(e) => setQty(e.target.value)}
                  required
                />
              </div>
                 {/* Date */}
                 <div className="font-bold">
                <label htmlFor="date" className="text-blue-900">Date</label>
                <input
                  className="border-2 my-2 px-5 py-2 text-black w-full"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              {/* Faculty Name */}
              <div className="font-bold">
                <label htmlFor="facultyName" className="text-blue-900">Faculty Name</label>
                <input
                  className="border-2 my-2 px-5 py-2 text-black w-full"
                  type="text"
                  placeholder="Faculty Name"
                  value={facultyName}
                  onChange={(e) => setFacultyName(e.target.value)}
                  required
                />
              </div>

              {/* Department Name */}
              <div className="font-bold">
                <label htmlFor="dept" className="text-blue-900">Department Name</label>
                <input
                  className="border-2 my-2 px-5 py-2 text-black w-full"
                  type="text"
                  placeholder="Department Name"
                  value={deptName}
                  onChange={(e) => setDeptName(e.target.value)}
                  required
                />
              </div>

           
            </div>

            <div className="flex justify-center items-center">
              <button
                className="px-8 py-3 bg-blue-900 text-white rounded-2xl mx-4"
                type="submit"
              >
                Submit
              </button>
              <button
                className="px-8 py-3 bg-gray-900 text-white rounded-2xl mx-4"
                type="reset"
                onClick={() => {
                  setItemName("");
                  setQty("");
                  setDeptName("");
                  setFacultyName("");
                  setDate("");
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssueInventory;
