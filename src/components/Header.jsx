import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


const Header = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
      const handleScroll = () => {
        setOpen(false)
      }
  
      window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])

  

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#2B2F36]/80 border-b border-white/5">
      <div className="max-w-layout mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white text-xl font-semibold tracking-wide">
          AGRO<span className="text-technicalGreen">REP</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/nosotros" className="text-gray-300 hover:text-white transition">
            Nosotros
          </Link>

          <Link to="/stock" className="text-gray-300 hover:text-white transition">
            Disponibilidad
          </Link>

          <Link
            to="/contacto"
            className="bg-technicalGreen text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:scale-[1.03] transition"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div className="md:hidden mt-4 border-t border-white/10 bg-[#2B2F36]/95 backdrop-blur-md">
    <div className="px-6 py-8 flex flex-col gap-6">

      <Link
        to="/nosotros"
        onClick={() => setOpen(false)}
        className="text-gray-300 text-lg hover:text-white transition"
      >
        Nosotros
      </Link>

      <Link
        to="/stock"
        onClick={() => setOpen(false)}
        className="text-gray-300 text-lg hover:text-white transition"
      >
        Disponibilidad
      </Link>

      <Link
        to="/contacto"
        onClick={() => setOpen(false)}
        className="bg-technicalGreen text-white py-3 rounded-xl text-center font-medium shadow-md hover:scale-[1.02] transition"
      >
        Contacto
      </Link>

    </div>
  </div>
)}

    </header>
  )
}

export default Header
