const urlParams = new URLSearchParams(window.location.search);
const formData = {};
const chosenSkills = {};
const experiences = {};

urlParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

urlParams.forEach((value, key) => {
  formData[key] = value; 
});

function start() {
  let address =
    formData.street +
    "\n" +
    formData.city +
    ", " +
    formData.state +
    ", " +
    formData.cep +
    "\n" +
    "(" +
    formData.neighborhood +
    ")";

  let education =
    formData.college +
    "\n" +
    formData.startDate +
    " ~ " +
    formData.endDate +
    "\n" +
    formData.course;

  let skills = "";
  const chosenSkills = JSON.parse(urlParams.get("chosenSkills"));
  chosenSkills.forEach((skill) => {
    skills += skill.name + ";\n";
  });

  let experiences = "";
  const readExperiences = JSON.parse(urlParams.get("experiences"));
  readExperiences.forEach((experience) => {
    experiences +=  experience.experienceName + "\n" + 
                    experience.experiencePosition + "\n" +
                    experience.experienceStartDate + " - " + experience.experienceEndDate + "\n" +
                    experience.experienceDescription + "\n \n";
  });

  let phone = "(" + formData.tel.slice(0, 2) + ") " + formData.tel.slice(2, 11);

  document.getElementById("name").innerText = formData.userName;
  document.getElementById("birth-date").innerText = formData.birthDate;
  document.getElementById("phone").innerText = phone;
  document.getElementById("email").innerText = formData.email;
  document.getElementById("address").innerText = address;
  document.getElementById("goal").innerText = formData.objetivo;
  document.getElementById("education").innerText = education;
  document.getElementById("skills").innerText = skills;
  document.getElementById("experiences").innerText = experiences;
}

const btnGenerate = document.querySelector("#btnGenerate");

btnGenerate.addEventListener("click", () => {
  const content = document.querySelector("#contentToPrint");

  const options = {
    margin: 1,
    filename: "Currículo.pdf",
  };
  

  html2pdf().set(options).from(content).save();
});