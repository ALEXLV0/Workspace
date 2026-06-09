const razones = [
  {
    icono: '🏆',
    titulo: 'Experiencia certificada',
    descripcion: 'Más de 15 años en el sector eléctrico.',
  },
  {
    icono: '🛡️',
    titulo: 'Seguridad garantizada',
    descripcion: 'Cumplimos normas RETIE y estándares de calidad.',
  },
  {
    icono: '⚡',
    titulo: 'Respuesta rápida',
    descripcion: 'Atención eficiente para emergencias y proyectos.',
  },
  {
    icono: '😊',
    titulo: 'Clientes satisfechos',
    descripcion: 'Compromiso con el mejor servicio.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="VoltTec"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            <p className="text-muted">
              Somos una empresa especializada en instalaciones y mantenimiento
              eléctrico para hogares y empresas.
            </p>

            <p className="text-muted mb-4">
              Nuestro equipo trabaja con responsabilidad, calidad y cumplimiento,
              ofreciendo soluciones seguras y duraderas.
            </p>

            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li key={index} className="mb-3">
                  <strong>{razon.icono} {razon.titulo}</strong>
                  <p className="text-muted mb-0">{razon.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;