import { useParams } from "react-router-dom"
import { catalog } from "../data/catalog"
import Breadcrumb from "../components/Breadcrumb"

const Product = () => {
  const { productId } = useParams()

  let selectedProduct = null
  let selectedBrand = null
  let selectedModel = null
  let selectedSystem = null

  for (const brand of catalog) {
    for (const model of brand.models) {
      for (const system of model.systems) {
        for (const product of system.products) {
          if (product.id === productId) {
            selectedProduct = product
            selectedBrand = brand
            selectedModel = model
            selectedSystem = system
          }
        }
      }
    }
  }

  if (!selectedProduct) {
    return <div className="text-white p-10">Producto no encontrado</div>
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en la pieza Código: ${selectedProduct.code}`
  )

  const whatsappLink = `https://wa.me/549XXXXXXXXXX?text=${whatsappMessage}`

  return (
    <section className="py-20">
      <div className="max-w-layout mx-auto px-6">

        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: selectedBrand.name, path: `/marca/${selectedBrand.id}` },
            { label: selectedModel.name, path: `/marca/${selectedBrand.id}/modelo/${selectedModel.id}` },
            { label: selectedProduct.name }
          ]}
        />

        <div className="grid md:grid-cols-2 gap-12 mt-10">

          {/* Imagen */}
          <div className="bg-white rounded-2xl h-96 flex items-center justify-center shadow-lg">
            <span className="text-gray-400">Imagen del producto</span>
          </div>

          {/* Información */}
          <div>

            <h1 className="text-white text-3xl font-semibold mb-4">
              {selectedProduct.name}
            </h1>

            <p className="text-gray-400 mb-10">
              Código: {selectedProduct.code}
            </p>

            {/* Compatibilidad */}
            <div className="mb-9">
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Compatibilidad
              </p>
              <p className="text-gray-300 font-medium">
                {selectedBrand.name} {selectedModel.name}
              </p>
            </div>

            <p className="text-gray-300 mb-6">
              {selectedProduct.description}
            </p>

            <span
              className={`inline-block text-sm px-4 py-2 rounded-full font-medium mb-8 ${
                selectedProduct.stock
                  ? "bg-technicalGreen text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {selectedProduct.stock
                ? "Disponibilidad inmediata"
                : "Consultar disponibilidad"}
            </span>

            <div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-technicalGreen text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:scale-[1.02] transition"
              >
                Consultar por WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
