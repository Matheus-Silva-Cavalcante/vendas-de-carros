let marcas = localStorage.marcas ? JSON.parse(localStorage.marcas) : [];

function salvarMarca() {
    localStorage.setItem('marcas', JSON.stringify(marcas));
};