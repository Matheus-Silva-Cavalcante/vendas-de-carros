const areaConteudo = document.querySelector('.area-conteudo');

function mostrarMaca(marca, index) {
    let htmlMarca = `
        <div class="conteudo" onclick="marcaAtiva(this)" data-index="${index}">${marca?.marca}</div>
    `;

    let divConteudo = document.createElement('div');
    divConteudo.classList.add('div-conteudo');

    divConteudo.innerHTML = htmlMarca;

    return divConteudo;
};


marcas?.forEach((marca, index) => {
    if (!marca) return;

    areaConteudo.append(mostrarMaca(marca, index));
});

function marcaAtiva(elemento) {
    const marcaSelecionada = elemento.classList.contains('conteudo-ativo');

    const marcaAtiva = document.querySelectorAll('.conteudo-ativo');    

    if (marcaSelecionada) {
        elemento.classList.remove('conteudo-ativo');  
        btnEditar.classList.remove('btn-aditar-ativo');
        btnExcluir.classList.remove('btn-excluir-excluir');
    } else{
        if (marcaAtiva) {
            document.querySelectorAll('.conteudo-ativo').forEach(classAtivo => {
                classAtivo.classList.remove('conteudo-ativo');
            });
            
            elemento.classList.add('conteudo-ativo');
            btnEditar.classList.add('btn-aditar-ativo');
            btnExcluir.classList.add('btn-excluir-excluir');
        };
    };
};

btnExcluir.addEventListener('click', () => {
    const marcaSelecionada = '.conteudo-ativo';
    
    document.querySelectorAll(marcaSelecionada).forEach(excluiMarca => {
        const indexMarca = excluiMarca.getAttribute('data-index');

        delete marcas[indexMarca];
        excluiMarca.remove();

        btnEditar.classList.remove('btn-aditar-ativo');
        btnExcluir.classList.remove('btn-excluir-excluir');

        salvarMarca();
    });
});

btnEditar.addEventListener('click', () => {
    const marcaSelecionada = document.querySelector('.conteudo-ativo');

    if (marcaSelecionada) {
        const indexMarca = marcaSelecionada.getAttribute('data-index');

        localStorage.setItem('editaMarcaIndex', indexMarca);

        location.href = '/marcas/novamarca/novamarca.html';
    };
});
