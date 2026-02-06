import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      ></div>

      {/* Overlay oscuro con degradado lateral + inferior */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f1720]"></div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-layout px-6 mx-auto">

        <div className="max-w-3xl">

          {/* Label técnico */}
          <p className="text-technicalGreen uppercase tracking-widest text-sm mb-6">
            Catálogo técnico especializado
          </p>

          {/* Título principal */}
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-[1.05]">
            Repuestos de maquinaria agrícola
          </h1>

          {/* Subtítulo */}
          <p className="text-white/90 text-lg md:text-xl mt-6 leading-relaxed max-w-2xl">
            Soluciones confiables en repuestos alternativos para maquinaria agrícola.
            Busque por marca, modelo y sistema y consulte disponibilidad.
          </p>

          {/* Botón */}
          <Link
            to="/stock"
            className="inline-block mt-10 bg-technicalGreen text-white px-8 py-4 rounded-2xl font-medium shadow-lg 
                       hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Explorar catálogo
          </Link>

        </div>
      </div>


    </section>
  )
}

export default Hero
