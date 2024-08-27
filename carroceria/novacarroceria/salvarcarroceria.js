let carrocerias = localStorage.carrocerias ? JSON.parse(localStorage.carrocerias) : [];

function salvarCarroceria() {
    localStorage.setItem('carrocerias', JSON.stringify(carrocerias));
};
