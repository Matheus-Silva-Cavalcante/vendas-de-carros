const areaConteudo = document.querySelector('.area-conteudo')

function mostrarModelo(modelo, index) {
    let htmlModelo = `
        <div class="conteudo" onclick="modeloAtivo(this)" data-index="${index}">
            <div class="conteudo-texto">${modelo?.modelo}</div>

            <hr class="hr-conteudo">
            <div class="conteudo-texto">${modelo?.marca}</div>

            <hr class="hr-conteudo">                    
            <div class="conteudo-texto">${modelo?.motorizacao}</div>

            <hr class="hr-conteudo">                    
            <div class="conteudo-texto">${modelo?.carroceria}</div>

            <hr class="hr-conteudo">                    
            <div  class="conteudo-texto">${modelo?.portas} portas</div>
        </div>
    `;

    let divConteudo = document.createElement('div');
    divConteudo.classList.add('div-conteudo');

    divConteudo.innerHTML = htmlModelo;

    return divConteudo;
};

modelos.forEach((modelo, index) => {
    areaConteudo.append(mostrarModelo(modelo, index));
});

function modeloAtivo(elemento) {
    const modeloSelecionad = elemento.classList.contains('conteudo-ativo');

    const modeloAtivo = document.querySelectorAll('.conteudo-ativo')

    if (modeloSelecionad) {
        elemento.classList.remove('conteudo-ativo');
        btnEditarModelo.classList.remove('btn-aditar-ativo');
        btnExcluirModelo.classList.remove('btn-excluir-ativo');
    } else {
        if (modeloAtivo) {
            document.querySelectorAll('.conteudo-ativo').forEach(classAtivo => {
                classAtivo.classList.remove('conteudo-ativo');
            });

            elemento.classList.add('conteudo-ativo');
            btnEditarModelo.classList.add('btn-aditar-ativo');
            btnExcluirModelo.classList.add('btn-excluir-ativo');
        };        
    };

};
