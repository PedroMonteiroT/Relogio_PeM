function relogio(){
    const data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    var caixa = document.getElementsByClassName('caixa')
    var h = document.getElementById('h')
    var min = document.getElementById('min')
    var seg = document.getElementById('seg')
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    h.innerHTML = hora
    min.innerHTML = minuto
    seg.innerHTML = segundos
    setInterval(relogio, 900)
}

function fundopreto(){
    var noite = document.getElementById('span')
    var darkmode = document.getElementById('darkmode')
    noite.style.background= 'black'
    darkmode.style.display='inline-block'
    noite.style.color='white'
    noite.style.transition = 'background 0.5s, color 0.5s';
}
function normal(){
    var noite = document.getElementById('span')
    var darkmode = document.getElementById('darkmode')
    darkmode.style.display= 'none'
    noite.style.background= 'none'
    noite.style.color='black'
}
// function modonoturno(){
//     var caixa = document.getElementsByClassName('caixa')
//     var main = document.getElementById('main')
//     document.body.style.backgroundImage = 'linear-gradient(to right, rgb(0, 0, 190),rgb(0, 0, 101), rgb(94, 0, 94))'
//     main.style.backgroundImage= 'linear-gradient(to right, rgb(0, 0, 176),rgb(0, 0, 163), rgb(189, 0, 189))'
//     for (var i = 0; i < caixa.length; i++) {
//         caixa[i].style.background = 'darkblue';
//     }
// }
function modonoturno() {
    var body = document.body;
    body.classList.toggle('modo-noturno'); // Adiciona ou remove a classe modo-noturno
}