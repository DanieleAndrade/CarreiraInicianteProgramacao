var pacientes = document.querySelector(".paciente");

pacientes.forEach(function (paciente) {
    paciente.addEventListener("dbclick", function () {
        this.remove();
    });
});