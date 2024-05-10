


const vitorias = 75
const derrotas = 20
const { saldoVitorias, nivel } = CalculadoraDeNivel(vitorias, derrotas)
console.log(`O Herói tem um saldo de ${RespostaVitorias} está no nível de ${nivel}`)

function CalculadoraDeNivel(vitorias, derrotas) {
  const RespostaVitorias = vitorias - derrotas
  let nivel

  switch(true) {
      case vitorias < 10:
          nivel = "Ferro"
          break;
      case vitorias <= 20:
          nivel = "Bronze"
          break;
      case vitorias <= 50:
          nivel = "Prata"
          break;
      case vitorias <= 80:
          nivel = "Ouro"
          break;
      case vitorias <= 90:
          nivel = "Diamante"
          break;
      case vitorias <= 100:
          nivel = "Lendário"
          break;
      default:
          nivel = "Imortal"
  }
  return { saldoVitorias, nivel }
}


