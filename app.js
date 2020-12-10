'use strict'
// クイズを作成
const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'ゲームキューブ',
      'ニンテンドーDS',
      'プレイステーション２',
      'ニンテンドースイッチ',
    ],
    correct: 'ニンテンドーDS'
  },
  {
    question: '次のうち、俳句の季語として認定されていないものはどれ？',
    answers: [
      'サザン',
      'チューブ',
      'ユーミン',
      '山下達郎',
    ],
    correct: 'チューブ'
  },
  {
    question: '次のうち、実際に北海道に存在する川はどれ？',
    answers: [
      'イトオシイ川',
      'クルオシイ川',
      'ヤリキレナイ川',
      'チョウシデナイ川',
    ],
    correct: 'ヤリキレナイ川'
  },
]

const $btn = document.getElementsByTagName('button');
const buttonLength = $btn.length;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  
  for(let i = 0; i < buttonLength; i++) {
    $btn[i].textContent = quiz[quizIndex].answers[i];
  };
};
setupQuiz();

//正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex ++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert(`終了！あなたの正解数は${score}/${quizLength}です！`);
    location.reload();
  }
}

for (let i = 0; i < buttonLength; i++) {
  $btn[i].addEventListener('click', (e)=> {
    clickHandler(e);
  })
}
