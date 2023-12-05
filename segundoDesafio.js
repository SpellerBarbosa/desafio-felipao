let winPlayer = 120
let losePlayer = 30
let namePlayer = 'Speller'
let balanceWins = calculateRank(winPlayer, losePlayer)
let currentRank = positioning()
let messageClassification = `O Heroi ${namePlayer} tem saldo de ${balanceWins} está posicionado no rank ${currentRank}`

function calculateRank(winPlayer, losePlayer) {
    let calculate = winPlayer - losePlayer
    return calculate
}

function positioning() {
    if (balanceWins <= 10) {
        return "Ferro"
    } else if (balanceWins <= 20) {
        return "Bronze"
    } else if (balanceWins <= 50) {
        return "Prata"
    } else if (balanceWins <= 80) {
        return "Ouro"
    } else if (balanceWins <= 90) {
        return "Diamante"
    } else if (balanceWins <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

console.log(messageClassification)

