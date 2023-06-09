// Array de objetos contendo as equações e sua proporcionalidade
const equacoes = [
  { equacao: "y = 3x", proporcional: "diretamente" },
  { equacao: "y = 6 / x", proporcional: "inversamente" },
  { equacao: "y = 2x + 1", proporcional: "diretamente" },
  { equacao: "y = 10 / x + 2", proporcional: "inversamente" },
  { equacao: "y = 4x - 3", proporcional: "diretamente" },
  { equacao: "y = 5 / x - 2", proporcional: "inversamente" },
  { equacao: "y = 2x + 5", proporcional: "diretamente" },
  { equacao: "y = 8 / x + 1", proporcional: "inversamente" },
];

let guarda_result = "";
let pontos = 0;

//Função pra forma classica de fração
function fracao(equacao) {
  var numerador = document.createElement("span");
  numerador.textContent = equacao.equacao.split("/")[0]; //obter numerador
  numerador.style.fontSize = "20px";

  var denominador = document.createElement("span");
  denominador.textContent = equacao.equacao.split("/")[1]; // obter o denomidador
  denominador.style.fontSize = "20px";

  var frac = document.createElement("span");
  frac.appendChild(numerador);
  frac.appendChild(document.createTextNode("/"));
  frac.appendChild(denominador);
}

// Função para exibir uma equação aleatória do array
function exibirEquacaoAleatoria() {
  const index = Math.floor(Math.random() * equacoes.length);
  const equacao = equacoes[index];
  document.getElementById("equation").textContent = equacao.equacao;
  guarda_result = equacao.proporcional;
}

// Função para verificar se a resposta do jogador está correta
function verificarEquacao(resposta) {
  const proporcionalidadeCorreta = guarda_result;
  const resultadoElement = document.getElementById("resultado");

  resultadoElement.classList.remove("hide");
  if (resposta === proporcionalidadeCorreta) {
    pontos += 10; // Adiciona 10 pontos para cada resposta correta
    resultadoElement.textContent = "Parabéns, você acertou!";
    resultadoElement.classList.remove("errou");
    resultadoElement.classList.add("acertou");
  } else {
    resultadoElement.textContent = "Ops, você errou. Tente novamente!";
    resultadoElement.classList.remove("acertou");
    resultadoElement.classList.add("errou");
  }
  setTimeout(function () {
    resultadoElement.classList.add("hide");
  }, 2000);

  // Atualiza a contagem de pontos
  const pontosElement = document.getElementById("point");

  pontosElement.classList.remove("hide");
  pontosElement.textContent = `Pontos: ${pontos}`;

  // Remove a classe "hide" para mostrar o elemento

  exibirEquacaoAleatoria();
}

// Exibe a primeira equação ao carregar a página
exibirEquacaoAleatoria();
