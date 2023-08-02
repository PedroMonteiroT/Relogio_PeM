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