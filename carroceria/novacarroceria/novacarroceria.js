function gerarCarroceria() {
    const carroceria = {
        carroceria: textoCarroceria.value,
    };

    let erro = false;

    if (carroceria.carroceria.length === 0) {
        inputCarroceriaVasia.style.display = '';
        textoCarroceria.classList.add('erro');
        erro = true;
    } else {
        inputCarroceriaVasia.style.display = 'none';
        textoCarroceria.classList.remove('erro');
    };

    if (erro) return;

    const indexCarrocriaEditar = localStorage.getItem('editarCarroceriaIndex');

    if (indexCarrocriaEditar  !== null) {
        carrocerias[indexCarrocriaEditar] = carroceria;
        localStorage.removeItem('editarCarroceriaIndex')
    } else {
        carrocerias.push(carroceria);
    };

    salvarCarroceria();

    location.href= '/carroceria/carroceria.html';
};

btnSalvarCarroceria.addEventListener('click', () => {
    gerarCarroceria();
});

document.addEventListener('keypress', function(eventGerarCarroceria){
    if (eventGerarCarroceria.key === 'Enter') {
        gerarCarroceria();
    };
});

document.addEventListener('DOMContentLoaded', () => {
    const indexCarrocria = localStorage.getItem('editarCarroceriaIndex');

    if (indexCarrocria !== null) {
        const carroceria = carrocerias[indexCarrocria];

        document.querySelector('#textoCarroceria').value = carroceria.carroceria;
    };
});

btnCancelarCarroceria.addEventListener('click', () => {
    const indexCarrocria = localStorage.getItem('editarCarroceriaIndex');

    if (indexCarrocria) {
        localStorage.removeItem('editarCarroceriaIndex');
    };

    location.href= '/carroceria/carroceria.html';
});
