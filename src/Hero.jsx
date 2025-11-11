import hero from "./assets/hero.png";

export default function Hero() {
    return (
        <section className="bg-amber-50 p-20 flex flex-col-reverse xl:flex-row items-center justify-center gap-5">
            <div className="p-5 text-center xl:text-left">
                <h1 className="text-3xl xl:text-5xl font-bold my-3">Kazu Store</h1>
                <p className="max-w-150 xl:text-xl">
                    Discover a wide selection of products at the best prices, with fast and reliable service.
                    Start shopping now and experience a whole new way to enjoy shopping!
                </p>
                <button className="bg-black text-white font-medium xl:text-xl mt-5 px-4 xl:px-5 py-2 xl:py-3 rounded-xl hover:bg-gray-700 transition">
                    Get Started
                </button>
            </div>

            <img src={hero} alt="hero" className="max-w-80 xl:max-w-100 rounded-lg" />
        </section>
    );
}
  