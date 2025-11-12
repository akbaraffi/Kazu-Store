import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-gray-800 text-amber-50 shadow">
            <h1 className="text-md font-bold tracking-wide"><Link to="/home">Kazu Store</Link></h1>

            <nav>
                <ul className="flex gap-3 text-sm items-center">
                    <li><Link to="/home" className="px-2 py-1 hover:underline transition">Home</Link></li>
                    <li><Link to="/product" className="px-2 py-1 hover:underline transition">Products</Link></li>
                    <li><a href="#" className="px-2 py-1 hover:underline transition">About</a></li>
                    <li><a href="#" className="bg-white text-gray-800 rounded-xl px-3 py-2 font-medium hover:bg-gray-300 transition">Log In</a></li>
                </ul>
            </nav>
        </header>
    );
}