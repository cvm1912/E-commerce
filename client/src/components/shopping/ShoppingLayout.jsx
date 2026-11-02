import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function ShoppingLayout() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-background">
            <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shadow-sm">
                <h1 className="text-xl font-bold">E-commerce</h1>
                <nav className="flex items-center gap-6">
                    <Link to="/shop/home" className="text-sm hover:text-primary transition-colors">Home</Link>
                    <Link to="/shop/products" className="text-sm hover:text-primary transition-colors">Products</Link>
                    <Link to="/shop/checkout" className="text-sm hover:text-primary transition-colors">Checkout</Link>
                    <Link to="/shop/account" className="text-sm hover:text-primary transition-colors">Account</Link>
                </nav>
            </header>
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default ShoppingLayout;
