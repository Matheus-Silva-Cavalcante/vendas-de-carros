// const sectionNomeMarcas = document.querySelector('.nome-marca');
// const sectionNomeMotorizacao = document.querySelector('.nome-motor');
// const sectionNomeCarrocaria = document.querySelector('.nome-carrocaria');

function gerarModelo() {
    const modelo = {
        modelo: nomeModelo.value,
        marca: nomeMarcas.value,
        motorizacao: nomeMotorizacao.value,
        carroceria: nomeCarroceria.value,
        portas: numeroPorta.value,
    };

    let erro = false;

    if (modelo.modelo.length === 0) {
        nomeModelo.classList.add('erro');
        inputModeloVasia.style.display = "";
        erro = true;
    } else {
        nomeModelo.classList.remove('erro');
        inputModeloVasia.style.display = "none";
    };

    if (modelo.portas.length === 0) {
        numeroPorta.classList.add('erro');
        inputPotaloVasia.style.display = "";
        erro = true;
    } else {
        numeroPorta.classList.remove('erro');
        inputPotaloVasia.style.display = "none";
    }

    if (erro) return;

    const indexEditarModelo = localStorage.getItem('indexEditarModelo');

    if (indexEditarModelo !== null) {
        modelos[indexEditarModelo] = modelo;
        localStorage.removeItem('indexEditarModelo');
    } else {
        modelos.push(modelo);
    };

    salvarModelo();

    location.href= '/modelos/modelos.html';
};

btnSalvarModelo.addEventListener('click', () => {
    gerarModelo();
});

document.addEventListener('keypress', function(eventGerarModelo) {
    if (eventGerarModelo.key === 'Enter') {
        gerarModelo();
    };
});

//---marca do carro----->

function gerarOptionMarca(marca, index) {
    const optionMarca = document.createElement('option');
    optionMarca.setAttribute('valor-marca', index);

    optionMarca.innerHTML = `
    ${marca?.marca} 
    `;

    return optionMarca;
};

marcas.forEach((marca, index) => {
    if (!marca) return;

    nomeMarcas.append(gerarOptionMarca(marca, index));
});

//---motorizacao---->

function gerarOptionMotorizacao(motor, index) {
    const optionMotorizacao = document.createElement('option');
    optionMotorizacao.setAttribute('valor-motorizacao', index);

    optionMotorizacao.innerHTML = `
        ${motor?.motor}
    `;

    return optionMotorizacao;
};

motores.forEach((motor, index) => {
    if (!motor) return;

    nomeMotorizacao.append(gerarOptionMotorizacao(motor, index));
});

//---tipo de carrocaria----->

function gerarOptionCarroceria(carroceria, index) {
    const optionCarroceria = document.createElement('option');
    optionCarroceria.setAttribute('valor-carroceria', index);

    optionCarroceria.innerHTML = `
        ${carroceria?.carroceria}
    `;

    return optionCarroceria;
};

carrocerias.forEach((carroceria, index) => {
    if (!carroceria) return;

    nomeCarroceria.append(gerarOptionCarroceria(carroceria, index));
});

//----- editar modelo -------

document.addEventListener('DOMContentLoaded', () => {
    const indexModelo = localStorage.getItem('indexEditarModelo');

    if (indexModelo !== null) {
        const modelo = modelos[indexModelo];
        console.log(modelo)

        document.querySelector('#nomeModelo').value = modelo.modelo;

        document.querySelector('#nomeMarcas').value = modelo.marca;

        document.querySelector('#nomeMotorizacao').value = modelo.motorizacao;

        document.querySelector('#nomeCarroceria').value = modelo.carroceria;

        document.querySelector('#numeroPorta').value = modelo.portas;
    };
});

btnCancelarModelo.addEventListener('click', () => {
    const indexModelo = localStorage.getItem('indexEditarModelo');

    if (indexModelo) {
        localStorage.removeItem('indexEditarModelo');
    };

    location.href= '/modelos/modelos.html'
});
