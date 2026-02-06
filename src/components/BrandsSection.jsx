import { Link } from "react-router-dom"

const brands = [
  { name: "John Deere", id: "john-deere" },
  { name: "New Holland", id: "new-holland" },
  { name: "Franco Fabril", id: "franco-fabril" },
  { name: "Massey Ferguson", id: "massey-ferguson" },
]

const BrandsSection = () => {
  return (
    <section className="py-14 md:py-24">
      <div className="max-w-layout mx-auto px-6">

        {/* Bloque de título */}
        <div className="mb-10 md:mb-16 text-center max-w-2xl mx-auto">
          <p className="text-technicalGreen uppercase tracking-widest text-xs md:text-sm mb-2">
            Líneas compatibles
          </p>

          <h2 className="text-white text-xl md:text-3xl font-semibold leading-snug">
            Soluciones para las marcas más utilizadas en el campo
          </h2>
        </div>

        {/* Grid de marcas */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {brands.map((brand) => (
            <Link
              to={`/marca/${brand.id}`}
              key={brand.id}
              className="group bg-white/95 rounded-2xl 
                         p-6 md:p-12 
                         shadow-md md:shadow-lg
                         hover:shadow-2xl hover:-translate-y-1 
                         transition-all duration-300 
                         text-center"
            >
              <h3 className="text-gray-800 text-base md:text-xl font-semibold">
                {brand.name}
              </h3>

              <div className="mt-3 h-[2px] w-6 md:w-8 bg-technicalGreen mx-auto 
                              opacity-0 group-hover:opacity-100 
                              transition-all duration-300"></div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BrandsSection
