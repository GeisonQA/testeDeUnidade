# Testes de Unidade com Mocha

Projeto de exemplo para ensino de testes unitários em JavaScript utilizando o **Mocha** e o módulo `assert` nativo do Node.js.

🎯 Objetivo

Testar a função `linguagemDosGatosECachorros`, que recebe um animal ("cachorro", "gato" ou outro) e retorna uma string representando seu som.

---

📁 Estrutura do Repositório

├── src/
  └── comunicacao.js          
└── test/
    └── comunicacao.test.js      


 Passo a passo para rodar os testes
1. Clone o repositório
git clone <URL-do-repo>
cd <nome-da-pasta>

🚀Instale as dependências
npm init -y
npm install mocha

🚀Configure o script de teste
"scripts": {
  "test": "mocha"
}

🚀Execute os testes
npm test


# 🎯Você verá uma saída como:
  comunicacao
    ✓ Quando informar cachorro deve retornar Au Au
    ✓ Quando informar gato deve retornar Miau
    ✓ Animal diferente retorna informe gato ou cachorro

  3 passing (xxms)
