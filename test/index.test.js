
var expect = require('expect.js');

var index = require('../index');

describe('Funções de data:', function () {

  it('Deve retornar o mês atual', function (done) {
    var actual = index.getMonth();
    var expected = new Date().getMonth() + 1;
    expect(actual).to.be.equal(expected);
    done();
  });

  it('Deve retornar o ano atual', function (done) {
    var actual = index.getYear();
    var expected = new Date().getYear();
    expect(actual).to.be.equal(expected);
    done();
  });

});

describe('Calcular idade em meses:', function () {

  it('Calcula idade nascido no mesmo ano atual', function (done) {

    //MOCK dos retornos de data atuais
    index.getMonth = function () {
      return 10;
    };
    index.getYear = function () {
      return 2016;
    }

    var bebe = {
      'nome': 'José Joselito de Joselândia',
      'sexo': 'M',
      'mesNascimento': 3,
      'anoNascimento': 2016
    };

    var actual = index.calcularIdadeMeses(bebe.mesNascimento, bebe.anoNascimento);

    var expected = 7;

    expect(actual).to.be(expected);

    done();

  });

  it('Calcula idade nascido em ano diferente do atual', function (done) {

    //MOCK dos retornos de data atuais
    index.getMonth = function () {
      return 2;
    };
    index.getYear = function () {
      return 2017;
    }

    var bebe = {
      'nome': 'Miguel Miguelito de Miguelândia',
      'sexo': 'M',
      'mesNascimento': 6,
      'anoNascimento': 2016
    };

    var actual = index.calcularIdadeMeses(bebe.mesNascimento, bebe.anoNascimento);

    var expected = 8;

    expect(actual).to.be(expected);

    done();

  });

  it('Calcula idade nascido com 3 anos e meio de idade', function (done) {

    //MOCK dos retornos de data atuais
    index.getMonth = function () {
      return 1;
    };
    index.getYear = function () {
      return 2017;
    }

    var bebe = {
      'nome': 'Miguel Miguelito de Miguelândia',
      'sexo': 'M',
      'mesNascimento': 7,
      'anoNascimento': 2013
    };

    var actual = index.calcularIdadeMeses(bebe.mesNascimento, bebe.anoNascimento);

    var expected = 42;

    expect(actual).to.be(expected);

    done();

  });

});

describe('Calcular dosagem da mamadeira: ', function () {

  it('Dosagem para bebês de 4 meses', function (done) {

    var actual = index.calcularDosagem(4);

    expect(actual).to.have.property('idadeMeses');
    expect(actual).to.have.property('mamadeiraDia');
    expect(actual).to.have.property('aguaMl');
    expect(actual).to.have.property('colheresPo');
    expect(actual).to.have.property('pesoFinal');

    expect(actual.idadeMeses).to.contain(3, 4);
    expect(actual.mamadeiraDia).to.be(5);
    expect(actual.aguaMl).to.be(180);
    expect(actual.colheresPo).to.be(6);
    expect(actual.pesoFinal).to.be(200);
    
    done();

  });

});

describe('Teste integrado: ', function(){

  it('Chamada com sucesso', function(done) {

    index.getMonth = function () {
      return 3;
    };
    index.getYear = function () {
      return 2017;
    }

    var bebe = {
      'nome': 'Integrada Integradita de Integralândia',
      'sexo': 'F',
      'mesNascimento': 11,
      'anoNascimento': 2016
    };

    var actual = index.executa(bebe);

    expect(actual.mamadeiraDia).to.be(5);

    done();

  });

});