import { useParams, Link } from "react-router-dom"
import { catalog } from "../data/catalog"
import Breadcrumb from "../components/Breadcrumb"

const Model = () => {
  const { brandId, modelId } = useParams()

  const brand = catalog.find((b) => b.id === brandId)
  const model = brand?.models.find((m) => m.id === modelId)

  if (!brand || !model) {
    return (
      <section className="py-20">
        <div className="max-w-layout mx-auto px-6 text-white">
          Modelo no encontrado
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
              { label: model.name }
            ]}
          />
        </div>

        {/* Label técnico */}
        <div className="mb-14">
          <p className="text-technicalGreen uppercase tracking-widest text-sm mb-3">
            {model.name}
          </p>

          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Sistemas
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {model.systems.map((system) => (
            <Link
              key={system.id}
              to={`/marca/${brand.id}/modelo/${model.id}/sistema/${system.id}`}
              className="group bg-white/95 rounded-2xl p-10 shadow-lg 
                         hover:shadow-2xl hover:-translate-y-1 
                         hover:border hover:border-technicalGreen/30 
                         transition-all duration-300"
            >
              <h2 className="text-gray-800 font-semibold text-lg tracking-wide">
                {system.name}
              </h2>

              <div className="mt-4 h-[2px] w-8 bg-technicalGreen opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Model
