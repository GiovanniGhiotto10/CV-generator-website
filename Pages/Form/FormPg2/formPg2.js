const urlParams = new URLSearchParams(window.location.search);
const formData = {};

urlParams.forEach((value, key) => {
  formData[key] = value; 
});

urlParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

function searchCep() {
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      formData.neighborhood = jsonData.bairro;
      formData.state = jsonData.uf;
      formData.city = jsonData.localidade;
      formData.street = jsonData.logradouro;

      document.getElementById("neighborhood").value = formData.neighborhood;
      document.getElementById("state").value = formData.state;
      document.getElementById("city").value = formData.city;
      document.getElementById("street").value = formData.street;
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar o CEP:" + error);
    });
}

const form = document.getElementById("usuarioForms");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    const formDataFromForm = Object.fromEntries(new FormData(form));
    Object.assign(formData, formDataFromForm);

    const queryParameters = new URLSearchParams(formData).toString();
    window.location.href = `../formPg3/formPg3.html?${queryParameters}`;
  }
});