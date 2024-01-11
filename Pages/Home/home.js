function start(){
    document.getElementById("brand").textContent = "CVV";
}

const button = document.getElementById("start-button");

button.addEventListener("click", () => {
    window.location.href = "../Form/formPg1/formPg1.html";
});
  