import Breadcrumb from "../components/Breadcrumb"

const Contacto = () => {
  return (
    <section className="pt-10 md:pt-14 pb-20">
      <div className="max-w-layout mx-auto px-6">

        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Contacto" }
            ]}
          />
        </div>

        {/* Header técnico */}
        <div className="mb-14">
          <p className="text-technicalGreen uppercase tracking-widest text-sm mb-3">
            Estamos para ayudarte
          </p>

          <h1 className="text-white text-3xl md:text-4xl font-semibold">
            Contacto
          </h1>
        </div>

        {/* Panel técnico oscuro */}
        <div className="border border-white/10 rounded-2xl p-10 backdrop-blur-sm bg-white/5">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-6">

              <div className="pb-4 border-b border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                  WhatsApp
                </p>
                <p className="text-white font-medium">
                  +54 9 11 66555555
                </p>
              </div>

              <div className="pb-4 border-b border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                  Teléfono
                </p>
                <p className="text-white font-medium">
                  (011) 6665544
                </p>
              </div>

              <div className="pb-4 border-b border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                  Email
                </p>
                <p className="text-white font-medium">
                  ventas@agrorep.com
                </p>
              </div>

            </div>

            <div className="space-y-6">

              <div className="pb-4 border-b border-white/10">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                  Dirección
                </p>
                <p className="text-white font-medium">
                  General Belgrano, Buenos Aires
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                  Horario
                </p>
                <p className="text-white font-medium">
                  Lunes a Viernes 8:00 – 18:00
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    <div className="mt-20">
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-technicalGreen uppercase tracking-widest text-sm mb-3">
          Ubicación
        </p>

        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-10 leading-snug">
          Estamos en General Belgrano, Buenos Aires
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51796.40619981401!2d-58.4936359!3d-35.7686111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9597f11ea29beac7%3A0xb19bea23651398c0!2sGral.%20Belgrano%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sie!4v1770391740063!5m2!1ses-419!2sie"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>

    </section>
  )

}

export default Contacto
