const areaConteudo = document.querySelector('.area-conteudo');

function mostrarCarroceria(carroceria, index) {
    let htmlCarroceria = `
        <div class="conteudo" onclick="carrocariaAtiva(this)" data-index='${index}'>${carroceria?.carroceria}</div>
    `;

    let divConteudo = document.createElement('div');
    divConteudo.classList.add('div-conteudo');

    divConteudo.innerHTML = htmlCarroceria;

    return divConteudo;
};

carrocerias.forEach((carroceria, index) => {
    if (!carroceria) return;

    areaConteudo.append(mostrarCarroceria(carroceria, index));
});

function carrocariaAtiva(elemento) {
    const carrocariaSelecionada = elemento.classList.contains('conteudo-ativo');

    const carrocariaAtiva = document.querySelectorAll('.conteudo-ativo');

    if (carrocariaSelecionada) {
        elemento.classList.remove('conteudo-ativo');
        btnEditarCarroceria.classList.remove('btn-aditar-ativo');
        btnExcluirCarroceria.classList.remove('btn-excluir-excluir');
        // console.log('1')
    } else {
        if (carrocariaAtiva) {
            document.querySelectorAll('.conteudo-ativo').forEach(classAtiva => {
                classAtiva.classList.remove('conteudo-ativo');
                // console.log('3')
            });

            // console.log('2')
            elemento.classList.add('conteudo-ativo');
            btnEditarCarroceria.classList.add('btn-aditar-ativo');
            btnExcluirCarroceria.classList.add('btn-excluir-excluir');    
        };
    };    
};

btnExcluirCarroceria.addEventListener('click', () => {
    const carrocariaAtiva = '.conteudo-ativo';

    document.querySelectorAll(carrocariaAtiva).forEach(excluirCarroceri => {
        const indexCarrocria = excluirCarroceri.getAttribute('data-index');

        delete carrocerias[indexCarrocria];
        excluirCarroceri.remove();

        salvarCarroceria();
    });
});

btnEditarCarroceria.addEventListener('click', () => {
    const carrocariaAtiva = document.querySelector('.conteudo-ativo');

    if (carrocariaAtiva) {
        const indexCarrocria = carrocariaAtiva.getAttribute('data-index');

        localStorage.setItem('editarCarroceriaIndex', indexCarrocria);

        location.href= '/carroceria/novacarroceria/novacarroceria.html';
    };
});
