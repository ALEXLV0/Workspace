async function obtenerPersonaje(id) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      const texto = await respuesta.text().catch(() => "");
      throw new Error(`HTTP ${respuesta.status} ${respuesta.statusText} - ${texto}`);
    }

    const personaje = await respuesta.json();

    console.log("Personaje obtenido:", personaje);
    return personaje;
  } catch (error) {
    console.error("Error al obtener el personaje:", error.message || error);
    return null;
  }
}

obtenerPersonaje(1);

async function obtenerPersonajes() {
    try {
        const url = 'https://rickandmortyapi.com/api/character';

        const respuesta = await fetch(url);
    if (!respuesta.ok) {
      const texto = await respuesta.text().catch(() => "");
      throw new Error(`HTTP ${respuesta.status} ${respuesta.statusText} - ${texto}`);
    }

    const datos = await respuesta.json();

    console.log("Personajes obtenidos:", datos.results);
    return datos.results;
    } catch (error) {
    console.error("Error al obtener los personajes:", error.message || error);
    return [];
    }
}

obtenerPersonajes();

async function SoloNombres(id) {
    try {
        const url = 'https://rickandmortyapi.com/api/character';

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        const nombres = datos.results.map(personaje => personaje.name);
        console.log(nombres);
    } catch (error) {
        console.error("Error al obtener los nombres de los personajes:", error);
    }
}

SoloNombres(1);

async function obtenerPagina(numeroPagina) {
    try {
        const url = `https://rickandmortyapi.com/api/character?page=${numeroPagina}`;

        const respuesta = await fetch(url);
    if (!respuesta.ok) {
      const texto = await respuesta.text().catch(() => "");
      throw new Error(`HTTP ${respuesta.status} ${respuesta.statusText} - ${texto}`);
    }

    const datos = await respuesta.json();

    console.log(`Personajes obtenidos en la página ${numeroPagina}:`, datos.results);
    return datos.results;
    } catch (error) {
    console.error(`Error al obtener los personajes de la página ${numeroPagina}:`, error.message || error);
    return [];
    }
}

obtenerPagina(2);