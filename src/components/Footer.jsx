export default function Footer() {
    return (
        <footer className="bg-gray-800 text-amber-50 px-5 py-10">
            <div className="flex flex-col md:flex-row justify-center gap-5">
                <div>
                    <p className="text-lg font-semibold mb-3">Kazu Store</p>
                    <p className="text-sm text-gray-300 max-w-100">
                        A modern IT store offering the latest in technology, gaming gear, and lifestyle products.
                        Our commitment is to deliver quality, value, and a fast, reliable customer experience.
                    </p>
                </div>

                <div>
                    <p className="text-lg font-semibold mb-3">Contact</p>
                    <ul className="text-sm text-gray-300 w-50">
                        <li>📍 Palembang</li>
                        <li>📞 (0823) 123-456</li>
                        <li>📱 +62 812-3456-7890</li>
                        <li>✉️ kazustore@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <p className="text-lg font-semibold mb-3">Operating Hours</p>
                    <ul className="text-sm text-gray-300">
                        <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                        <li>Saturday: 9:00 AM - 5:00 PM</li>
                        <li>Sunday & Public Holidays: Closed</li>
                    </ul>
                </div>
            </div>

            <hr className="border-gray-700 my-6" />

            <div className="text-center text-sm text-gray-300">
                © 2025 Kazu Store — All rights reserved.
            </div>
        </footer>
    );
}
