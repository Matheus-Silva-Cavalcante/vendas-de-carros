const areaConteudo = document.querySelector('.area-conteudo');

function mostraMotorizacao(motor, index) {
    let htmlMotorizacao = `
    <div class="conteudo" onclick="motorizacaoAtiva(this)" data-index='${index}'>${motor?.motor}</div>
    `;

    let divConteudo = document.createElement('div');
    divConteudo.classList.add('div-conteudo');

    divConteudo.innerHTML = htmlMotorizacao;

    return divConteudo;
};

motores.forEach((motor, index) => {
    if (!motor) return

    areaConteudo.append(mostraMotorizacao(motor, index));
});

function motorizacaoAtiva(elemento) {
    const motorizacaoSelecionada = elemento.classList.contains('conteudo-ativo');

    const motorizacaoAtiva = document.querySelectorAll('.conteudo-ativo');

    if (motorizacaoSelecionada) {
        elemento.classList.remove('conteudo-ativo');
        btnEditarMotorizacao.classList.remove('btn-aditar-ativo');
        btnExcluirMotorizacao.classList.remove('btn-excluir-excluir');
    } else {
        if (motorizacaoAtiva) {
            document.querySelectorAll('.conteudo-ativo').forEach(classAtiva => {
                classAtiva.classList.remove('conteudo-ativo');
            });
            
            elemento.classList.add('conteudo-ativo');
            btnEditarMotorizacao.classList.add('btn-aditar-ativo');
            btnExcluirMotorizacao.classList.add('btn-excluir-excluir');
        };
    };
};

btnExcluirMotorizacao.addEventListener('click', () => {
    const motorizacaoAtiva = '.conteudo-ativo';

    document.querySelectorAll(motorizacaoAtiva).forEach(excluirMotorizacao => {
        const indexMotorizacao = excluirMotorizacao.getAttribute('data-index');

        delete motores[indexMotorizacao];
        excluirMotorizacao.remove();

        btnEditarMotorizacao.classList.remove('btn-aditar-ativo');
        btnExcluirMotorizacao.classList.remove('btn-excluir-excluir');

        salvarMotorizacao();
    });
});

btnEditarMotorizacao.addEventListener('click', () => {
    const motorizacaoAtiva = document.querySelector('.conteudo-ativo');

    if (motorizacaoAtiva) {
        const indexMotorizacao = motorizacaoAtiva.getAttribute('data-index');

        localStorage.setItem('editarMotorizacaoIndex', indexMotorizacao);

        location.href= "/motorizacao/novamotorizacao/novamotorizasao.html";
    };
});
