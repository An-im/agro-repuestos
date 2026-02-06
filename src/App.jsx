import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Brand from "./pages/Brand"
import Model from "./pages/Model"
import System from "./pages/System"
import Product from "./pages/Product"
import Stock from "./pages/Stock"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#2B2F36] to-[#23272F]">

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marca/:brandId" element={<Brand />} />
            <Route path="/marca/:brandId/modelo/:modelId" element={<Model />} />
            <Route path="/marca/:brandId/modelo/:modelId/sistema/:systemId" element={<System />} />
            <Route path="/producto/:productId" element={<Product />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
