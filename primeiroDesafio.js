nomeHeroi = "Speller"
xpHeroi = 20000
mensagemNivel = `O Herói de nome ${nomeHeroi} está no nível de `

if (xpHeroi <= 1000) {
    console.log(mensagemNivel + "Ferro")
} else if (xpHeroi <= 2000) {
    console.log(mensagemNivel + "Bronze")
} else if (xpHeroi <= 5000) {
    console.log(mensagemNivel + "Prata")
} else if (xpHeroi <= 7000) {
    console.log(mensagemNivel + "Ouro")
} else if (xpHeroi <= 8000) {
    console.log(mensagemNivel + "Platina")
}else if (xpHeroi <= 9000) {
    console.log(mensagemNivel + "Ascendente")
}else if (xpHeroi <= 10000) {
    console.log(mensagemNivel + "Imortal")
}else{
    console.log(mensagemNivel + "Radiante")
}