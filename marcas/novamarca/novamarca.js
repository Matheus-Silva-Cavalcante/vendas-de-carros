const btnSalvarMarca = document.querySelector('#btnSalvarMarca');
const btnCancelarMarca = document.querySelector('#btnCancelarMarca');

function gerarMarca() {
    const marca = {
        marca: textoMarca.value,
    };

    let erro = false;
    
    if (marca.marca.length === 0) {
        textoMarca.classList.add('erro');
        inputMarcaVasia.style.display = "";
        erro = true;
    } else{
        textoMarca.classList.remove('erro');
        inputMarcaVasia.style.display = 'none';
    };

    if (erro) return;

    const indexMarcaEditar = localStorage.getItem('editaMarcaIndex');

    if (indexMarcaEditar !== null) {
        marcas[indexMarcaEditar] = marca;
        localStorage.removeItem('editaMarcaIndex');
    } else {        
        marcas.push(marca);
    }

    salvarMarca();

    location.href= '/marcas/marcas.html';
};

btnSalvarMarca?.addEventListener('click', () => {
    gerarMarca();
});

document.addEventListener('DOMContentLoaded', () => {
    const indexMarca = localStorage.getItem('editaMarcaIndex');

    if (indexMarca !== null) {
        const marca = marcas[indexMarca];

        document.querySelector('#textoMarca').value = marca.marca;
    };
});

btnCancelarMarca?.addEventListener('click', () => {
    const indexMarca = localStorage.getItem('editaMarcaIndex');

    if (indexMarca) {
        localStorage.removeItem('editaMarcaIndex');
    };

    location.href= '/marcas/marcas.html';
});
