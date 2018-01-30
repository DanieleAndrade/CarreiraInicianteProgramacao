var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //criar a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
    }

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-paciente");

    tabela.appendChild(pacienteTr);

    form.reset();

    console.log(form.altura.value);
    console.log(form.peso.value);
});

function obtemPacienteDoFormulario(form){

    var paciente = {

        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }

    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.pesoTd, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.alturaTd, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");

    return td;

}

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso)){
        return true;
    } else {
        return false;
    }
}