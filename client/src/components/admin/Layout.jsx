import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <div className="flex flex-1 flex-col">
            <Header />
            <main className="flex-1 p-6 bg-muted/30">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
