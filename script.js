// Perguntas do Jogo 1
const game1Questions = [
    {
        question: 'Quem criou os céus e a terra?',
        answers: [
            { text: 'Deus', correct: true },
            { text: 'Moisés', correct: false },
            { text: 'Abraão', correct: false },
            { text: 'Noé', correct: false }
        ]
    },
    {
        question: 'Quem foi o primeiro homem?',
        answers: [
            { text: 'Adão', correct: true },
            { text: 'Caim', correct: false },
            { text: 'Abraão', correct: false },
            { text: 'Jacó', correct: false }
        ]
    },

    {
        question: 'Quem foi o filho mais velho de Adão e Eva?',
        answers: [
            { text: 'Abel', correct: false },
            { text: 'Caim', correct: true },
            { text: 'Sete', correct: false },
            { text: 'Enoque', correct: false }
        ]
    },
    {
        question: 'Quem construiu a arca?',
        answers: [
            { text: 'Noé', correct: true },
            { text: 'Moisés', correct: false },
            { text: 'Abraão', correct: false },
            { text: 'Adão', correct: false }
        ]
    },
    {
        question: 'Qual foi o sinal da aliança de Deus com Noé?',
        answers: [
            { text: 'A arca', correct: false },
            { text: 'Um arco-íris', correct: true },
            { text: 'A pomba com o ramo de oliveira', correct: false },
            { text: 'A chuva', correct: false }
        ]
    },
    {
        question: 'Quem foi o filho prometido de Abraão?',
        answers: [
            { text: 'Ismael', correct: false },
            { text: 'Isaac', correct: true },
            { text: 'Jacó', correct: false },
            { text: 'José', correct: false }
        ]
    },
    {
        question: 'Qual era o nome da esposa de Abraão?',
        answers: [
            { text: 'Rebeca', correct: false },
            { text: 'Sara', correct: true },
            { text: 'Raquel', correct: false },
            { text: 'Lea', correct: false }
        ]
    },
    {
        question: 'Qual era o nome do irmão de Jacó?',
        answers: [
            { text: 'Ismael', correct: false },
            { text: 'Esaú', correct: true },
            { text: 'José', correct: false },
            { text: 'Levi', correct: false }
        ]
    },
    {
        question: 'Quem foi vendido como escravo pelos próprios irmãos?',
        answers: [
            { text: 'Benjamin', correct: false },
            { text: 'José', correct: true },
            { text: 'Rúben', correct: false },
            { text: 'Simeão', correct: false }
        ]
    },
    {
        question: 'Qual o nome do pai de Abraão?',
        answers: [
            { text: 'Terá', correct: true },
            { text: 'Isaque', correct: false },
            { text: 'Naor', correct: false },
            { text: 'Ló', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 1 aqui
];

// Perguntas do Jogo 2
const game2Questions = [
    {
        question: 'Qual foi o sinal da aliança de Deus com Noé?',
        answers: [
            { text: 'A arca', correct: false },
            { text: 'Um arco-íris', correct: true },
            { text: 'A pomba com o ramo de oliveira', correct: false },
            { text: 'A chuva', correct: false }
        ]
    },
    {
        question: 'Quem foi lançado na cova dos leões?',
        answers: [
            { text: 'Daniel', correct: true },
            { text: 'Elias', correct: false },
            { text: 'Moisés', correct: false },
            { text: 'José', correct: false }
        ]
    },

    {
        question: 'Qual o nome do lugar onde Deus confundiu as línguas das pessoas?',
        answers: [
            { text: 'Babel', correct: true },
            { text: 'Jerusalém', correct: false },
            { text: 'Sodoma', correct: false },
            { text: 'Gomorra', correct: false }
        ]
    },
    {
        question: 'Quem se transformou em uma estátua de sal?',
        answers: [
            { text: 'A esposa de Ló', correct: true },
            { text: 'Sara', correct: false },
            { text: 'Eva', correct: false },
            { text: 'Rebeca', correct: false }
        ]
    },
    {
        question: 'Qual era o nome da terra que Deus prometeu a Abraão?',
        answers: [
            { text: 'Canaã', correct: true },
            { text: 'Egito', correct: false },
            { text: 'Assíria', correct: false },
            { text: 'Babilônia', correct: false }
        ]
    },
    {
        question: 'Quantos filhos Jacó teve?',
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '8', correct: false },
            { text: '14', correct: false }
        ]
    },
    {
        question: 'Quem interpretou os sonhos do Faraó no Egito?',
        answers: [
            { text: 'José', correct: true },
            { text: 'Moisés', correct: false },
            { text: 'Arão', correct: false },
            { text: 'Abraão', correct: false }
        ]
    },
    {
        question: 'Quem era a mãe de Ismael?',
        answers: [
            { text: 'Sara', correct: false },
            { text: 'Hagar', correct: true },
            { text: 'Rebeca', correct: false },
            { text: 'Raquel', correct: false }
        ]
    },
    {
        question: 'Quem foi o filho mais novo de Jacó?',
        answers: [
            { text: 'José', correct: false },
            { text: 'Benjamin', correct: true },
            { text: 'Rúben', correct: false },
            { text: 'Judá', correct: false }
        ]
    },
    {
        question: 'Qual era o nome original de Jacó antes de Deus mudar?',
        answers: [
            { text: 'Israel', correct: false },
            { text: 'Jacó', correct: true },
            { text: 'Abraão', correct: false },
            { text: 'Esaú', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 2 aqui
];

// Jogo 3
const game3Questions = [
    {
        question: 'Quem construiu a arca?',
        answers: [
            { text: 'Noé', correct: true },
            { text: 'Moisés', correct: false },
            { text: 'Abraão', correct: false },
            { text: 'Davi', correct: false }
        ]
    },
    {
        question: 'Quantos dias e noites choveu no dilúvio?',
        answers: [
            { text: '40 dias e 40 noites', correct: true },
            { text: '10 dias', correct: false },
            { text: '7 dias e 7 noites', correct: false },
            { text: '3 dias', correct: false }
        ]
    },

    {
        question: 'Quem foi a esposa de Isaque?',
        answers: [
            { text: 'Rebeca', correct: true },
            { text: 'Raquel', correct: false },
            { text: 'Sara', correct: false },
            { text: 'Lea', correct: false }
        ]
    },
    {
        question: 'Qual o nome da cidade destruída junto com Gomorra?',
        answers: [
            { text: 'Jericó', correct: false },
            { text: 'Babel', correct: false },
            { text: 'Sodoma', correct: true },
            { text: 'Tiro', correct: false }
        ]
    },
    {
        question: 'Quem era o irmão mais velho de José?',
        answers: [
            { text: 'Rúben', correct: true },
            { text: 'Judá', correct: false },
            { text: 'Levi', correct: false },
            { text: 'Simeão', correct: false }
        ]
    },
    {
        question: 'Quem viu a terra prometida antes de morrer, mas não pôde entrar nela?',
        answers: [
            { text: 'Abraão', correct: false },
            { text: 'Moisés', correct: true },
            { text: 'Jacó', correct: false },
            { text: 'Isaac', correct: false }
        ]
    },
    {
        question: 'Quem enganou seu pai para receber a bênção destinada ao irmão?',
        answers: [
            { text: 'Jacó', correct: true },
            { text: 'Esaú', correct: false },
            { text: 'José', correct: false },
            { text: 'Levi', correct: false }
        ]
    },
    {
        question: 'Qual era o nome do servo de Abraão que foi buscar uma esposa para Isaque?',
        answers: [
            { text: 'Eliezer', correct: true },
            { text: 'Josué', correct: false },
            { text: 'Moisés', correct: false },
            { text: 'Aarão', correct: false }
        ]
    },
    {
        question: 'Quem foi o pai de Abraão?',
        answers: [
            { text: 'Terá', correct: true },
            { text: 'Isaque', correct: false },
            { text: 'Naor', correct: false },
            { text: 'Haran', correct: false }
        ]
    },
    {
        question: 'Quem teve seu nome mudado para Israel?',
        answers: [
            { text: 'Jacó', correct: true },
            { text: 'Abraão', correct: false },
            { text: 'Isaac', correct: false },
            { text: 'José', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 3 aqui
];

// Jogo 4
const game4Questions = [
    {
        question: 'Qual foi o primeiro filho de Adão e Eva?',
        answers: [
            { text: 'Caim', correct: true },
            { text: 'Abel', correct: false },
            { text: 'Sete', correct: false },
            { text: 'Enoque', correct: false }
        ]
    },
    {
        question: 'Quem foi a esposa de Adão?',
        answers: [
            { text: 'Eva', correct: true },
            { text: 'Sara', correct: false },
            { text: 'Rebeca', correct: false },
            { text: 'Raquel', correct: false }
        ]
    },

    {
        question: 'Quantos irmãos tinha José?',
        answers: [
            { text: '10', correct: true },
            { text: '12', correct: false },
            { text: '8', correct: false },
            { text: '9', correct: false }
        ]
    },
    {
        question: 'Qual era a profissão de Caim?',
        answers: [
            { text: 'Lavrador', correct: true },
            { text: 'Pastor de ovelhas', correct: false },
            { text: 'Carpinteiro', correct: false },
            { text: 'Ferreiro', correct: false }
        ]
    },
    {
        question: 'Qual era a profissão de Abel?',
        answers: [
            { text: 'Pastor de ovelhas', correct: true },
            { text: 'Lavrador', correct: false },
            { text: 'Ferreiro', correct: false },
            { text: 'Carpinteiro', correct: false }
        ]
    },
    {
        question: 'Qual foi a oferenda de Abel a Deus?',
        answers: [
            { text: 'As primícias do seu rebanho', correct: true },
            { text: 'Frutos da terra', correct: false },
            { text: 'Incenso', correct: false },
            { text: 'Ouro', correct: false }
        ]
    },
    {
        question: 'Como Deus puniu Caim após ele matar Abel?',
        answers: [
            { text: 'Foi condenado a vagar pela terra', correct: true },
            { text: 'Foi condenado à morte', correct: false },
            { text: 'Foi banido do Éden', correct: false },
            { text: 'Foi transformado em pedra', correct: false }
        ]
    },
    {
        question: 'Qual era a idade de Noé quando o dilúvio veio?',
        answers: [
            { text: '600 anos', correct: true },
            { text: '500 anos', correct: false },
            { text: '400 anos', correct: false },
            { text: '700 anos', correct: false }
        ]
    },
    {
        question: 'Quem foi o homem que andou com Deus e foi levado por Ele?',
        answers: [
            { text: 'Enoque', correct: true },
            { text: 'Noé', correct: false },
            { text: 'Moisés', correct: false },
            { text: 'Abel', correct: false }
        ]
    },
    {
        question: 'Quem foi o pai de Esaú e Jacó?',
        answers: [
            { text: 'Isaque', correct: true },
            { text: 'Abraão', correct: false },
            { text: 'Noé', correct: false },
            { text: 'Lameque', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 4 aqui
];

// Jogo 5
const game5Questions = [
    {
        question: 'Quem foi o homem mais forte da Bíblia?',
        answers: [
            { text: 'Sansão', correct: true },
            { text: 'Davi', correct: false },
            { text: 'Golias', correct: false },
            { text: 'Salomão', correct: false }
        ]
    },
    {
        question: 'Qual foi o homem mais sábio da Bíblia?',
        answers: [
            { text: 'Salomão', correct: true },
            { text: 'Davi', correct: false },
            { text: 'Moisés', correct: false },
            { text: 'Paulo', correct: false }
        ]
    },

    {
        question: 'Quem foi a primeira mulher criada por Deus?',
        answers: [
            { text: 'Eva', correct: true },
            { text: 'Sara', correct: false },
            { text: 'Rebeca', correct: false },
            { text: 'Raquel', correct: false }
        ]
    },
    {
        question: 'O que Adão e Eva comeram no Jardim do Éden?',
        answers: [
            { text: 'Uma maçã', correct: false },
            { text: 'O fruto do conhecimento do bem e do mal', correct: true },
            { text: 'Uma pera', correct: false },
            { text: 'Uvas', correct: false }
        ]
    },
    {
        question: 'Quem foi o primeiro assassinato na Bíblia?',
        answers: [
            { text: 'Caim', correct: true },
            { text: 'Abel', correct: false },
            { text: 'Noé', correct: false },
            { text: 'Adão', correct: false }
        ]
    },
    {
        question: 'Qual era o nome da cidade onde as pessoas construíram a torre para alcançar o céu?',
        answers: [
            { text: 'Babel', correct: true },
            { text: 'Jerusalém', correct: false },
            { text: 'Nínive', correct: false },
            { text: 'Sodoma', correct: false }
        ]
    },
    {
        question: 'Quem foi o pai de Noé?',
        answers: [
            { text: 'Lameque', correct: true },
            { text: 'Adão', correct: false },
            { text: 'Enoque', correct: false },
            { text: 'Sete', correct: false }
        ]
    },
    {
        question: 'Quantos dias choveu durante o dilúvio?',
        answers: [
            { text: '40 dias e 40 noites', correct: true },
            { text: '30 dias e 30 noites', correct: false },
            { text: '7 dias e 7 noites', correct: false },
            { text: '50 dias e 50 noites', correct: false }
        ]
    },
    {
        question: 'Qual era o nome do filho mais velho de Noé?',
        answers: [
            { text: 'Sem', correct: false },
            { text: 'Cam', correct: true },
            { text: 'Jafé', correct: false },
            { text: 'Enoque', correct: false }
        ]
    },
    {
        question: 'Quem foi escolhido por Deus para ser o pai de uma grande nação?',
        answers: [
            { text: 'Abraão', correct: true },
            { text: 'Isaac', correct: false },
            { text: 'Jacó', correct: false },
            { text: 'José', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 5 aqui
];

// Jogo 6
const game6Questions = [
    {
        question: 'Quem foi jogado na fornalha de fogo?',
        answers: [
            { text: 'Sadraque, Mesaque e Abede-Nego', correct: true },
            { text: 'Daniel', correct: false },
            { text: 'José', correct: false },
            { text: 'Elias', correct: false }
        ]
    },
    {
        question: 'Quem foi o rei de Israel que construiu o templo?',
        answers: [
            { text: 'Salomão', correct: true },
            { text: 'Davi', correct: false },
            { text: 'Saul', correct: false },
            { text: 'Josué', correct: false }
        ]
    },

    {
        question: 'Qual era o nome da esposa de Abraão?',
        answers: [
            { text: 'Sara', correct: true },
            { text: 'Rebeca', correct: false },
            { text: 'Raquel', correct: false },
            { text: 'Lea', correct: false }
        ]
    },
    {
        question: 'Quantos filhos teve Abraão?',
        answers: [
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '1', correct: false }
        ]
    },
    {
        question: 'Quem foi o filho prometido de Abraão e Sara?',
        answers: [
            { text: 'Isaac', correct: true },
            { text: 'Ismael', correct: false },
            { text: 'Jacó', correct: false },
            { text: 'José', correct: false }
        ]
    },
    {
        question: 'Quem foi a mãe de Isaque?',
        answers: [
            { text: 'Sara', correct: true },
            { text: 'Hagar', correct: false },
            { text: 'Rebeca', correct: false },
            { text: 'Raquel', correct: false }
        ]
    },
    {
        question: 'Qual o nome do filho de Isaque e Rebeca?',
        answers: [
            { text: 'Esaú', correct: true },
            { text: 'Jacó', correct: false },
            { text: 'José', correct: false },
            { text: 'Benjamim', correct: false }
        ]
    },
    {
        question: 'Quem enganou seu pai para receber a bênção de Isaque?',
        answers: [
            { text: 'Jacó', correct: true },
            { text: 'Esaú', correct: false },
            { text: 'José', correct: false },
            { text: 'Benjamin', correct: false }
        ]
    },
    {
        question: 'Qual era o nome do lugar onde Deus pediu a Abraão para sacrificar Isaac?',
        answers: [
            { text: 'Moriah', correct: true },
            { text: 'Gomorra', correct: false },
            { text: 'Canaã', correct: false },
            { text: 'Egito', correct: false }
        ]
    },
    {
        question: 'Quantos filhos Jacó teve?',
        answers: [
            { text: '12', correct: true },
            { text: '10', correct: false },
            { text: '14', correct: false },
            { text: '8', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 6 aqui
];

// Jogo 7
const game7Questions = [
    {
        question: 'Quem derrotou Golias?',
        answers: [
            { text: 'Davi', correct: true },
            { text: 'Saul', correct: false },
            { text: 'Sansão', correct: false },
            { text: 'Josué', correct: false }
        ]
    },
    {
        question: 'Quantas pragas foram enviadas ao Egito?',
        answers: [
            { text: '10 pragas', correct: true },
            { text: '7 pragas', correct: false },
            { text: '3 pragas', correct: false },
            { text: '5 pragas', correct: false }
        ]
    },

    {
        question: 'Qual era o nome da mãe de Jacó?',
        answers: [
            { text: 'Rebeca', correct: true },
            { text: 'Sara', correct: false },
            { text: 'Raquel', correct: false },
            { text: 'Lea', correct: false }
        ]
    },
    {
        question: 'Qual o nome do irmão mais velho de Jacó?',
        answers: [
            { text: 'Esaú', correct: true },
            { text: 'José', correct: false },
            { text: 'Benjamin', correct: false },
            { text: 'Simeão', correct: false }
        ]
    },
    {
        question: 'Quem foi vendido como escravo pelos irmãos?',
        answers: [
            { text: 'José', correct: true },
            { text: 'Esaú', correct: false },
            { text: 'Judá', correct: false },
            { text: 'Simão', correct: false }
        ]
    },
    {
        question: 'Qual o nome do filho de Jacó que se tornou governador do Egito?',
        answers: [
            { text: 'José', correct: true },
            { text: 'Efraim', correct: false },
            { text: 'Manassés', correct: false },
            { text: 'Judá', correct: false }
        ]
    },
    {
        question: 'Quem foram os filhos de José?',
        answers: [
            { text: 'Efraim e Manassés', correct: true },
            { text: 'Judá e Benjamim', correct: false },
            { text: 'Simeão e Levi', correct: false },
            { text: 'Dan e Naftali', correct: false }
        ]
    },
    {
        question: 'Qual era o nome do avô de Jacó?',
        answers: [
            { text: 'Abraão', correct: true },
            { text: 'Isaque', correct: false },
            { text: 'Lameque', correct: false },
            { text: 'Terá', correct: false }
        ]
    },
    {
        question: 'Quem foi a esposa de Jacó?',
        answers: [
            { text: 'Lea e Raquel', correct: true },
            { text: 'Sara e Rebeca', correct: false },
            { text: 'Raquel e Rebeca', correct: false },
            { text: 'Lea e Rebeca', correct: false }
        ]
    },
    {
        question: 'Qual era o nome do pai de Abraão?',
        answers: [
            { text: 'Terá', correct: true },
            { text: 'Naor', correct: false },
            { text: 'Haran', correct: false },
            { text: 'Isaque', correct: false }
        ]
    }
    // Adicione mais perguntas do jogo 7 aqui
];

let shuffledQuestions, currentQuestionIndex, score = 0;



// Função para iniciar o jogo de acordo com o número selecionado
function startGame(gameNumber) {
    // Ocultar a seleção de jogos e mostrar o container do quiz
    document.getElementById('game-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Escolher o conjunto de perguntas baseado no jogo selecionado
    switch (gameNumber) {
        case 1:
            shuffledQuestions = shuffleArray(game1Questions);
            break;
        case 2:
            shuffledQuestions = shuffleArray(game2Questions);
            break;
        case 3:
            shuffledQuestions = shuffleArray(game3Questions);
            break;
        case 4:
            shuffledQuestions = shuffleArray(game4Questions);
            break;
        case 5:
            shuffledQuestions = shuffleArray(game5Questions);
            break;
        case 6:
            shuffledQuestions = shuffleArray(game6Questions);
            break;
        case 7:
            shuffledQuestions = shuffleArray(game7Questions);
            break;
    }

    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').style.display = 'none';
    

    // Exibir a primeira pergunta
    setNextQuestion();
}

// Função para voltar ao menu de jogos
function backToMenu() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('game-selection').style.display = 'block';
    document.getElementById('back-to-menu').style.display = 'none'; // Ocultar o botão de voltar
    document.getElementById('result').style.display = 'none'; // Ocultar o resultado ao voltar ao menu
    resetState(); // Limpar o estado anterior
}



// Função para embaralhar um array (tanto perguntas quanto respostas)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para definir a próxima pergunta
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Função para exibir a pergunta com as respostas embaralhadas
function showQuestion(question) {
    const questionElement = document.getElementById('question');
    questionElement.innerText = question.question;

    const answerButtonsElement = document.getElementById('answer-buttons');

    // Embaralhar as respostas antes de exibi-las
    const shuffledAnswers = shuffleArray([...question.answers]);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('li');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

// Função para limpar o estado anterior
function resetState() {
    const answerButtonsElement = document.getElementById('answer-buttons');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Função para lidar com a seleção da resposta
function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

// Função para mostrar o resultado final
function showResult() {
    // Esconde o quiz
    document.getElementById('quiz-container').style.display = 'none';

    // Exibe o resultado
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';

    // Define um tamanho de fonte maior
    resultElement.style.fontSize = '24px'; // Ajuste o valor conforme necessário

    // Define a cor da fonte
    resultElement.style.color = 'black'; // Ajuste a cor da fonte

    // Mensagem inicial com o número de acertos e quebra de linha
    resultElement.innerHTML = `Você acertou ${score} de ${shuffledQuestions.length} perguntas!<br><br>`;

    // Mensagens baseadas no número de acertos
    if (score <= 5) {
        resultElement.innerHTML += "Você tem que ler mais a bíblia!";
    } else if (score > 5 && score < shuffledQuestions.length) {
        resultElement.innerHTML += "Você é um bom leitor da bíblia sagrada!";
    } else if (score === shuffledQuestions.length) {
        resultElement.innerHTML += "Parabéns! Você acertou todas! 🎉";
        confettiCelebration(); // Chama a animação de confetes ao acertar todas as perguntas
    }
    
    document.getElementById('back-to-menu').style.display = 'inline'; // Mostrar o botão de voltar ao final
}


// Função de confete para celebração
function confettiCelebration() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    }
}


