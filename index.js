
/*Constantes que indicam o xp necessário para alcançar determinado nível*/

const XP_PARA_BRONZE = 1000
const XP_PARA_PRATA = 2000
const XP_PARA_OURO = 5000
const XP_PARA_PLATINA = 7000
const XP_PARA_ASCENDENTE = 8000
const XP_PARA_IMORTAL = 9000
const XP_PARA_RADIANTE = 10000

/*Ficha do jogador*/

let nomeJogador = "Link"
let nivelJogador
let jogadorXP = 9300

/*Define o nivel do jogador baseado em seu XP*/

if(jogadorXP <= XP_PARA_BRONZE)
    nivelJogador = "Ferro"
else if(jogadorXP <= XP_PARA_PRATA)
    nivelJogador = "Bronze"
else if(jogadorXP <= XP_PARA_OURO)
    nivelJogador = "Prata"
else if(jogadorXP <= XP_PARA_PLATINA)
    nivelJogador = "Ouro"
else if(jogadorXP <= XP_PARA_ASCENDENTE)
    nivelJogador = "Platina"
else if(jogadorXP <= XP_PARA_IMORTAL)
    nivelJogador = "Ascendente"
else if(jogadorXP <= XP_PARA_RADIANTE)
    nivelJogador = "Imortal"
else
    nivelJogador = "Radiante"

  /*Informa o nivel do jogador*/

console.log("O herói de nome " + nomeJogador + " está no nível de " + nivelJogador)
