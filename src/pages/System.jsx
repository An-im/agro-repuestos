import { useParams, Link } from "react-router-dom"
import { catalog } from "../data/catalog"
import Breadcrumb from "../components/Breadcrumb"

const System = () => {
  const { brandId, modelId, systemId } = useParams()

  const brand = catalog.find((b) => b.id === brandId)
  const model = brand?.models.find((m) => m.id === modelId)
  const system = model?.systems.find((s) => s.id === systemId)

  if (!brand || !model || !system) {
    return (
      <section className="py-20">
        <div className="max-w-layout mx-auto px-6 text-white">
          Sistema no encontrado
        </div>
      </section>
    )
  }

  return (
    <section className="pt-10 md:pt-14 pb-20">
      <div className="max-w-layout mx-auto px-6">

        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: brand.name, path: `/marca/${brand.id}` },
              { label: model.name, path: `/marca/${brand.id}/modelo/${model.id}` },
              { label: system.name }
            ]}
          />
        </div>

        {/* Label técnico */}
        <div className="mb-14">
          <p className="text-technicalGreen uppercase tracking-widest text-sm mb-3">
            {system.name}
          </p>

          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Productos
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {system.products.map((product) => (
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

              <p className="text-gray-500 text-sm mb-4">
                Código: {product.code}
              </p>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition ${
                  product.stock
                    ? "bg-technicalGreen text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {product.stock ? "In Stock" : "Consultar"}
              </span>

              <div className="mt-6 h-[2px] w-8 bg-technicalGreen opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default System
