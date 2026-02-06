import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="py-6">
      <div className="max-w-layout mx-auto px-6 flex justify-between items-center">

        <Link to="/" className="text-white text-xl font-semibold">
          AGRO<span className="text-technicalGreen">REP</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/nosotros" className="text-gray-300 hover:text-white">Nosotros</Link>
          <Link to="/stock" className="text-gray-300 hover:text-white">Stock</Link>
          <Link
            to="/contacto"
            className="bg-technicalGreen text-white px-4 py-2 rounded-lg"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 px-6 flex flex-col gap-4">
          <Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/stock" onClick={() => setOpen(false)}>Stock</Link>
          <Link to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  )
}

export default Header
