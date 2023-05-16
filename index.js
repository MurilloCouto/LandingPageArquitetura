var setadir = window.document.getElementById("setadir")
var setaesq = window.document.getElementById("setaesq")
var fotoUm = window.document.getElementById("fotoUm")
var fotoDois = window.document.getElementById("fotoDois")

function RolarParaDireita() {
    fotoUm.style = "display: none"
    fotoDois.style = "display: inline-flex"
    setadir.style = "opacity: 0.3"
    setaesq.style = "opacity: 1"
}

function RolarParaEsquerda() {
    fotoUm.style = "display: inline-flex"
    fotoDois.style = "display: none"
    setadir.style = "opacity: 1"
    setaesq.style = "opacity: 0.3"
}

