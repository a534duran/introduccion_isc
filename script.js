// Declaramos un arreglo (array) con varias frases motivacionales
const citas = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Nunca es tarde para aprender algo nuevo.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La programación no se aprende en un día, se construye con paciencia.",
  "No te rindas, el inicio siempre es lo más difícil.",
  "Cada error es una oportunidad para mejorar.",
  "El conocimiento es poder, pero la práctica lo transforma en sabiduría."
];

// Definimos la función que mostrará una cita aleatoria
function generarCita() {
  const indice = Math.floor(Math.random() * citas.length);
  document.getElementById("quote").innerText = citas[indice];
}

/* 
 Nueva función: mostrarFechaHora()
 -------------------------------------------------
 - Obtiene la fecha y hora actual del sistema.
 - Formatea el resultado en español con día, mes, año y hora exacta.
 - Inserta el valor en el elemento con id="datetime".
 - Se actualiza automáticamente cada segundo.
*/
function mostrarFechaHora() {
  const ahora = new Date();
  const opciones = { 
    weekday: "long", year: "numeric", month: "long", day: "numeric", 
    hour: "2-digit", minute: "2-digit", second: "2-digit" 
  };
  const fechaHora = ahora.toLocaleDateString("es-ES", opciones);
  document.getElementById("datetime").innerText = fechaHora;
}

// Ejecutamos la función cada segundo para que el reloj esté en vivo
setInterval(mostrarFechaHora, 1000);

// Llamamos a la función inmediatamente para que muestre la hora al cargar la página
mostrarFechaHora();
