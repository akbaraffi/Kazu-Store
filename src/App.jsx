import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Home from "./pages/Home/Home.jsx";
import Product from './pages/Product/Product.jsx';
import { Routes, Route, Navigate } from "react-router-dom";


export default function App() {
  return (
    <>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Body>
      <Footer />
    </>
  );
}
