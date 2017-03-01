
//Regra de negócio:
// Idade em meses | Mamadeiras por dia | água (ml) | colheres pó | produto pronto (ml)   
// 0 - 1          | 6                  | 90        | 3           | 100
// 2              | 5                  | 150       | 5           | 170
// 3 - 4          | 5                  | 180       | 6           | 200
// 5 - 6          | 4                  | 210       | 7           | 230

module.exports.getMonth = function () {
    return new Date().getMonth() + 1;
}

module.exports.getYear = function () {
    return new Date().getYear();
}

module.exports.calcularIdadeMeses = function (mesNascimento, anoNascimento) {
    var idadeMeses;
    var mesAtual = this.getMonth();
    var anoAtual = this.getYear();
    var difAnos = anoAtual - anoNascimento;
    if (difAnos > 0) {
        idadeMeses = ((difAnos * 12) - mesNascimento) + mesAtual;
    } else {
        idadeMeses = mesAtual - mesNascimento;
    }
    return idadeMeses;
}

module.exports.calcularDosagem = function (idadeMeses) {
    var infoDosagem;

    switch (idadeMeses) {
        case 0:
        case 1:
            infoDosagem = {
                'idadeMeses': [0, 1],
                'mamadeiraDia': 6,
                'aguaMl': 90,
                'colheresPo': 3,
                'pesoFinal': 100
            };
            break;
        case 2:
            infoDosagem = {
                'idadeMeses': [2],
                'mamadeiraDia': 5,
                'aguaMl': 150,
                'colheresPo': 5,
                'pesoFinal': 170
            };
            break;
        case 3:
        case 4:
            infoDosagem = {
                'idadeMeses': [3, 4],
                'mamadeiraDia': 5,
                'aguaMl': 180,
                'colheresPo': 6,
                'pesoFinal': 200
            };
            break;
        case 5:
        case 6:
            infoDosagem = {
                'idadeMeses': [5, 6],
                'mamadeiraDia': 4,
                'aguaMl': 210,
                'colheresPo': 7,
                'pesoFinal': 230
            };
            break;
        default:
            infoDosagem = {'erro': 'idade inválida'};
            break;
    }
    return infoDosagem;
}

module.exports.executa = function (bebe) {
    var idadeMeses = this.calcularIdadeMeses(bebe.mesNascimento, bebe.anoNascimento);

    var infoDosagem = this.calcularDosagem(idadeMeses);

    return infoDosagem;
}
