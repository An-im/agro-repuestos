const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 py-12">
      <div className="max-w-layout mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-white font-semibold mb-4">
            AGRO<span className="text-technicalGreen">REP</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Repuestos alternativos para maquinaria agrícola.
            Asesoramiento técnico especializado.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-4">Navegación</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Nosotros</li>
            <li>Stock</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-4">Ubicación</h4>
          <p className="text-gray-400 text-sm">
            General Belgrano, Buenos Aires
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} AgroRep. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
