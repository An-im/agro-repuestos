import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { catalog } from "../data/catalog"

const Header = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  const allProducts = []

  for (const brand of catalog) {
    for (const model of brand.models) {
      for (const system of model.systems) {
        for (const product of system.products) {
          allProducts.push({
            ...product,
            brand,
            model,
            system,
          })
        }
      }
    }
  }

  const handleChange = (value) => {
    setQuery(value)

    if (value.length === 0) {
      setResults([])
      return
    }

    const filtered = allProducts.filter(
      (product) =>
        product.code.toLowerCase().includes(value.toLowerCase()) ||
        product.name.toLowerCase().includes(value.toLowerCase())
    )

    setResults(filtered)
  }

  const handleSelect = (productId) => {
    navigate(`/producto/${productId}`)
    setQuery("")
    setResults([])
  }

  return (
    <header className="py-6 border-b border-gray-700">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white font-semibold text-xl tracking-wider">
          AGRO<span className="text-technicalGreen">REP</span>
        </Link>

        {/* Navegación derecha */}
        <div className="flex items-center gap-8">

          <Link
            to="/nosotros"
            className="text-gray-300 hover:text-white transition text-sm"
          >
            Nosotros
          </Link>

          <Link
            to="/stock"
            className="text-gray-300 hover:text-white transition text-sm"
          >
            Stock
          </Link>

          <Link
            to="/contacto"
            className="bg-technicalGreen text-white px-5 py-2 rounded-lg font-medium hover:scale-[1.02] transition text-sm"
          >
            Contacto
          </Link>

        </div>
      </div>

      {/* Buscador debajo */}
      <div className="mt-6 relative">
        <input
          type="text"
          placeholder="Buscar por código o descripción..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-technicalGreen transition"
        />

        {results.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto z-50">
            {results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className="px-5 py-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center border-b last:border-none"
              >
                <div>
                  <p className="text-gray-800 font-medium text-sm">
                    {product.code}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {product.name}
                  </p>
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    product.stock
                      ? "bg-technicalGreen text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {product.stock ? "In Stock" : "Consultar"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
