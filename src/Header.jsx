function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-gray-800 text-amber-50 shadow">
            <h1 className="text-md font-bold tracking-wide"><a href="#">Kazu Store</a></h1>

            <nav>
                <ul className="flex gap-3 text-sm items-center">
                    <li><a href="#" className="px-2 py-1 hover:underline transition">Home</a></li>
                    <li><a href="#" className="px-2 py-1 hover:underline transition">Products</a></li>
                    <li><a href="#" className="px-2 py-1 hover:underline transition">About</a></li>
                    <li><a href="#" className="bg-white text-gray-800 rounded-xl px-3 py-2 font-medium hover:bg-gray-300 transition">Log In</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
