const urlParams = new URLSearchParams(window.location.search);
const formData = {};

urlParams.forEach((value, key) => {
  formData[key] = value; 
});

urlParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

const form = document.getElementById("usuarioForms");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    const formDataFromForm = Object.fromEntries(new FormData(form));
    Object.assign(formData, formDataFromForm);

    const queryParameters = new URLSearchParams(formData).toString();
    window.location.href = `../formPg4/formPg4.html?${queryParameters}`;
  }
});