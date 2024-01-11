const form = document.getElementById("usuarioForms");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    window.location.href = `../formPg2/formPg2.html?${new URLSearchParams(new FormData(form)).toString()}`;
  }
})