import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-70 bg-white text-black flex flex-col gap-2 p-6 border-r border-black">
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
            <nav className="flex flex-col gap-1">
                <Link to="/admin/dashboard" className="px-3 py-3 rounded-md hover:bg-black hover:text-white transition-colors">Dashboard</Link>
                <Link to="/admin/products" className="px-3 py-3 rounded-md hover:bg-black hover:text-white transition-colors">Products</Link>
                <Link to="/admin/orders" className="px-3 py-3 rounded-md hover:bg-black hover:text-white transition-colors">Orders</Link>
                <Link to="/admin/features" className="px-3 py-3 rounded-md hover:bg-black hover:text-white transition-colors">Features</Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
