const questions = [
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
        question: 'Quem foi o primeiro homem?',
        answers: [
            { text: 'Adão', correct: true },
            { text: 'Abraão', correct: false },
            { text: 'Isaac', correct: false },
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
    // Adicione mais perguntas aqui...
];

// Embaralha as perguntas e respostas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralha perguntas e respostas ao carregar o quiz
shuffle(questions);
questions.forEach(question => shuffle(question.answers));

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const confettiCanvas = document.getElementById('confetti-canvas');

// Mostra a pergunta atual
function showQuestion() {
    quizContainer.innerHTML = '';
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = currentQuestion.question;
    quizContainer.appendChild(questionElement);

    const answersElement = document.createElement('ul');
    answersElement.classList.add('answers');
    currentQuestion.answers.forEach(answer => {
        const answerItem = document.createElement('li');
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = answer.correct;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(answer.text));
        answerItem.appendChild(label);
        answersElement.appendChild(answerItem);
    });
    quizContainer.appendChild(answersElement);
}

// Ação do botão "Próxima"
nextButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;

    if (selectedAnswer.value === 'true') {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Mostra o resultado final
function showResult() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.style.display = 'block';

    if (score === questions.length) {
        confetti();
    }
}

// Função de confetes
function confetti() {
    const count = 200; // Número de confetes
    const defaults = {
        origin: { y: 0.7 }
    };

    for (let i = 0; i < count; i++) {
        confetti({
            ...defaults,
            angle: Math.random() * 360,
            spread: Math.random() * 180 + 20,
            particleCount: Math.floor(Math.random() * 10) + 10,
            decay: 0.9,
            scalar: Math.random() + 1,
        });
    }
}

// Inicia o quiz com a primeira pergunta
showQuestion();

