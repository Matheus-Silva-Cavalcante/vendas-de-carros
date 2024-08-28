let marcas = localStorage.marcas ? JSON.parse(localStorage.marcas) : [
    {marca: "Volkswagen"},
    {marca: "Chevrolet"},
    {marca: "Ford"}
];

function salvarMarca() {
    localStorage.setItem('marcas', JSON.stringify(marcas));
};