var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //criar a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPacientes(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
}

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-paciente");

    tabela.appendChild(pacienteTr);

    form.reset();

    console.log(form.altura.value);
    console.log(form.peso.value);
});

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
    } else {
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
    } else {
        erros.push("Altura é inválida");
    }

    return erros;
}