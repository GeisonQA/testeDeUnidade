const { linguagemDosGatosECachorros } = require('../src/comunicacao.js')
const { strictEqual } = require('assert')

describe('comunicacao', () => {

    it('Quando informar cachorro deve retornar Au Au', () => {
        const  animal = "cachorro"
        const comunicacao = linguagemDosGatosECachorros (animal)
        strictEqual(comunicacao, 'Au Au')

    });

it('Quando informar gato deve retornar Miau', () => {
        const  animal = "gato"
        const comunicacao = linguagemDosGatosECachorros (animal)
        strictEqual(comunicacao, 'Miau')

    });

    it('Animal diferente retorna informe gato ou cachorro', () => {
        const  animal = "galinha"
        const comunicacao = linguagemDosGatosECachorros (animal)
        strictEqual(comunicacao, 'Informe gato ou cachorro')

    });



});