import { useState } from "react"
import { catalog } from "../data/catalog"
import { Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"

const Stock = () => {

  const [query, setQuery] = useState("")

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

  // Ordenar por disponibilidad
  allProducts.sort((a, b) => b.stock - a.stock)

  // 🔎 Filtrado por código o nombre
  const filteredProducts = allProducts.filter((product) =>
    product.code.toLowerCase().includes(query.toLowerCase()) ||
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="pt-10 md:pt-14 pb-20">
      <div className="max-w-layout mx-auto px-6">

        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Disponibilidad" }
            ]}
          />
        </div>

        <div className="mb-10">
          <p className="text-technicalGreen uppercase tracking-widest text-sm mb-3">
            Catálogo completo
          </p>

          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">
            Disponibilidad de repuestos
          </h1>

          <p className="text-gray-400 max-w-2xl">
            Consulte disponibilidad inmediata o solicite gestión bajo pedido.
          </p>
        </div>

        {/* 🔎 Buscador */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Buscar por código o nombre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 
                       placeholder-gray-400 focus:outline-none 
                       focus:ring-2 focus:ring-technicalGreen transition"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/producto/${product.id}`}
              className="group bg-white/95 rounded-2xl p-10 shadow-lg 
                         hover:shadow-2xl hover:-translate-y-1 
                         hover:border hover:border-technicalGreen/30 
                         transition-all duration-300"
            >
              <h2 className="text-gray-800 font-semibold text-lg tracking-wide mb-2">
                {product.name}
              </h2>

              <p className="text-gray-500 text-sm mb-3">
                Código: {product.code}
              </p>

              <div className="mb-4">
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest">
                    Compatibilidad
                  </p>
                  <p className="text-gray-500 text-sm font-medium">
                    {product.brand.name} {product.model.name}
                  </p>
                </div>


              <span
                className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${
                  product.stock
                    ? "bg-technicalGreen text-white"
                    : "bg-yellow-400 text-gray-900"
                }`}
              >
                {product.stock
                  ? "Disponibilidad inmediata"
                  : "Consultar disponibilidad"}
              </span>

              <div className="mt-6 h-[2px] w-8 bg-technicalGreen opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            </Link>
          ))}
        </div>

        {/* Sin resultados */}
        {filteredProducts.length === 0 && (
          <p className="text-gray-400 mt-10">
            No se encontraron resultados para su búsqueda.
          </p>
        )}

      </div>
    </section>
  )
}

export default Stock
