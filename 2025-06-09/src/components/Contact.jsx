function Contact() {
  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Solicite una cotización gratuita y reciba asesoría profesional.
          </p>
        </div>

        <div className="row g-5">

          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>

            <ul className="list-unstyled">
              <li className="mb-3">📍 Calle 10 #43A-15, Medellín</li>
              <li className="mb-3">📞 (300) 123-4567</li>
              <li className="mb-3">📧 info@volttec.com.co</li>
              <li className="mb-3">🕐 Lun–Vie 7am–6pm</li>
            </ul>
          </div>

          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              <div className="row g-3">

                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="servicio" className="form-label">
                    Tipo de servicio
                  </label>
                  <select id="servicio" className="form-select">
                    <option>Instalaciones residenciales</option>
                    <option>Instalaciones comerciales</option>
                    <option>Mantenimiento</option>
                    <option>Iluminación LED</option>
                    <option>Tableros eléctricos</option>
                    <option>Plantas eléctricas</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows="4"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-voltec">
                    Enviar solicitud
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;