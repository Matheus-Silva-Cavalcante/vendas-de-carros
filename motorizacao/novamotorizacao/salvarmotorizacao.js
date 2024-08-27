let motores = localStorage.motores ? JSON.parse(localStorage.motores) : [];

function salvarMotorizacao() {
    localStorage.setItem('motores', JSON.stringify(motores));
};