const pessoas = [];


for (let i = 0; i < 15; i++) {
    let genero;
    let altura;

    do {
        genero = prompt(`Digite o gênero da pessoa ${i + 1} (Masculino ou Feminino):`).trim();
    } while (genero !== "Masculino" && genero !== "Feminino");

    do {
        altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} (em metros, entre 1.00 e 2.50):`).replace(",", "."));
    } while (isNaN(altura) || altura < 1.00 || altura > 2.50);

    pessoas.push({
        id: i + 1,
        genero: genero,
        altura: altura
    });
}

let maiorAltura = pessoas[0].altura;
let menorAltura = pessoas[0].altura;
let somaAlturaMasculino = 0;
let contadorMasculino = 0;
let contadorFeminino = 0;

for (const pessoa of pessoas) {

    if (pessoa.altura > maiorAltura) {
        maiorAltura = pessoa.altura;
    }
    if (pessoa.altura < menorAltura) {
        menorAltura = pessoa.altura;
    }


    if (pessoa.genero === 'Masculino') {
        somaAlturaMasculino += pessoa.altura;
        contadorMasculino++;
    }

 
    if (pessoa.genero === 'Feminino') {
        contadorFeminino++;
    }
}


const mediaAlturaMasculino = contadorMasculino > 0 ? (somaAlturaMasculino / contadorMasculino).toFixed(2) : 0;


console.log("Dados das pessoas:");
console.log(pessoas);
console.log("\nResultados:");
console.log(`- Maior altura do grupo: ${maiorAltura.toFixed(2)}m`);
console.log(`- Menor altura do grupo: ${menorAltura.toFixed(2)}m`);
console.log(`- Média de altura do gênero Masculino: ${mediaAlturaMasculino}m`);
console.log(`- Número de pessoas do gênero Feminino: ${contadorFeminino}`);