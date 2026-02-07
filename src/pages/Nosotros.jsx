import Breadcrumb from "../components/Breadcrumb"

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center pt-12 pb-20">

      <div className="w-full max-w-layout px-6">

        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Nosotros" }
          ]}
        />
      <div className="relative w-full h-[280px] md:h-[420px] mb-16 overflow-hidden">
      <img
        src="/images/cosechadora.jpg"
        alt="Cosechadora trabajando en el campo"
        className="w-full h-full object-cover"
      />
      </div>
      <div className="mb-12">
  <p className="text-technicalGreen uppercase tracking-widest text-sm mb-3">
    Nuestra historia
  </p>

  <h1 className="text-white text-3xl md:text-4xl font-semibold">
    Experiencia real en maquinaria agrícola
  </h1>
</div>

        <div className="max-w-4xl space-y-8 text-gray-300 leading-relaxed">

          <p>
            Nuestro proyecto nace a partir de años de experiencia directa 
            trabajando con cosechadoras y maquinaria agrícola. Conocemos el 
            funcionamiento real de cada equipo y entendemos la importancia 
            de contar con repuestos confiables en el momento indicado.
          </p>

          <p>
            Decidimos transformar esa experiencia en una empresa dedicada 
            a la comercialización de repuestos, combinando conocimiento 
            técnico con atención personalizada. No solo vendemos piezas: 
            asesoramos y acompañamos cada necesidad.
          </p>

          <p>
            Trabajamos con compromiso, responsabilidad y trato directo, 
            priorizando la disponibilidad y la respuesta rápida para que 
            el trabajo en el campo no se detenga.
          </p>

        </div>

        {/* Bloques de valores */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-technicalGreen/30 transition">
            <h3 className="text-white font-semibold mb-3">
              Experiencia en Campo
            </h3>
            <p className="text-gray-400 text-sm">
              Conocimiento práctico y real del funcionamiento de cosechadoras.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-technicalGreen/30 transition">
            <h3 className="text-white font-semibold mb-3">
              Asesoramiento Técnico
            </h3>
            <p className="text-gray-400 text-sm">
              Orientación personalizada para elegir el repuesto correcto.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-technicalGreen/30 transition">
            <h3 className="text-white font-semibold mb-3">
              Compromiso y Cercanía
            </h3>
            <p className="text-gray-400 text-sm">
              Atención directa, rápida y enfocada en cada cliente.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Nosotros
