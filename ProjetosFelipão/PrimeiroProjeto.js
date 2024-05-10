let Hero = {
    nome: "Dio",
    xp: 10001
};

console.log("Nome do Hero: " + Hero.nome);
console.log("XP do Hero: " + Hero.xp);

if (Hero.xp < 1000) {
    console.log("Nível: Ferro");
} else if (Hero.xp >= 1001 && Hero.xp <= 2000) {
    console.log("Nível: Bronze");
} else if (Hero.xp >= 2001 && Hero.xp <= 5000) {
    console.log("Nível: Prata");
} else if (Hero.xp >= 6001 && Hero.xp <= 7000) {
    console.log("Nível: Ouro");
} else if (Hero.xp >= 7001 && Hero.xp <= 8000) {
    console.log("Nível: Platina");
} else if (Hero.xp >= 8001 && Hero.xp <= 9000) {
    console.log("Nível: Ascendente");
} else if (Hero.xp >= 9001 && Hero.xp <= 10000) {
    console.log("Nível: Imortal");
} else if (Hero.xp >= 10001) {
    console.log("Nível: Radiante");
}
