let playerNickname = '';
let box = document.querySelector(".bg-image");

const clickSound = new Audio('audio/звукНажатия.mp3'); 
clickSound.volume = 0.3;

document.querySelectorAll('.sound-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0; // 
    clickSound.play();
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.btn-purple');

  // Каждая иконка — это объект с путём и желаемым размером
  const icons = [
    { src: '/img/Взрыв1.png', size: 24 },
    { src: '/img/Взрыв2.png', size: 30 },
    { src: '/img/Взрыв3.png', size: 20 },
    { src: '/img/Взрыв4.png', size: 28 },
    { src: '/img/Взрыв5.png', size: 26 },
    { src: '/img/Взрыв6.png', size: 60 },
    { src: '/img/Взрыв7.png', size: 50 }
  ];

  btn.addEventListener('click', () => {
    const rect = btn.getBoundingClientRect();
    const offsetX = rect.left + rect.width / 2;
    const offsetY = rect.top + rect.height / 2;

    btn.style.visibility = 'hidden';

    const sound = document.getElementById('explosionSound');
    sound.currentTime = 0; // сброс звука, если быстро нажимают несколько раз
    sound.play();

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const icon = icons[Math.floor(Math.random() * icons.length)];

      particle.innerHTML = `<img src="${icon.src}" width="${icon.size}" height="${icon.size}" style="image-rendering: pixelated;">`;

      particle.style.position = 'fixed';
      particle.style.left = offsetX + 'px';
      particle.style.top = offsetY + 'px';
      particle.style.zIndex = 9999;
      particle.style.pointerEvents = 'none';

      const dx = (Math.random() - 0.5) * 300;
      const dy = (Math.random() - 0.5) * 300;

      particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.5)`, opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      });

      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicToggle');
  const icon = document.getElementById('musicIcon');

  let musicStarted = false;

  function startMusicOnce() {
    if (!musicStarted) {
      music.volume = 0.1;
      music.play().catch(() => {});
      musicStarted = true;
    }
  }

  // Автозапуск музыки при первом клике
  document.addEventListener('click', startMusicOnce, { once: true });

  // Переключатель музыки по кнопке
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // чтобы не срабатывал автозапуск заново

    if (music.paused) {
      music.play();
      icon.src = "img/musicOn.png"; // твоя иконка "вкл"
    } else {
      music.pause();
      icon.src = "img/musicOff.png"; // твоя иконка "выкл"
    }
  });
});


function letsGo() {
  document.getElementById("text").innerHTML ="Хах, я даже не сомневался!<br>Ну ладно, перед тем как начать — напиши <br><br>свой никнейм,<br><br>чтобы я знал, как к тебе обращаться.";

  let button = document.getElementById("btnPurple");
  button.remove();
  let button1 = document.getElementById("btnWhite");
  button1.remove();
  box.style.opacity = 0;
  setTimeout(function() {
    box.style.backgroundImage = "url('img/Хах.png')";
    box.style.opacity = 1;
    document.querySelector(".bg-image").style.top = "54%";
    document.querySelector(".bg-image").style.right = "60%";
    document.querySelector(".bg-image").style.width = "390px";
    document.querySelector(".bg-image").style.height = "390px";
  }, 400);
  let nick = document.querySelector(".input-field")
  nick.style.display = "block";
  let a1Nick = document.querySelector(".btn-white.a1")
  a1Nick.style.display = "block"
}


// Снизу код , относится к проверку ника 
  const errorSounds = [
  'audio/wrong1.mp3',
  'audio/wrong2.mp3',
  'audio/wrong3.mp3'
  ];
  function playRandomErrorSound() {
  const randomIndex = Math.floor(Math.random() * errorSounds.length);
  const audio = new Audio(errorSounds[randomIndex]);
  audio.volume = 0.3;
  audio.play();
  }

function spawnErrorParticles() {
  const input = document.getElementById('nickname');
  const rect = input.getBoundingClientRect();

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.innerHTML = `<img src="/img/angry.png" width="32" height="32" style="image-rendering: pixelated;">`;

    particle.style.position = 'fixed';

    // Случайная точка по краю контейнера
    let side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let startX, startY;

    if (side === 0) { // top
      startX = rect.left + Math.random() * rect.width;
      startY = rect.top;
    } else if (side === 1) { // right
      startX = rect.right;
      startY = rect.top + Math.random() * rect.height;
    } else if (side === 2) { // bottom
      startX = rect.left + Math.random() * rect.width;
      startY = rect.bottom;
    } else { // left
      startX = rect.left;
      startY = rect.top + Math.random() * rect.height;
    }

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    particle.style.zIndex = 9999;
    particle.style.pointerEvents = 'none';

    // Случайное направление движения (отталкиваем частицы наружу)
    const dx = (Math.random() - 0.5) * 400;
    const dy = (Math.random() - 0.5) * 400;

    particle.animate([
      { transform: 'translate(0, 0)', opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) scale(0.7)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: 'ease-out'
    });

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}


function Error1() {
  const container = document.getElementById('error-container');
  let nickname = document.getElementById("nickname").value.trim();
  const container1 = document.getElementById('his-name');

  const regex = /^[a-zA-Zа-яА-Я0-9_]+$/; // Разрешённые символы
  let message = '';
  
  if (nickname.length < 3) {
    message = "Ник должен быть не меньше 3 символов.";
  } else if (!regex.test(nickname)) {
    message = "Ник может содержать только буквы (рус/англ), цифры и _";
  } else {
    playerNickname = nickname;
    alert("Ник принят: " + nickname);
    const toast1 = document.createElement('div');
    toast1.classList.add('his-toast');

    toast1.innerHTML = `
      <div>
        <p style="margin: 0;">Его имя ${playerNickname} </p>
      </div>
    `;
    container1.appendChild(toast1);
    setTimeout(() => {
      toast1.classList.add('show');
    }, 10);

    // Авто-исчезновение через 3 секунды
    setTimeout(() => {
      toast1.classList.remove('show');
      toast1.classList.add('hide');
      setTimeout(() => {
        toast1.remove();
      }, 500);
    }, 3000);
    playCleaningSound();

    box.style.opacity = 0;
    setTimeout(() => {
    box.style.backgroundImage = "url('img/Думаю.png')";
    box.style.opacity = 1;
    document.querySelector(".bg-image").style.top = "40%";
    document.querySelector(".bg-image").style.right = "60%";
    document.querySelector(".bg-image").style.width = "550px";
    document.querySelector(".bg-image").style.height = "550px";
    }, 400);

    let nick = document.querySelector(".input-field")
    nick.style.display = "none";
    let a2Nick = document.querySelector(".btn-white.a2")
    a2Nick.style.display = "block"
    let a1Nick = document.querySelector(".btn-white.a1")
    a1Nick.style.display = "none"

    document.getElementById("text").innerHTML =`Значит, ${playerNickname}, понятно. <br><br> Ну что ж, ${playerNickname}<br> давай начнём нашу викторину!`;
    return; // Если ошибок нет — выход
  }

  // Создаём тост
  const toast = document.createElement('div');
  toast.classList.add('error-toast');


  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <img src="/img/Error.png" alt="Ошибка" style="width: 25px; height: 25px;">
      <p style="margin: 0;">${message}</p>
    </div>
  `;

  container.appendChild(toast);

  // Плавное появление
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Авто-исчезновение через 3 секунды
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
  
    // --- Запускаем звук
  playRandomErrorSound();

  // --- Запускаем частицы
  spawnErrorParticles();

}

const cleaningSounds = (
'/audio/cleaning.mp3'
);
function playCleaningSound(){
const audio = new Audio(cleaningSounds);
audio.volume = 0.3;
audio.play();
}
function Next() {
  box.style.opacity = 0;
  setTimeout(() => {
  box.style.backgroundImage = "url('img/Эй.png')";
  box.style.opacity = 1;
  document.querySelector(".bg-image").style.top = "49%";
  document.querySelector(".bg-image").style.right = "65%";
  document.querySelector(".bg-image").style.width = "510px";
  document.querySelector(".bg-image").style.height = "510px";
  }, 400);

  document.getElementById("text").innerHTML ="Но перед тем как начать, хочу тебя предупредить: вопросы действительно сложные. Ответить на них сможет только настоящий олд, который был участником ещё до открытия сервера. Так что не уверен, что у тебя получится справиться. В любом случае — желаю удачи! (И да, не вздумай запоминать ответы и переигрывать викторину заново, чтобы получить секретную награду 😉)";
  let size = document.querySelector(".line1")
  size.style.fontSize = "18px"

  let a2Nick = document.querySelector(".btn-white.a3")
  a2Nick.style.display = "block"
  let a1Nick = document.querySelector(".btn-white.a2")
  a1Nick.style.display = "none"
}

function Next1() {
  box.style.opacity = 0;
  setTimeout(() => {
  box.style.backgroundImage = "url('img/Начали.png')";
  box.style.opacity = 1;
  document.querySelector(".bg-image").style.top = "150%";
  document.querySelector(".bg-image").style.right = "75%";
  document.querySelector(".bg-image").style.width = "510px";
  document.querySelector(".bg-image").style.height = "510px";
  }, 400);

  let frame = document.querySelector(".cell")
  frame.style.border = "3px solid rgb(117, 52, 239)"
  frame.style.animation = "pulse-glow-blue 8s infinite ease-in-out"
  frame.style.marginTop = "-550px"
  frame.style.borderRadius = "20px"

  document.getElementById("text").innerHTML ="Ну что ж, начнём! А теперь — первый вопрос: <br> Кто был самым первым судьёй на сервере?";

  let a1Nick = document.querySelector(".btn-white.a3")
  a1Nick.style.display = "none"
  let question = document.querySelector(".question-everything")
  question.style.display = "flex"

  loadQuestion(currentQuestionIndex);
}

const questions = [
  {
    text: "Кто был первым судьёй на сервере?",
    answers: ["OrniO", "I_OproO", "Jakets", "EndGame_NOne"],
    correctIndex: 2,
    correctResponse: "✅ Отлично, это был именно Jakets!",
    wrongResponse: "Ого, первый вопрос — и уже ошибка? <br>Хех, хотя я ведь тебя предупреждал 😏",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Кто был самым первым мэром на сервере?",
    answers: ["Climsy", "EndGame_NOne", "Wave404", "Wefody"],
    correctIndex: 3,
    correctResponse:"✅Да, это был Wefody (кстати, именно у него я и украл некоторые вопросы 😄).",
    wrongResponse: "❌Нет, первым мэром был Wefody, а не этот тип.",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Кто был самым первым архитектором спавна на сервере?",
    answers: ["EndGame_NOne", "Jakets", "Climsy", "Zelker_"],
    correctIndex: 0,
    correctResponse:"Ага, этот негодник и был архитектором спавна!",
    wrongResponse: "Честно, я понимаю, почему ты ошибся — сам до сих пор не верю, что он был архитектором!",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Кто изображён на этой картине?",
    image: "img/Евлампий.png",
    answers: ["Лигало младший", "Афанасий", "Евгений", "Евлампий"],
    correctIndex: 3,
    correctResponse:"Легенды гласят, что самый живучий спрут на планете — это, конечно же, Евлампий.",
    wrongResponse: "Как можно не знать имя самого большого спрута на спавне?",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Кем были трое главных админов сервера?",
    answers: ["Veizzy Zelker_ Wartslav", "Ligalo_soso abe_aba Andani", "3procenta Pirych HardRedux", "Mr_crazy76 yalliex ME10y"],
    correctIndex: 0,
    correctResponse:"Эх, они были лучшими админами... Надеюсь, однажды снова ими станут.",
    wrongResponse: "Знать админов — это база. Не знаешь? Срочно на пересдачу! (ну, или просто следующий вопрос 😄)",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Кто из админов обычно отвечает за медиа?",
    answers: ["Veizzy", "Wartslav", "Zelker_", "scrimers"],
    correctIndex: 1,
    correctResponse:"Вот ведь ирония — если бы не его видео, я бы никогда не попал на этот проект!",
    wrongResponse: "О, позор! Не знать того, кто оживлял сервер своими видео! Как ты мог?",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Узнаёшь место? Кто был автором этой общественной чаровальни?",
    image: "img/Чаровальня.png",
    answers: ["Wefody", "tect13", "Runusik", "MakpoTa"],
    correctIndex: 3,
    correctResponse:"Вроде как это было первое общественное деяние от игроков🤔",
    wrongResponse: "Ну надо же! Пользовался всё это время, а даже не знал, кто это построил. Теперь будешь знать!",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Когда был открыт сервер?",
    answers: ["15 авг 2024г", "18 авг 2024г", "28 авг 2024г", "16 авг 2024г"],
    correctIndex: 3,
    correctResponse:"Эх, с этого всё и началось… Людей было — не сосчитать!",
    wrongResponse: "Честно говоря, я и сам не помню😅",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Имя того, кто возвёл статую Иссуса, давно стало легендой... А помнишь ли ты его имя?",
    answers: ["Heshdayn", "Jakets", "SoKra", "Microvolnovkin"],
    correctIndex: 1,
    correctResponse:"Точно! Это ведь было первое действительно масштабное сооружение на сервере.",
    wrongResponse: "Ты заходил в ад, видел это… но не знал, кто за ним стоит. Теперь знаешь",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
  {
    text: "Имя того, кто снова и снова разрушал спавн, скрываясь под разными никами... ты его помнишь?",
    answers: ["Ya_DamL", "M1FFEX", "xx11rrls", "Frazzychka"],
    correctIndex: 0,
    correctResponse:"Вот он злой гений (без ни ?)",
    wrongResponse: "Если не знаешь — значит, просто не довелось столкнуться.",
    correctImage: "img/Правильно.png",
    wrongImage: "img/Уже.png"
  },
];

let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

const questionButtons = document.querySelectorAll('.question');
const nextBtn = document.getElementById('nextBtn');

let isAnswered = false;

function loadQuestion(index) {
  const q = questions[index];
  isAnswered = false;

  // Показываем стандартную "начальную" картинку
  updateBoxImage("/img/Начали.png", "150%", "75%", "510px", "510px");

  let textHTML = q.text;
  document.getElementById("text").innerHTML = textHTML;

  questionButtons.forEach((btn, i) => {
    btn.textContent = q.answers[i];
    btn.classList.remove('correct', 'wrong');
    btn.disabled = false;
  });

  nextBtn.style.display = "none";
  nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      if (currentQuestionIndex >= questions.length) {
        showFinalResults();
        return;
      }

      document.getElementById("text").innerHTML = `Викторина окончена!<br>✅ Правильных: ${correctCount}<br>❌ Неправильных: ${wrongCount}`;
      questionButtons.forEach(btn => btn.style.display = "none");
      nextBtn.style.display = "none";
    }
  };

  questionButtons.forEach((btn, i) => {

  if (index === 4) { // 5-й вопрос (нумерация с нуля)
    questionButtons.forEach(btn => {
      btn.style.fontSize = "16px";
      btn.style.lineHeight = "1.2";
    });
  } else {
    questionButtons.forEach(btn => {
      btn.style.fontSize = "20px"; 
      btn.style.lineHeight = "1.5";
    });
  }

    btn.onclick = () => {
      if (isAnswered) return;
      isAnswered = true;

      if (i === q.correctIndex) {
        btn.classList.add('correct');
        correctCount++;
        document.getElementById("text").innerHTML = q.correctResponse;
        updateBoxImage(q.correctImage, "130px", "540px", "520px", "520px");
        playCleaningSoundTwo();
      } else {
        wrongCount++;
        btn.classList.add('wrong');
        questionButtons[q.correctIndex].classList.add('correct');
        document.getElementById("text").innerHTML = q.wrongResponse;
        updateBoxImage(q.wrongImage, "100%", "460px", "630px", "630px");
        playCleaningSoundOne();
      }

      questionButtons.forEach(b => b.disabled = true);
      nextBtn.style.display = "inline-block";
    };
  });

  const imageContainer = document.getElementById("image-container");
  if (q.image) {
    imageContainer.innerHTML = `<img src="${q.image}" alt="Вопрос" class="question-image">`;
  } else {
    imageContainer.innerHTML = "";
  }
}



function updateBoxImage(imagePath, top = "54%", left = "60%", width = "390px", height = "390px") {
  box.style.opacity = 0;
  setTimeout(() => {
    box.style.backgroundImage = `url('${imagePath}')`;
    box.style.top = top;
    box.style.right = left;
    box.style.width = width;
    box.style.opacity = 1;
  }, 400);
}



// loadQuestion(currentQuestionIndex);

function playCleaningSoundOne() {
  const audio = document.getElementById('wrongSound');
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(e => {
      console.error("Ошибка воспроизведения аудио:", e);
    });
  }
}
function playCleaningSoundTwo() {
  const audio = document.getElementById('rightSound');
  if (audio) {
    audio.currentTime = 0;
    audio.volume = 0.3;
    audio.play().catch(e => {
      console.error("Правильное воспроизведения аудио:", e);
    });
  }
}

function showFinalResults() {
  const container = document.querySelector(".cell");
  const imageContainer = document.getElementById("image-container");

  // Скрыть кнопки ответов
  questionButtons.forEach(btn => {
    btn.style.display = "none";
  });

  // Скрыть кнопку "Продолжить"
  nextBtn.style.display = "none";

  // Очистить контейнеры
  container.innerHTML = "";
  imageContainer.innerHTML = "";

  // Создаём блок с текстом результатов
  const resultBlock = document.createElement("div");
  var cell = document.querySelector(".cell")
  cell.style.position = "absolute"
  cell.style.top = "575px"
  resultBlock.classList.add("line1");
  resultBlock.style.textAlign = "center";
  resultBlock.style.fontSize = "18px";
  resultBlock.style.lineHeight = "1.6";
  resultBlock.style.top = "500px"
  resultBlock.innerHTML = `
    <p><strong>Результаты викторины Effdor для игрока ${playerNickname}:</strong></p>
    <p>✅ Правильных ответов: <strong>${correctCount}</strong> из 10</p>
    <p>❌ Неправильных: <strong>${10 - correctCount}</strong></p>
    <p>Спасибо за участие в проекте <strong>Effdor</strong>!<br>
    Я очень рад, что вы прошли на мою викторину.<br>
    Огромное спасибо всем игрокам, администраторам<br>
    и тем, кто помогает Effdor развиваться! ❤️</p>
  `;

  container.appendChild(resultBlock);

  // Картинка финала
  const finalImg = document.createElement("img");
  finalImg.src = "img/love.png";
  finalImg.alt = "Спасибо за участие";
  finalImg.classList.add("question-image");

  finalImg.style.marginTop = "30px";
  finalImg.style.top = "300px";
  finalImg.style.width = "600px";
  finalImg.style.right = "30px";
  finalImg.style.animation = "fadeIn 0.6s ease forwards";
  container.appendChild(finalImg);

}


