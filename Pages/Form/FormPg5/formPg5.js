const urlParams = new URLSearchParams(window.location.search);
const formData = {};

urlParams.forEach((value, key) => {
  formData[key] = value; 
});

urlParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

chosenSkills = [];

const skills = [
  {
    name: "Comunicação eficaz",
    detail:
      "Expressar ideias de forma clara e concisa, tanto verbalmente quanto por escrito, adaptando-se ao público e aos colegas de trabalho.",
  },
  {
    name: "Trabalho em equipe",
    detail:
      "Colaborar de forma produtiva com colegas, compartilhando responsabilidades e respeitando as opiniões dos outros para alcançar metas comuns.",
  },
  {
    name: "Resolução de problemas",
    detail:
      "Identificar e abordar problemas de forma eficaz, utilizando a lógica e a criatividade para encontrar soluções viáveis e eficientes.",
  },
  {
    name: "Pensamento crítico",
    detail:
      "Analisar informações de forma objetiva e tomar decisões informadas, considerando diferentes perspectivas e pontos de vista.",
  },
  {
    name: "Liderança",
    detail:
      "Capacidade de orientar e motivar os outros, demonstrando habilidades de delegação, empatia e visão estratégica para alcançar os objetivos da equipe.",
  },
  {
    name: "Adaptabilidade",
    detail:
      "Ser flexível e ágil diante de mudanças e desafios, demonstrando resiliência e a capacidade de se ajustar a novas circunstâncias.",
  },
  {
    name: "Gerenciamento do tempo",
    detail:
      "Priorizar tarefas, cumprir prazos e manter um equilíbrio entre eficiência e qualidade, demonstrando capacidade de gerenciar múltiplas responsabilidades.",
  },
  {
    name: "Empatia",
    detail:
      "Demonstrando sensibilidade às necessidades e emoções dos outros, promovendo um ambiente de trabalho inclusivo e solidário.",
  },
  {
    name: "Pensamento criativo",
    detail:
      "Desenvolver e implementar ideias inovadoras e soluções criativas para desafios complexos, demonstrando originalidade e perspectivas únicas.",
  },
  {
    name: "Resolução de conflitos",
    detail:
      "Habilidade de identificar, resolver e mediar conflitos de maneira construtiva, buscando soluções mutuamente benéficas para todas as partes envolvidas.",
  },
];

function start() {
  const selectElement = document.getElementById("skills");
  for (let i = 0; i < skills.length; i++) {
    const option = document.createElement("option");
    option.value = skills[i].name;
    option.text = skills[i].name;
    option.title = skills[i].detail;
    selectElement.appendChild(option);
  }
}

function addSkill() {
  const selectElement = document.getElementById("skills");
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex !== -1) {
    const selectedSkillName = selectElement.options[selectedIndex].value;
    const selectedSkill = getSkillByName(selectedSkillName);

    console.log(selectedSkill);

    chosenSkills.push(selectedSkill);
    selectElement.remove(selectedIndex);
    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    const name = document.createElement("td");
    name.innerText = selectedSkill.name;
    tr.appendChild(name);

    const description = document.createElement("td");
    description.innerText = selectedSkill.detail;
    tr.appendChild(description);

    const item = document.createElement("td");
    const button = document.createElement("button");
    const icon = document.createElement("img");

    icon.src = "../../../Icons/delete_FILL0_wght400_GRAD0_opsz24.png";
    icon.alt = "Icone de lixeira";

    button.appendChild(icon);
    button.type = "button";
    button.className = "btn-delete";
    button.addEventListener("click", removeSkill, tr, chosenSkills.length - 1);

    item.appendChild(button);
    tr.appendChild(item);
  }
}

function removeSkill(tableRow, index) {
  chosenSkills.splice(index);

  const tbody = document.getElementById("tbody");
  tbody.deleteRow(tableRow.rowIndex);
}

function getSkillByName(name) {
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].name === name) {
      return skills[i];
    }
  }
}

const form = document.getElementById("usuarioForms");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    formData.chosenSkills = JSON.stringify(chosenSkills);
    const formDataFromForm = Object.fromEntries(new FormData(form));
    Object.assign(formData, formDataFromForm);

    const queryParameters = new URLSearchParams(formData).toString();
    window.location.href = `../result/result.html?${queryParameters}`;
  }
});