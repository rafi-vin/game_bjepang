const questions = [
  {
    question: "EKO (nama orang)",
    options: ["エコ", "エコー", "エコウ", "エコオ"],
    answer: "エコ",
  },
  {
    question: "OKA (nama orang)",
    options: ["オカ", "オカー", "オカウ", "オカオ"],
    answer: "オカ",
  },
  {
    question: "IKA (nama orang)",
    options: ["イカ", "イカー", "イカウ", "イカオ"],
    answer: "イカ",
  },
  {
    question: "KEEKI (cake, kue bolu)",
    options: ["ケーキ", "ケキ", "ケーキー", "ケキウ"],
    answer: "ケーキ",
  },
  {
    question: "KIUI (kiwi)",
    options: ["キウイ", "キウィ", "キウー", "キウイイ"],
    answer: "キウイ",
  },
  {
    question: "KEA (care, merawat)",
    options: ["ケア", "ケーア", "ケアー", "ケアウ"],
    answer: "ケア",
  },
  {
    question: "SATE (nama makanan)",
    options: ["サテ", "サテー", "サテウ", "サテオ"],
    answer: "サテ",
  },
  {
    question: "SOTO (nama makanan)",
    options: ["ソト", "ソート", "ソトウ", "ソトオ"],
    answer: "ソト",
  },
  {
    question: "SUSI (nama orang)",
    options: ["スシ", "スシー", "スシウ", "スシオ"],
    answer: "スシ",
  },
  {
    question: "SUCI (nama orang)",
    options: ["スチ", "スチー", "スチウ", "スチオ"],
    answer: "スチ",
  },
  {
    question: "TSUAA (tur)",
    options: ["ツアー", "ツアア", "ツアウ", "ツアオ"],
    answer: "ツアー",
  },
  {
    question: "SEETAA (sweater)",
    options: ["セーター", "セータ", "セータア", "セータウ"],
    answer: "セーター",
  },
  {
    question: "NENI (nama orang)",
    options: ["ネニ", "ネニー", "ネニウ", "ネニオ"],
    answer: "ネニ",
  },
  {
    question: "NANI (nama orang)",
    options: ["ナニ", "ナニー", "ナニウ", "ナニオ"],
    answer: "ナニ",
  },
  {
    question: "NAIFU (pisau)",
    options: ["ナイフ", "ナイフー", "ナイフウ", "ナイフオ"],
    answer: "ナイフ",
  },
  {
    question: "KANUU (kano, sampan)",
    options: ["カヌー", "カヌウ", "カヌオ", "カヌア"],
    answer: "カヌー",
  },
  {
    question: "NOOTO (buku catatan)",
    options: ["ノート", "ノートー", "ノートウ", "ノートオ"],
    answer: "ノート",
  },
  {
    question: "KOOHII (kopi)",
    options: ["コーヒー", "コーヒ", "コーヒウ", "コーヒオ"],
    answer: "コーヒー",
  },
  {
    question: "OYO (nama orang)",
    options: ["オヨ", "オヨー", "オヨウ", "オヨオ"],
    answer: "オヨ",
  },
  {
    question: "MEMO (buku catatan)",
    options: ["メモ", "メモー", "メモウ", "メモオ"],
    answer: "メモ",
  },
  {
    question: "MOSUKU (masjid)",
    options: ["モスク", "モスクー", "モスクウ", "モスクオ"],
    answer: "モスク",
  },
  {
    question: "MIRUKU (milk, susu)",
    options: ["ミルク", "ミルクー", "ミルクウ", "ミルクオ"],
    answer: "ミルク",
  },
  {
    question: "MAIKU (pengeras suara, mikropon)",
    options: ["マイク", "マイクー", "マイクウ", "マイクオ"],
    answer: "マイク",
  },
  {
    question: "CHIIMU (tim)",
    options: ["チーム", "チームー", "チームウ", "チームオ"],
    answer: "チーム",
  },
  {
    question: "WAYAN (wayang)",
    options: ["ワヤン", "ワヤンー", "ワヤンウ", "ワヤンオ"],
    answer: "ワヤン",
  },
  {
    question: "HOTERU (hotel)",
    options: ["ホテル", "ホテルー", "ホテルウ", "ホテルオ"],
    answer: "ホテル",
  },
  {
    question: "YUURO (euro)",
    options: ["ユーロ", "ユーロー", "ユーロウ", "ユーロオ"],
    answer: "ユーロ",
  },
  {
    question: "AMERIKA (amerika)",
    options: ["アメリカ", "アメリカ", "アメリカー", "アメリカウ"],
    answer: "アメリカ",
  },
  {
    question: "RESUTORAN (restoran)",
    options: ["レストラン", "レストランー", "レストランウ", "レストランオ"],
    answer: "レストラン",
  },
  {
    question: "KORINTAN (kolintang)",
    options: ["コリンダン", "コリンダンー", "コリンダンウ", "コリンダンオ"],
    answer: "コリンダン",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const questionContainer = document.getElementById("question-container");

// Sembunyikan tombol "Next" di awal game
nextButton.style.display = "none";

// Fungsi untuk mengacak array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fungsi untuk menampilkan soal dengan efek fade
function showQuestion() {
  questionContainer.style.opacity = 0; // Sembunyikan kontainer soal
  setTimeout(() => {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Acak urutan opsi jawaban
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    optionsContainer.innerHTML = "";

    shuffledOptions.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });

    questionContainer.style.opacity = 1; // Tampilkan kembali kontainer soal
  }, 300); // Delay 300ms untuk efek fade
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
    resultText.textContent = "Benar! 🎉";
  } else {
    resultText.textContent = `Salah! Jawaban yang benar: ${currentQuestion.answer}`;
  }
  scoreText.textContent = `Skor: ${score}`;
  nextButton.style.display = "block"; // Tampilkan tombol "Next" setelah menjawab
  resultText.style.opacity = 1; // Tampilkan hasil jawaban dengan efek fade
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    resultText.textContent = "";
    resultText.style.opacity = 0; // Sembunyikan hasil jawaban
    nextButton.style.display = "none"; // Sembunyikan tombol "Next" lagi
  } else {
    endGame();
  }
}

function endGame() {
  questionText.textContent = "Permainan Selesai! 🎉";
  optionsContainer.innerHTML = `<p>Skor Akhir Anda: ${score}/${questions.length}</p>`;
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", nextQuestion);

// Mulai game
showQuestion();