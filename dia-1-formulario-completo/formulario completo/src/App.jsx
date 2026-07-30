import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [experiencia, setExperiencia] = useState(5);
  const [acepta, setAcepta] = useState(false);
  const [lenguajes, setLenguajes] = useState([]);
  const [modalidad, setModalidad] = useState("");
  const [pais, setPais] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [foto, setFoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [color, setColor] = useState("#0000ff");

  const [datos, setDatos] = useState(null);

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  const edadValida = edad > 0;

  const manejarLenguajes = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setLenguajes([...lenguajes, value]);
    } else {
      setLenguajes(lenguajes.filter((l) => l !== value));
    }
  };

  const manejarFoto = (e) => {
    const archivo = e.target.files[0];
    setFoto(archivo);

    if (archivo) {
      setPreview(URL.createObjectURL(archivo));
    }
  };

  const enviar = (e) => {
    e.preventDefault();

    setDatos({
      nombre,
      correo,
      password,
      edad,
      fecha,
      experiencia,
      acepta,
      lenguajes,
      modalidad,
      pais,
      comentarios,
      color,
      foto: foto ? foto.name : "Sin foto",
    });
  };

  return (
    <div className="contenedor">
      <h1>Registro de Estudiante</h1>

      <form onSubmit={enviar}>

        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Correo</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        {!emailValido && correo && (
          <p style={{ color: "red" }}>Correo inválido</p>
        )}

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        {!edadValida && edad && (
          <p style={{ color: "red" }}>La edad debe ser mayor que 0</p>
        )}

        <label>Fecha de nacimiento</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        <label>
          Nivel de experiencia: <strong>{experiencia}</strong>
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={experiencia}
          onChange={(e) => setExperiencia(e.target.value)}
        />

        <h3>Lenguajes</h3>

        <label>
          <input
            type="checkbox"
            value="JavaScript"
            onChange={manejarLenguajes}
          />
          JavaScript
        </label>

        <label>
          <input
            type="checkbox"
            value="Python"
            onChange={manejarLenguajes}
          />
          Python
        </label>

        <label>
          <input
            type="checkbox"
            value="Java"
            onChange={manejarLenguajes}
          />
          Java
        </label>

        <h3>Modalidad</h3>

        <label>
          <input
            type="radio"
            name="modalidad"
            value="Presencial"
            onChange={(e) => setModalidad(e.target.value)}
          />
          Presencial
        </label>

        <label>
          <input
            type="radio"
            name="modalidad"
            value="Virtual"
            onChange={(e) => setModalidad(e.target.value)}
          />
          Virtual
        </label>

        <label>País</label>
        <select value={pais} onChange={(e) => setPais(e.target.value)}>
          <option value="">Seleccione</option>
          <option>Colombia</option>
          <option>México</option>
          <option>Argentina</option>
          <option>Venezuela</option>
          <option>Perú</option>
        </select>

        <label>Comentarios</label>
        <textarea
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />

        <label>Foto de perfil</label>
        <input type="file" onChange={manejarFoto} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            width="150"
            style={{ marginTop: "10px" }}
          />
        )}

        <label>Color favorito</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <br /><br />

        <label>
          <input
            type="checkbox"
            checked={acepta}
            onChange={(e) => setAcepta(e.target.checked)}
          />
          Acepto los términos y condiciones
        </label>

        <br /><br />

        <button
          type="submit"
          disabled={!acepta || !emailValido || !edadValida}
        >
          Enviar
        </button>

      </form>

      {datos && (
        <div style={{ marginTop: "30px" }}>
          <h2>Resumen</h2>

          <p><b>Nombre:</b> {datos.nombre}</p>
          <p><b>Correo:</b> {datos.correo}</p>
          <p><b>Contraseña:</b> {datos.password}</p>
          <p><b>Edad:</b> {datos.edad}</p>
          <p><b>Fecha:</b> {datos.fecha}</p>
          <p><b>Experiencia:</b> {datos.experiencia}</p>
          <p><b>Lenguajes:</b> {datos.lenguajes.join(", ")}</p>
          <p><b>Modalidad:</b> {datos.modalidad}</p>
          <p><b>País:</b> {datos.pais}</p>
          <p><b>Comentarios:</b> {datos.comentarios}</p>
          <p><b>Color favorito:</b> {datos.color}</p>
          <p><b>Foto:</b> {datos.foto}</p>
        </div>
      )}
    </div>
  );
}

export default App;