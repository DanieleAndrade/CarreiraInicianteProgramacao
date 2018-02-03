var pacientes = document.querySelector(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dbclick", function (event) {
    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});
/*pacientes.forEach(function (paciente) {
    paciente.addEventListener("dbclick", function () {
        this.remove();
    });
}); */
