const rutina = {
  1: [
    { grupo: "Calentamiento", ejercicios: [
      "15 minutos aeróbico",
      "Espinales en banco (3x15)",
      "Máquina (3x20)",
      "Paralelas (3x10-12)"
    ]},
    { grupo: "Pectoral", ejercicios: [
      "Chest Press Hammer (3x8-10)",
      "Press en banco plano barra (4x15-12-10-8)",
      "Apertura en banco inclinado con mancuernas (3x10-12)"
    ]},
    { grupo: "Tríceps", ejercicios: [
      "Extensiones en soga (3x15)",
      "Press francés con barra W (3x12)",
      "Concentrado con mancuerna (3x10-12)"
    ]},
    { grupo: "Cardio Final", ejercicios: [
      "15–20 min elíptico o remo"
    ]}
  ],
  2: [
    { grupo: "Calentamiento", ejercicios: [
      "15 minutos aeróbico",
      "Espinales en banco (3x15)",
      "Máquina (3x20)",
      "Paralelas (3x10-12)"
    ]},
    { grupo: "Espalda", ejercicios: [
      "Low row (remo bajo) (4x15)",
      "Lat con barra pronado (4x12)",
      "Pull over con polea (3x12)"
    ]},
    { grupo: "Bíceps", ejercicios: [
      "Curl con polea (4x12)",
      "Curl alternado martillo (3x15)",
      "Banco Scott con barra W (3x10)"
    ]},
    { grupo: "Cardio Final", ejercicios: [
      "15–20 min elíptico o remo"
    ]}
  ],
  3: [
    { grupo: "Calentamiento", ejercicios: [
      "15 minutos aeróbico",
      "Espinales en banco (3x15)",
      "Máquina (3x20)",
      "Paralelas (3x10-12)"
    ]},
    { grupo: "Hombros", ejercicios: [
      "Press con mancuerna (4x12)",
      "Vuelo lateral con mancuerna (4x10-12)"
    ]},
    { grupo: "Piernas", ejercicios: [
      "Prensa 45° (4x10)",
      "Leg curl (femorales) (3 series)",
      "Leg extension (cuádriceps) (3 series)",
      "Gemelos en prensa (4x20)",
      "Sentadilla con barra (4x15-12-10-20)",
      "Peso muerto con barra (4x12)"
    ]},
    { grupo: "Cardio Final", ejercicios: [
      "15–20 min elíptico o remo"
    ]}
  ]
};

function key(dia, grupo, ej) {
  return `rutina_${dia}_${grupo}_${ej}`;
}

function renderRutina(dia) {
  const cont = document.getElementById("rutina");
  cont.innerHTML = "";
  rutina[dia].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    const h4 = document.createElement("h4");
    h4.textContent = item.grupo;
    card.appendChild(h4);
    item.ejercicios.forEach(ej => {
      const k = key(dia, item.grupo, ej);
      const checked = localStorage.getItem(k) === "true";
      const wrapper = document.createElement("div");
      wrapper.className = "ejercicio";
      const chk = document.createElement("input");
      chk.type = "checkbox";
      chk.id = k;
      chk.checked = checked;
      chk.addEventListener("change", () => localStorage.setItem(k, chk.checked));
      const lbl = document.createElement("label");
      lbl.htmlFor = k;
      lbl.textContent = ` ${ej}`;
      wrapper.append(chk, lbl);
      card.appendChild(wrapper);
    });
    cont.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sel = document.getElementById("dia_select");
  renderRutina(sel.value);
  sel.addEventListener("change", () => renderRutina(sel.value));
});
