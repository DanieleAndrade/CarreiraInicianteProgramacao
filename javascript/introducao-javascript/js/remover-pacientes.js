var pacientes = document.querySelector(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dbclick", function (event) {
    event.target.parentNode.remove();
});
/*pacientes.forEach(function (paciente) {
    paciente.addEventListener("dbclick", function () {
        this.remove();
    });
}); */
