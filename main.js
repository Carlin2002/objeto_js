class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    estudar() {
        return `${this.nome} está estudando ${this.curso}`;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome,idade);
        this.disciplina = disciplina
    }

    ensinar() {
        return `${this.nome} está ensinando ${this.disciplina}`;
    }
}

const estudante1 = new Estudante('Carlos', 21, 'Programação');
console.log(estudante1.apresentar());
console.log(estudante1.estudar());

const professor1 = new Professor('Gian', 35, 'Banco de Dadaos');
console.log(professor1.apresentar());
console.log(professor1.ensinar());