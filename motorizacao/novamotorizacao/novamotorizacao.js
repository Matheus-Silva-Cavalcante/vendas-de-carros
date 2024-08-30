function gerarMotorizacao() {
    const motor = {
        motor: textoMotorizacao.value,
    };

    let erro = false;

    if (motor.motor.length === 0) {
        textoMotorizacao.classList.add('erro');
        inputMotorizacaoVasia.style.display= '';
        erro = true
    } else {
        textoMotorizacao.classList.remove('erro');
        inputMotorizacaoVasia.style.display = 'none';
    };

    if (erro) return;

    const editarMotorizacaoIndex = localStorage.getItem('editarMotorizacaoIndex');

    if (editarMotorizacaoIndex !== null) {
        motores[editarMotorizacaoIndex] = motor;
        localStorage.removeItem('editarMotorizacaoIndex');
    } else {        
        motores.push(motor);
    }

    salvarMotorizacao();

    location.href= "/motorizacao/motorizacao.htm";
};

btnSalvarMotorizacao.addEventListener('click', () => {
    gerarMotorizacao();
});

document.addEventListener('keypress', function(eventGerarMotorizacao) {
    if (eventGerarMotorizacao.key === 'Enter') {
        gerarMotorizacao();
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const indexMotorizacao = localStorage.getItem('editarMotorizacaoIndex');

    if (indexMotorizacao !== null) {
        const motor = motores[indexMotorizacao];

        document.querySelector('#textoMotorizacao').value = motor.motor;
    };
});

btnCancelarMotorizacao.addEventListener('click', () => {
    const indexMotorizacao = localStorage.getItem('editarMotorizacaoIndex');

    if (indexMotorizacao) {
        localStorage.removeItem('editarMotorizacaoIndex');
    };

    location.href= '/motorizacao/motorizacao.htm';
});
