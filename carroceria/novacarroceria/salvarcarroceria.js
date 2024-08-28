let carrocerias = localStorage.carrocerias ? JSON.parse(localStorage.carrocerias) : [
    {carroceria: "Sedan"},
    {carroceria: "Hatchback"},
    {carroceria: "SUV"}
];

function salvarCarroceria() {
    localStorage.setItem('carrocerias', JSON.stringify(carrocerias));
};
