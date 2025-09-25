// -------------------------------------------
// Generador de Citas Motivacionales + Reloj
// -------------------------------------------

// Declaramos un arreglo (array) con varias frases motivacionales
// Cada posición del arreglo contiene una cita en forma de texto (string)
const citas = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Nunca es tarde para aprender algo nuevo.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La programación no se aprende en un día, se construye con paciencia.",
  "No te rindas, el inicio siempre es lo más difícil.",
  "Cada error es una oportunidad para mejorar.",
  "El conocimiento es poder, pero la práctica lo transforma en sabiduría."
];

// -------------------------------------------
// FUNCIÓN: generarCita()
// -------------------------------------------
// - Selecciona una cita aleatoria del arreglo "citas".
// - Muestra esa cita en el elemento HTML con id="quote".
function generarCita() {
  // Math.random() genera un número decimal entre 0 y 1
  // Lo multiplicamos por el número total de citas disponibles → citas.length
  // Math.floor() redondea hacia abajo el número para que sea un índice válido del array
  const indice = Math.floor(Math.random() * citas.length);

  // document.getElementById("quote") → selecciona el párrafo con id="quote"
  // .innerText = citas[indice] → cambia el contenido del párrafo por la cita elegida
  document.getElementById("quote").innerText = citas[indice];
}

// -------------------------------------------
// FUNCIÓN: mostrarFechaHora()
// -------------------------------------------
// - Obtiene la fecha y hora actual del sistema.
// - La convierte a un formato legible en español.
// - Inserta el valor dentro del elemento con id="datetime".
// - Se actualiza constantemente cada segundo (gracias a setInterval).
function mostrarFechaHora() {
  // Creamos un objeto Date con la fecha y hora actuales
  const ahora = new Date();

  // Definimos opciones para mostrar la fecha/hora en un formato detallado
  // weekday → día de la semana (lunes, martes, etc.)
  // year → año en 4 dígitos
  // month → nombre del mes (enero, febrero, etc.)
  // day → día del mes en número
  // hour, minute, second → hora en formato 2 dígitos (ejemplo: 09:05:03)
  const opciones = { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit" 
  };

  // toLocaleDateString("es-ES", opciones) convierte la fecha a texto en español
  const fechaHora = ahora.toLocaleDateString("es-ES", opciones);

  // Insertamos el texto en el párrafo con id="datetime"
  document.getElementById("datetime").innerText = fechaHora;
}

// -------------------------------------------
// ACTUALIZACIÓN AUTOMÁTICA DEL RELOJ
// -------------------------------------------

// Llamamos a mostrarFechaHora() cada 1000 milisegundos (1 segundo)
// Esto asegura que la hora se actualice en tiempo real
setInterval(mostrarFechaHora, 1000);

// Llamamos a la función una vez al inicio para que la hora se muestre
// inmediatamente al cargar la página (sin esperar al primer intervalo)
mostrarFechaHora();
