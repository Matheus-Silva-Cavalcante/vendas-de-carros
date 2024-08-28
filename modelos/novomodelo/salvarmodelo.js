let modelos = localStorage.modelos ? JSON.parse(localStorage.modelos) : [];

function salvarModelo() {
    localStorage.setItem('modelos', JSON.stringify(modelos));
};