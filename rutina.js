// Datos de la rutina embebidos como objeto JavaScript
const datosRutina = {
  1: [
    { grupo: "Piernas", ejercicios: ["Prensa","Sillón de cuadríceps","Sillón de femorales"] },
    { grupo: "Pecho",   ejercicios: ["Banco plano"] },
    { grupo: "Hombros", ejercicios: ["Vuelos laterales"] },
    { grupo: "Espalda", ejercicios: ["Dorsalera al pecho"] },
    { grupo: "Tríceps", ejercicios: ["Soga"] },
    { grupo: "Bíceps",  ejercicios: ["Barra en polea"] },
  ],
  2: [
    { grupo: "Piernas", ejercicios: ["Prensa","Sillón de cuadríceps","Sillón de femorales"] },
    { grupo: "Pecho",   ejercicios: ["Press inclinado con mancuernas"] },
    { grupo: "Espalda", ejercicios: ["Remo con polea"] },
    { grupo: "Hombros", ejercicios: ["Press militar con mancuerna"] },
    { grupo: "Tríceps", ejercicios: ["Francés con polea"] },
    { grupo: "Bíceps",  ejercicios: ["Alternado con mancuernas"] },
  ]
};

function renderRutina(dia) {
  const cont = document.getElementById("rutina");
  cont.innerHTML = ""; // limpio
  datosRutina[dia].forEach(item => {
    // crear tarjeta
    const card = document.createElement("div");
    card.className = "card";
    const h4 = document.createElement("h4");
    h4.textContent = item.grupo;
    const p  = document.createElement("p");
    p.textContent = item.ejercicios.join(", ");
    card.append(h4, p);
    cont.appendChild(card);
  });
}

// al cargar
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("dia_select");
  renderRutina(sel.value);
  sel.addEventListener("change", () => renderRutina(sel.value));
});
