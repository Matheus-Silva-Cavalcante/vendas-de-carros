let motores = localStorage.motores ? JSON.parse(localStorage.motores) : [
    {motor: "flex - Gasolina e Álcoo"},
    {motor: "Gasolina"},
    {motor: "Álcoo"}
];

function salvarMotorizacao() {
    localStorage.setItem('motores', JSON.stringify(motores));
};