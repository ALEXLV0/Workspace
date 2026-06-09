const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Instalamos sistemas eléctricos seguros para hogares.',
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales',
    descripcion: 'Soluciones eléctricas para empresas y negocios.',
  },
  {
    icono: '🔧',
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Revisiones periódicas para evitar fallas.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED',
    descripcion: 'Modernización con tecnología eficiente.',
  },
  {
    icono: '📋',
    titulo: 'Tableros eléctricos',
    descripcion: 'Diseño e instalación de tableros certificados.',
  },
  {
    icono: '🔋',
    titulo: 'Plantas eléctricas',
    descripcion: 'Respaldo energético para hogares y empresas.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            Ofrecemos soluciones eléctricas seguras, modernas y confiables.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h1>{servicio.icono}</h1>
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;