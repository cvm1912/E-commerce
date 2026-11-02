function Header() {
    return (
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-sm">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Admin</span>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">A</div>
            </div>
        </header>
    );
}

export default Header;
