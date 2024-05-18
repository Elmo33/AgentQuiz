const questions = [
    {
        question: "კანონი უცხოელ აგენტებზე მხოლოდ რუსეთში მოქმედებს?",
        answers: [
            "კი, კანონი არის რუსული",
            "არა, მისი ვარიანტები გვხვდება სხვა ქვეყნებშიც, მათ შორის აშშ-ში, რუსეთში, ჩინეთში, ა.შ."
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! მსგავსი კანონი ბევრ ქვეყანას აქვს მიღებული, ქართული ვარიანტი განსხვავდება მისი მუხლებით და გამოყენების მასშტაბურობით.",
            incorrect: "არასწორია. ეს კანონი რუსების მოგონილი არ არის, აშშ-ში მაგალითად იგი 1938 წლიდან მოქმედებს. დამატებითი ინფორმაცია: https://www.justice.gov/nsd-fara"
        }
    },
    {
        question: "ეხება თუ არა უცხოელ აგენტებზე კანონი მხოლოდ მედია ორგანიზაციებს?",
        answers: [
            "დიახ",
            "არა, ის თითქმის ყველა ტიპის არასამთავრობო ორგანიზაციას ეხება"
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! კანონი ასევე არაერთ არასამთავრობო ორგანიზაციას ეხება, რამაც შესაძლოა მათი საქმიანობის შეფერხებას გამოიწვიოს. (მითითება: კანონის მუხლი 4, პუნქტი 1)",
            incorrect: "არასწორია. კანონი ფართო სპექტრის ორგანიზაციებს ეხება, მათ შორის არასამთავრობო ორგანიზაციებსაც. (მითითება: კანონის მუხლი 4, პუნქტი 1)"
        }
    },
    {
        question: "რატომ არის საქართველოში მიღებული კანონის ქართული ვერსია რუსული?",
        answers: [
            "იგი არ არის რუსული, და არაფერი არ აქვს საერთო რუსულ კანონთან.",
            "იგი მიიჩნევა რუსულად, რადგან საქართველოს ხელისუფლებას ეძლევა საშუალება ეს კანონი გამოიყენოს ზუსტად ისე, როგორც პუტინმა შეძლო ეს. "
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! ამ კანონის საშუალებით საქართველოს მთავრობას ეძლევა მრავალი უფლება, რომლებსაც გამოიყენებს ნებისმიერი არასამთავრობო ორგანიზაციის, ან მისი წევრის წინააღმდეგ, რომელთაც იგი ჩათვლის მისი ინტერესების მოწინააღმდეგედ. ",
            incorrect: "ამ კანონის ქართული ვერსია თითქმის ერთი-ერთში იმეორებს ზუსტად იმ ქვეპუნკტებს, რომელსაც რუსეთი იყენებს ოპოზიციის მოსპობასა და რეპრესიისათვის. "
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონი ორგანიზაციებს აიძულებს მათი დაფინანსების წყაროების გამჟღავნებას?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! ორგანიზაციებს მოუწევთ მათი დაფინანსების წყაროების გამჟღავნება, რაც შეიძლება იყოს შემაწუხებელი და ინტრუზიული. (მითითება: კანონის მუხლი 5, პუნქტი 2)",
            incorrect: "არასწორია. კანონი აიძულებს ორგანიზაციებს მათი დაფინანსების წყაროების გამჟღავნებას. (მითითება: კანონის მუხლი 5, პუნქტი 2)"
        }
    },
    {
        question: "მართალია, რომ საქართველოს უცხოელ აგენტებზე კანონი ორგანიზაციებს „უცხოელ აგენტებად“ მიიჩნევს თუ მათი დაფინანსების მხოლოდ 20% მოდის უცხოეთიდან?",
        answers: [
            "დიახ",
            "არა, გაცილებით მაღალია"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! მიუხედავად იმისა, რომ მცირე რაოდენობის უცხოური დაფინანსება შეიძლება მიიყვანოს ამ ეტიკეტს, რაც ორგანიზაციის სტიგმატიზაციას იწვევს. (მითითება: კანონის მუხლი 6, პუნქტი 1)",
            incorrect: "არასწორია. ზღვარი ნამდვილად არის 20%-ზე დაბალი, რაც პრობლემურია. (მითითება: კანონის მუხლი 6, პუნქტი 1)"
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონში შედის სასჯელები არაკეთილსინდისიერებისათვის?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! არსებობს მნიშვნელოვანი სასჯელები არაკეთილსინდისიერებისათვის, მათ შორის ჯარიმები და სხვა სანქციები. (მითითება: კანონის მუხლი 7, პუნქტი 3)",
            incorrect: "არასწორია. კანონი მოიცავს სასჯელებს მათთვის, ვინც არ შეასრულებს. (მითითება: კანონის მუხლი 7, პუნქტი 3)"
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონი უფრო ადვილად გახდის ორგანიზაციების დახურვას?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! კანონი მთავრობას უფრო მეტ უფლებას ანიჭებს ორგანიზაციების დახურვაზე, რომლებიც არ შეასრულებენ. (მითითება: კანონის მუხლი 8, პუნქტი 1)",
            incorrect: "არასწორია. კანონი უფრო ადვილად გახდის ორგანიზაციების დახურვას. (მითითება: კანონის მუხლი 8, პუნქტი 1)"
        }
    },
    {
        question: "ტერმინი „უცხოელი აგენტი“ ნეიტრალური და მიუკერძოებელი ითვლება ამ კანონის კონტექსტში?",
        answers: [
            "დიახ",
            "არა, მას უარყოფითი კონოტაცია აქვს"
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! ტერმინს უარყოფითი კონოტაცია აქვს და შეიძლება ზიანი მიაყენოს ეტიკეტირებულ ორგანიზაციებს. (მითითება: კანონის მუხლი 2, პუნქტი 4)",
            incorrect: "არასწორია. ტერმინი არ არის ნეიტრალური და ხშირად უარყოფითად ითვლება. (მითითება: კანონის მუხლი 2, პუნქტი 4)"
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონი გავლენას მოახდენს ორგანიზაციების საერთაშორისო დაფინანსების მიღების უნარზე?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! კანონი შეიძლება შეაფერხოს საერთაშორისო დონორები, რაც გავლენას მოახდენს სხვადასხვა ორგანიზაციების დაფინანსებაზე. (მითითება: კანონის მუხლი 9, პუნქტი 2)",
            incorrect: "არასწორია. კანონი ნამდვილად გავლენას მოახდენს საერთაშორისო დაფინანსების მიღების უნარზე. (მითითება: კანონის მუხლი 9, პუნქტი 2)"
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონი აწესებს მკაფიო მითითებებს თუ რა ითვლება უცხოურ გავლენად?",
        answers: [
            "დიახ",
            "არა, მითითებები ბუნდოვანია"
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! მითითებები ბუნდოვანია, რაც შეიძლება გამოიწვიოს თვითნებური აღსრულება. (მითითება: კანონის მუხლი 10, პუნქტი 1)",
            incorrect: "არასწორია. კანონის მითითებები არ არის მკაფიო და შეიძლება ინტერპრეტირებული იყოს სხვადასხვანაირად. (მითითება: კანონის მუხლი 10, პუნქტი 1)"
        }
    },
    {
        question: "არსებობს თუ არა ფართო მხარდაჭერა საქართველოს მოქალაქეებში უცხოელ აგენტებზე კანონისთვის?",
        answers: [
            "დიახ",
            "არა, არსებობს მნიშვნელოვანი წინააღმდეგობა"
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! საქართველოს მოქალაქეებში არსებობს მნიშვნელოვანი წინააღმდეგობა კანონის მიმართ. (მითითება: საზოგადოებრივი აზრის გამოკითხვები, 2024 წლის მარტი)",
            incorrect: "არასწორია. კანონი მნიშვნელოვანი წინააღმდეგობას ხვდება საზოგადოებაში. (მითითება: საზოგადოებრივი აზრის გამოკითხვები, 2024 წლის მარტი)"
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონი გავლენას მოახდენს სიტყვისა და გამოხატვის თავისუფლებაზე?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! კანონი შეიძლება მოახდინოს გავლენა სიტყვისა და გამოხატვის თავისუფლებაზე. (მითითება: კანონის მუხლი 11, პუნქტი 2)",
            incorrect: "არასწორია. კანონი გავლენას მოახდენს სიტყვისა და გამოხატვის თავისუფლებაზე. (მითითება: კანონის მუხლი 11, პუნქტი 2)"
        }
    },
    {
        question: "საქართველოს უცხოელ აგენტებზე კანონი საერთაშორისო ადამიანის უფლებათა სტანდარტებთან შესაბამისობაშია?",
        answers: [
            "დიახ",
            "არა, ის ეწინააღმდეგება მათ"
        ],
        correct: 1,
        feedback: {
            correct: "მართალია! კანონი ეწინააღმდეგება საერთაშორისო ადამიანის უფლებათა სტანდარტებს. (მითითება: Human Rights Watch Report, 2024)",
            incorrect: "არასწორია. კანონი არ შეესაბამება საერთაშორისო ადამიანის უფლებათა სტანდარტებს. (მითითება: Human Rights Watch Report, 2024)"
        }
    },
    {
        question: "არსებობს თუ არა რისკი, რომ საქართველოს უცხოელ აგენტებზე კანონი პოლიტიკური ოპონენტების მიზნად გამოყენებულ იქნეს?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! არსებობს მნიშვნელოვანი რისკი, რომ კანონი პოლიტიკური ოპონენტების მიზნად გამოყენებულ იქნეს. (მითითება: კანონის მუხლი 12, პუნქტი 3)",
            incorrect: "არასწორია. კანონი შეიძლება გამოიყენონ პოლიტიკური ოპონენტების მიზნად. (მითითება: კანონის მუხლი 12, პუნქტი 3)"
        }
    },
    {
        question: "თუ ვინმე ანონიმურად შეატყობინებს ორგანიზაციას, რომლის წევრიც ხართ, შეუძლია თუ არა მთავრობას მოთხოვოს ნებისმიერი სახის ინფორმაცია თქვენგან, მათ შორის პირადი მონაცემები, თქვენი სურათები და ტექსტები წლების წინ?",
        answers: [
            "დიახ",
            "არა"
        ],
        correct: 0,
        feedback: {
            correct: "მართალია! მთავრობას შეუძლია მოითხოვოს ფართო ინფორმაცია, მათ შორის პირადი მონაცემები. (მითითება: კანონის მუხლი 14, პუნქტი 2)",
            incorrect: "არასწორია. მთავრობას შეუძლია მოითხოვოს ფართო ინფორმაცია, მათ შორის პირადი მონაცემები. (მითითება: კანონის მუხლი 14, პუნქტი 2)"
        }
    }
];

let score = 0;
let currentQuestionIndex = 0;
let questionsAttempted = {};

function startQuiz() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    score = 0;
    currentQuestionIndex = 0;
    questionsAttempted = {};
    updateScore();
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];

    const questionImageContainer = document.getElementById('question-image');
    questionImageContainer.innerHTML = '';
    if (question.image) {
        const img = document.createElement('img');
        img.src = question.image;
        questionImageContainer.appendChild(img);
    }

    const questionTextContainer = document.getElementById('question-text');
    questionTextContainer.innerText = question.question;

    const feedbackContainer = document.getElementById('feedback');
    if (feedbackContainer) {
        feedbackContainer.remove();
    }

    const answerButtonsContainer = document.getElementById('answer-buttons');
    answerButtonsContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answerButtonsContainer.appendChild(button);
    });

    document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (!questionsAttempted[currentQuestionIndex]) {
        questionsAttempted[currentQuestionIndex] = { attempts: 0, correct: false };
    }

    let feedbackContainer = document.getElementById('feedback');
    if (!feedbackContainer) {
        feedbackContainer = document.createElement('div');
        feedbackContainer.id = 'feedback';
        document.getElementById('app').prepend(feedbackContainer);
    }

    if (index === question.correct) {
        questionsAttempted[currentQuestionIndex].correct = true;
        feedbackContainer.className = 'correct';
        feedbackContainer.innerText = question.feedback.correct;
        highlightAnswer(index, true);
        document.querySelectorAll('.btn-container button').forEach(btn => {
            btn.disabled = true;
        });
        document.getElementById('next-btn').style.display = 'block';
        if (questionsAttempted[currentQuestionIndex].attempts === 0) {
            score++;
            updateScore();
        }
    } else {
        questionsAttempted[currentQuestionIndex].attempts++;
        feedbackContainer.className = 'incorrect';
        feedbackContainer.innerText = question.feedback.incorrect;
        highlightAnswer(index, false);
        document.querySelectorAll('.btn-container button')[index].disabled = true;
    }
}

function highlightAnswer(index, isCorrect) {
    const buttons = document.querySelectorAll('.btn-container button');
    if (isCorrect) {
        buttons[index].style.borderColor = '#4CAF50';  // Green
    } else {
        buttons[index].style.borderColor = '#F44336';  // Red
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const resultText = document.getElementById('result-text');
    if (score <= 3) {
        resultText.innerText = "გილოცავ შენ მოიგე ბილეთი მოსკოვის მიმართულებით, კანონი ან არ გაქვს წაკითხული ან უბრალოდ პროპაგანდამ თავისი ქნა. ";
    } else if (score <= 7) {
        resultText.innerText = "რაღაც წარმოდგენა გაქვს კანონის შესახებ. კანონის გადაკითხვა თუ გეზარება ამ ქვიზის კითხვებს და პასუხებს მაინც ჩაუფიქრდი. ";
    } else if (score <= 11) {
        resultText.innerText = "კარგი წარმოდგენა გაქვს კანონის შესახებ მაგრამ ეს არ არის საკმარისი. გირჩევ ერთხელ გადაიკითხო და კარგად ჩაუღრმავდე საეჭვო პუნკტებს. ";
    } else if (score <= 14) {
        resultText.innerText = "საკმაოდ კარგი წარმოდგენა გაქვს კანონის შესახებ, ერთხელაც თუ გადაიკითხავ ლექსივით გეცოდინება. ";
    } else {
        resultText.innerText = "იურისტი ყოფილხარ შენ! უფლება გაქვს facebook-ის კომენტარებში დელუზიაში მყოფ ხალხს გამოფხიზლებისკენ მოუწოდო. ";
    }
}

function shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=https://yourquizwebsite.com&quote=I scored ${score} out of ${questions.length} on this quiz!`;
    window.open(url, '_blank');
}

function retakeQuiz() {
    startQuiz();
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerText = `ქულა: ${score}/${questions.length}`;
}