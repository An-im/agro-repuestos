import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#23272F]">
      <div className="max-w-layout mx-auto px-6 py-16">

        {/* Grid principal */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Marca */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              AGRO<span className="text-technicalGreen">REP</span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Repuestos alternativos para maquinaria agrícola.
              Asesoramiento técnico especializado y atención directa.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/nosotros" className="hover:text-white transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/stock" className="hover:text-white transition">
                  Disponibilidad
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-wider mb-4">
              Ubicación
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              General Belgrano,
              <br />
              Provincia de Buenos Aires
            </p>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-16 pt-6 border-t border-white/5 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} AgroRep. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}

export default Footer
