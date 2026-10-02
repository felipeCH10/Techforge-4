const ps = require("prompt-sync")();

type consumidor = {
    id: number | null,
    nome: string | null,
    idade: number | null,
    email: string | null,
}

class CadastroConsumidor {
    public consumidores: consumidor[];

    public constructor() {
        this.consumidores = [];
    }

    public criarObjeto(): consumidor {
        const consumidor: consumidor = {
            id: null,
            nome: null,
            idade: null,
            email: null,
        };

        return consumidor;
    }

    public inserirValoresNoObjeto(): consumidor {
        const consumidor: consumidor = this.criarObjeto();

        consumidor.id = Number(ps("Digite o id do consumidor: "));
        consumidor.nome = ps("Digite o nome do consumidor: ");
        consumidor.idade = Number(ps("Digite a idade do consumidor: "));
        consumidor.email = ps("Digite o email do consumidor: ");

        return consumidor;
    }

    public adicionarConsumidor(): void {
        const consumidor = this.inserirValoresNoObjeto();
        this.consumidores.push(consumidor);
    }

    public maiorIdade(): consumidor {
        let maior = this.consumidores[0];

        for (const consumidor of this.consumidores) {
            if (consumidor.idade! > maior.idade!) {
                maior = consumidor;
            }
        }

        return maior;
    }

    public menorIdade(): consumidor {
        let menor = this.consumidores[0];

        for (const consumidor of this.consumidores) {
            if (consumidor.idade! < menor.idade!) {
                menor = consumidor;
            }
        }

        return menor;
    }

    public mediaIdade(): number {
        let soma = 0;

        for (const consumidor of this.consumidores) {
            soma += consumidor.idade!;
        }

        return soma / this.consumidores.length;
    }
}

const cadastro = new CadastroConsumidor();

for (let i = 0; i < 5; i++) {
    cadastro.adicionarConsumidor();
}

const maior = cadastro.maiorIdade();
const menor = cadastro.menorIdade();
const media = cadastro.mediaIdade();

console.log("Consumidores:", cadastro.consumidores);
console.log("Média das idades:", media.toFixed(2));
console.log("Consumidor mais velho:", maior.nome, "-", maior.idade, "anos");
console.log("Consumidor mais novo:", menor.nome, "-", menor.idade, "anos");