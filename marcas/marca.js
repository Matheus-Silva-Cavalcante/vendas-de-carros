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


marcas.forEach((marca, index) => {
    if (!marca) return;

    areaConteudo.append(mostrarMaca(marca, index));
});

function marcaAtiva(elemento) {
    const marcaSelecionada = elemento.classList.contains('conteudo-ativo');

    const marcaAtiva = document.querySelectorAll('.conteudo-ativo');    

    if (marcaSelecionada) {
        elemento.classList.remove('conteudo-ativo');  
        btnEditarMarca.classList.remove('btn-aditar-ativo');
        btnExcluirMarca.classList.remove('btn-excluir-excluir');
        //console.log('3')
    } else{
        if (marcaAtiva) {
            document.querySelectorAll('.conteudo-ativo').forEach(classAtivo => {
                classAtivo.classList.remove('conteudo-ativo');
                //console.log('2')
            });
            
            elemento.classList.add('conteudo-ativo');
            btnEditarMarca.classList.add('btn-aditar-ativo');
            btnExcluirMarca.classList.add('btn-excluir-excluir');
            //console.log('1')
        };
    };
};

btnExcluirMarca.addEventListener('click', () => {
    const marcaSelecionada = '.conteudo-ativo';
    
    document.querySelectorAll(marcaSelecionada).forEach(excluiMarca => {
        const indexMarca = excluiMarca.getAttribute('data-index');

        const desejaExcluir = confirm('Deseja Excluir essa Marca?');

        if (desejaExcluir) {            
            delete marcas[indexMarca];
            excluiMarca.remove();
    
            btnExcluirMarca.classList.remove('btn-aditar-ativo');
            btnEditarMarca.classList.remove('btn-excluir-excluir');
    
            salvarMarca();
        };
    });
});

btnEditarMarca.addEventListener('click', () => {
    const marcaSelecionada = document.querySelector('.conteudo-ativo');

    if (marcaSelecionada) {
        const indexMarca = marcaSelecionada.getAttribute('data-index');

        localStorage.setItem('editaMarcaIndex', indexMarca);

        location.href = '/marcas/novamarca/novamarca.html';
    };
});
