import Sidebar from "./Sidebar";
import Layout from "./Layout";

function AdminLayout() {
    return (
        <div className="w-full min-h-screen flex bg-background">
            <Sidebar />
            <Layout />
        </div>
    );
}

export default AdminLayout;
