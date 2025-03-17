import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-yellow-400 p-4 flex flex-col space-y-2 min-h-screen">
      <Link to="/inventory-table" className="text-left px-4 py-2 hover:bg-orange-400">Inventory Table</Link>
      <Link to="/add-invetory" className="text-left px-4 py-2 hover:bg-orange-400">Add Inventory</Link>
      <Link to="/change-inventory" className="text-left px-4 py-2 hover:bg-orange-400">Change Inventory</Link>
      <Link to="/request" className="text-left px-4 py-2 hover:bg-orange-400">Request</Link>
      <Link to="/return" className="text-left px-4 py-2 hover:bg-orange-400">Return</Link>
      <Link to="/summary" className="text-left px-4 py-2 hover:bg-orange-400">Summary</Link>
      <Link to="/report" className="text-left px-4 py-2 hover:bg-orange-400">Report</Link>
    </aside>
  );
};

export default Sidebar;
