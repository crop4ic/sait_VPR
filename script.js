// Данные для тестов
const testData = {
    1: [
        {
            question: "В одной из кодировок Unicode каждый символ кодируется 16 битами. Определите размер следующего предложения в данной кодировке: Я к вам пишу – чего же боле?",
            options: ["52 байт", "104 бит", "832 бита", "104 байта"],
            correctAnswer: 2,
            tip: "Нужно посчитать количество символов в предложении (включая пробелы и знаки препинания) и умножить на 16 бит"
        },
        {
            question: "Для какого из приведённых чисел ложно высказывание: НЕ (число > 50) ИЛИ (число чётное)?",
            options: ["23", "45", "52", "64"],
            correctAnswer: 2,
            tip: "Нужно подставить каждое число в выражение и проверить, для какого оно ложно"
        },
        {
            question: "Между населёнными пунктами A, B, C, D, E построены дороги, протяжённость которых (в километрах) приведена в таблице. Определите длину кратчайшего пути между пунктами A и C.",
            options: ["4", "5", "6", "7"],
            correctAnswer: 1,
            tip: "Нужно найти все возможные пути из A в C и выбрать кратчайший",
            image: "images/road_map.png",
            imageCaption: "Схема дорог между населёнными пунктами"
        },
        {
            question: "В базе данных хранится информация о студентах колледжа. Сколько записей в выборке будет найдено по запросу: (Группа = 'ИС-101') И (Средний_балл > 4.5)?",
            options: ["10", "15", "20", "25"],
            correctAnswer: 2,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям",
            image: "images/students_table.png",
            imageCaption: "Таблица данных о студентах"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: x = 5; y = 3; while x > 0: y = y + 2; x = x - 1",
            options: ["8", "11", "13", "15"],
            correctAnswer: 2,
            tip: "Проследите выполнение цикла пошагово и подсчитайте итоговое значение переменной"
        },
        {
            question: "Сколько различных IP-адресов можно создать, используя маску подсети 255.255.255.248?",
            options: ["6", "8", "14", "16"],
            correctAnswer: 0,
            tip: "Посчитайте количество доступных хостов в подсети с учетом маски",
            image: "images/network_diagram.png",
            imageCaption: "Схема сети с указанием маски подсети"
        },
        {
            question: "В таблице базы данных содержится информация о компьютерных комплектующих. Сколько записей будет найдено по запросу: (Тип = 'Процессор') И (Цена < 15000)?",
            options: ["5", "8", "12", "15"],
            correctAnswer: 2,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям",
            image: "images/components_table.png",
            imageCaption: "Таблица данных о компьютерных комплектующих"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: result = 0; for i in range(1, 6): result = result + i * 2",
            options: ["20", "25", "30", "35"],
            correctAnswer: 2,
            tip: "Проследите выполнение цикла пошагово и подсчитайте итоговое значение переменной"
        },
        {
            question: "Сколько различных маршрутов существует в сети между двумя серверами, если известно, что пакет может пройти максимум через 3 промежуточных узла?",
            options: ["10", "12", "15", "18"],
            correctAnswer: 2,
            tip: "Подсчитайте все возможные комбинации маршрутов с учетом ограничения на количество промежуточных узлов",
            image: "images/network_routes.png",
            imageCaption: "Схема сети с возможными маршрутами"
        },
        {
            question: "В базе данных хранится информация о сотрудниках компании. Сколько записей будет найдено по запросу: (Отдел = 'IT') И (Стаж > 3)?",
            options: ["7", "10", "13", "16"],
            correctAnswer: 1,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям",
            image: "images/employees_table.png",
            imageCaption: "Таблица данных о сотрудниках"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: count = 0; text = 'программирование'; for char in text: if char in 'аеиоуыэюя': count += 1",
            options: ["3", "4", "5", "6"],
            correctAnswer: 2,
            tip: "Проследите выполнение цикла пошагово и подсчитайте количество гласных букв"
        },
        {
            question: "В базе данных хранится информация о товарах на складе. Сколько записей будет найдено по запросу: (Категория = 'Электроника') И (Количество > 10)?",
            options: ["8", "12", "16", "20"],
            correctAnswer: 1,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям",
            image: "images/warehouse_table.png",
            imageCaption: "Таблица данных о товарах на складе"
        },
        {
            question: "Сколько различных комбинаций паролей можно создать, используя 4 символа из набора: цифры 0-9 и буквы a-z?",
            options: ["1679616", "1000000", "456976", "1048576"],
            correctAnswer: 0,
            tip: "Учтите, что каждый символ может быть цифрой или буквой, и порядок символов важен",
            image: "images/password_combinations.png",
            imageCaption: "Диаграмма возможных комбинаций паролей"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: x = 10; y = 5; while x > y: x = x - 2; y = y + 1",
            options: ["x=4, y=8", "x=6, y=7", "x=8, y=6", "x=2, y=9"],
            correctAnswer: 1,
            tip: "Проследите выполнение цикла пошагово и определите значения обеих переменных"
        }
    ],
    2: [
        {
            question: "В одной из кодировок Unicode каждый символ кодируется 16 битами. Определите размер следующего предложения в данной кодировке: Я помню чудное мгновенье.",
            options: ["38 байт", "76 бит", "608 бит", "76 байт"],
            correctAnswer: 2,
            tip: "Нужно посчитать количество символов в предложении (включая пробелы и знаки препинания) и умножить на 16 бит"
        },
        {
            question: "Для какого из приведённых чисел истинно высказывание: НЕ (число < 20) И (число нечётное)?",
            options: ["15", "21", "25", "30"],
            correctAnswer: 1,
            tip: "Нужно подставить каждое число в выражение и проверить, для какого оно истинно"
        },
        {
            question: "В таблице базы данных содержится информация о компьютерных комплектующих. Сколько записей будет найдено по запросу: (Тип = 'Процессор') И (Цена < 15000)?",
            options: ["5", "8", "12", "15"],
            correctAnswer: 2,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: x = 5; y = 3; while x > 0: y = y + 2; x = x - 1",
            options: ["8", "11", "13", "15"],
            correctAnswer: 2,
            tip: "Проследите выполнение цикла пошагово и подсчитайте итоговое значение переменной"
        }
    ],
    3: [
        {
            question: "В одной из кодировок Unicode каждый символ кодируется 16 битами. Определите размер следующего предложения в данной кодировке: Унылая пора! Очей очарованье!",
            options: ["44 байт", "88 бит", "704 бита", "88 байт"],
            correctAnswer: 2,
            tip: "Нужно посчитать количество символов в предложении (включая пробелы и знаки препинания) и умножить на 16 бит"
        },
        {
            question: "В базе данных хранится информация о сотрудниках компании. Сколько записей будет найдено по запросу: (Отдел = 'IT') И (Стаж > 3)?",
            options: ["7", "10", "13", "16"],
            correctAnswer: 1,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: result = 0; for i in range(1, 6): result = result + i * 2",
            options: ["20", "25", "30", "35"],
            correctAnswer: 2,
            tip: "Проследите выполнение цикла пошагово и подсчитайте итоговое значение переменной"
        },
        {
            question: "Сколько различных IP-адресов можно создать, используя маску подсети 255.255.255.248?",
            options: ["6", "8", "14", "16"],
            correctAnswer: 0,
            tip: "Посчитайте количество доступных хостов в подсети с учетом маски"
        }
    ],
    4: [
        {
            question: "В одной из кодировок Unicode каждый символ кодируется 16 битами. Определите размер следующего предложения в данной кодировке: Мороз и солнце; день чудесный!",
            options: ["46 байт", "92 бит", "736 бит", "92 байт"],
            correctAnswer: 2,
            tip: "Нужно посчитать количество символов в предложении (включая пробелы и знаки препинания) и умножить на 16 бит"
        },
        {
            question: "В базе данных хранится информация о товарах на складе. Сколько записей будет найдено по запросу: (Категория = 'Электроника') И (Количество > 10)?",
            options: ["8", "12", "16", "20"],
            correctAnswer: 1,
            tip: "Проанализируйте условия запроса и подсчитайте количество записей, удовлетворяющих обоим условиям"
        },
        {
            question: "Определите значение переменной после выполнения фрагмента программы на языке Python: count = 0; text = 'программирование'; for char in text: if char in 'аеиоуыэюя': count += 1",
            options: ["3", "4", "5", "6"],
            correctAnswer: 2,
            tip: "Проследите выполнение цикла пошагово и подсчитайте количество гласных букв"
        },
        {
            question: "Сколько различных маршрутов существует в сети между двумя серверами, если известно, что пакет может пройти максимум через 3 промежуточных узла?",
            options: ["10", "12", "15", "18"],
            correctAnswer: 2,
            tip: "Подсчитайте все возможные комбинации маршрутов с учетом ограничения на количество промежуточных узлов"
        }
    ]
};

let currentVariant = 1;
let userAnswers = [];
let timerInterval;
let timeLeft = 90 * 60; // 90 минут в секундах

// Обработчики событий
document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentVariant = parseInt(btn.dataset.variant);
        document.querySelector('.timer-container').classList.remove('hidden');
        document.querySelector('.test-container').classList.add('hidden');
        document.querySelector('.results-container').classList.add('hidden');
        resetTimer();
    });
});

document.querySelector('.start-test-btn').addEventListener('click', startTest);
document.querySelector('.submit-btn').addEventListener('click', checkAnswers);

// Функции
function resetTimer() {
    timeLeft = 90 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.querySelector('.timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTest() {
    document.querySelector('.timer-container').classList.add('hidden');
    document.querySelector('.test-container').classList.remove('hidden');
    loadTest();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswers();
        }
    }, 1000);
}

function loadTest() {
    const questions = testData[currentVariant];
    const questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = '';
    userAnswers = [];

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        
        let imageHTML = '';
        if (question.image) {
            imageHTML = `
                <div class="question-image-container">
                    <img src="${question.image}" alt="${question.imageCaption}" class="question-image">
                    <div class="question-image-caption">${question.imageCaption}</div>
                </div>
            `;
        }

        questionElement.innerHTML = `
            <p class="question-text">${index + 1}. ${question.question}</p>
            ${imageHTML}
            <div class="options">
                ${question.options.map((option, optIndex) => `
                    <label class="option">
                        <input type="radio" name="q${index}" value="${optIndex}">
                        ${option}
                    </label>
                `).join('')}
            </div>
            <div class="tip hidden">
                <strong>Подсказка:</strong> ${question.tip}
            </div>
        `;
        questionContainer.appendChild(questionElement);
    });

    // Показать подсказки при клике на вопрос
    document.querySelectorAll('.question-text').forEach(q => {
        q.addEventListener('click', () => {
            const tip = q.parentElement.querySelector('.tip');
            tip.classList.toggle('hidden');
        });
    });
}

function checkAnswers() {
    clearInterval(timerInterval);
    const questions = testData[currentVariant];
    let score = 0;
    userAnswers = [];

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = parseInt(selectedOption.value);
            userAnswers.push(userAnswer);
            if (userAnswer === question.correctAnswer) {
                score++;
            }
        } else {
            userAnswers.push(null);
        }
    });

    showResults(score, questions.length);
}

function showResults(score, total) {
    const resultsContainer = document.querySelector('.results-container');
    const scoreElement = document.querySelector('.score');
    const reviewElement = document.querySelector('.answers-review');
    
    resultsContainer.classList.remove('hidden');
    scoreElement.textContent = `Ваш результат: ${score} из ${total} (${Math.round(score/total * 100)}%)`;
    
    let reviewHTML = '<h3>Разбор ответов:</h3>';
    testData[currentVariant].forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        reviewHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>Вопрос ${index + 1}:</strong> ${question.question}</p>
                <p>Ваш ответ: ${userAnswer !== null ? question.options[userAnswer] : 'Не отвечено'}</p>
                <p>Правильный ответ: ${question.options[question.correctAnswer]}</p>
                <p>Подсказка: ${question.tip}</p>
            </div>
        `;
    });
    
    reviewElement.innerHTML = reviewHTML;
}

// Инициализация таймера
updateTimerDisplay(); 