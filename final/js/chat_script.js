document.addEventListener("DOMContentLoaded", () => {
  // 데이터
  const chatHistory = {
    1: [
      {
        year: 2022,
        question: "오늘은 몇월 몇일인가요?",
        answer: "2022년 12월 16일이요.",
      },
      {
        year: 2023,
        question: "오늘은 몇월 몇일인가요?",
        answer: "2023년 12월 15일이요.",
      },
      {
        year: 2024,
        question: "오늘은 몇월 몇일인가요?",
        answer: "2024년 12월 18일이요.",
      },
    ],
    2: [
      {
        year: 2022,
        question: "이름이 뭐예요?",
        answer: "김민경입니다.",
      },
      {
        year: 2023,
        question: "이름이 뭐예요?",
        answer: "김민경이요.",
      },
      {
        year: 2024,
        question: "이름이 뭐예요?",
        answer: "김민경이요.",
      },
    ],
    3: [
      {
        year: 2022,
        question: "당신은 몇살인가요?",
        answer: "21살이에요.",
      },
      {
        year: 2023,
        question: "당신은 몇살인가요?",
        answer: "22살입니다.",
      },
      {
        year: 2024,
        question: "당신은 몇살인가요?",
        answer: "23살 됐어요.",
      },
    ],
    4: [
      {
        year: 2022,
        question: "최근에 도전했던 새로운 일은 무엇인가요?",
        answer: "기타를 치기 시작했어요.",
      },
      {
        year: 2023,
        question: "최근에 도전했던 새로운 일은 무엇인가요?",
        answer: "아티클스터디를 하면서 지식을 좀 쌓아보려고 하고 있어요.",
      },
      {
        year: 2024,
        question: "최근에 도전했던 새로운 일은 무엇인가요?",
        answer:
          "올해 레슨을 시작했고, 불과 어제 레슨에 가서 새로운 곡을 시작했어요. 톤 조정하는 법도 배웠구요.",
      },
    ],
    5: [
      {
        year: 2022,
        question: "당신을 가장 행복하게 만드는 것은 무엇인가요?",
        answer: "방에서 기타치고, 친구들이랑 여행가는게 제일 행복한 것 같아요.",
      },
      {
        year: 2023,
        question: "당신을 가장 행복하게 만드는 것은 무엇인가요?",
        answer: "만화방에 가서 종일 누워있는게 좋아요.",
      },
      {
        year: 2024,
        question: "당신을 가장 행복하게 만드는 것은 무엇인가요?",
        answer: "",
      },
    ],
    6: [
      {
        year: 2022,
        question:
          "최근 읽은 책, 본 영화, 들은 음악 중 가장 기억에 남는 것은 무엇인가요?",
        answer: "음.. 더퍼스트 슬램덩크요. 농구가 하고 싶어요...",
      },
      {
        year: 2023,
        question:
          "최근 읽은 책, 본 영화, 들은 음악 중 가장 기억에 남는 것은 무엇인가요?",
        answer: "김승주의 엔진이요.",
      },
      {
        year: 2024,
        question:
          "최근 읽은 책, 본 영화, 들은 음악 중 가장 기억에 남는 것은 무엇인가요?",
        answer: "",
      },
    ],
    7: [
      {
        year: 2022,
        question: "당신이 가진 가장 큰 두려움은 무엇인가요?",
        answer: "실패에 대한 두려움이요.",
      },
      {
        year: 2023,
        question: "당신이 가진 가장 큰 두려움은 무엇인가요?",
        answer: "새로운 것에 도전하는 일?",
      },
      {
        year: 2024,
        question: "당신이 가진 가장 큰 두려움은 무엇인가요?",
        answer: "",
      },
    ],
    8: [
      {
        year: 2022,
        question: "현재 당신이 꿈꾸는 목표는 무엇인가요?",
        answer: "내년엔 좀 더 많이 놀면서 쉬고 싶어요.",
      },
      {
        year: 2023,
        question: "현재 당신이 꿈꾸는 목표는 무엇인가요?",
        answer: "내년 졸프를 잘 준비하고 싶어요.",
      },
      {
        year: 2024,
        question: "현재 당신이 꿈꾸는 목표는 무엇인가요?",
        answer: "",
      },
    ],
    9: [
      {
        year: 2022,
        question: "어렸을 때 꿈꿨던 당신의 모습과 지금은 어떻게 다른가요?",
        answer: "스물한살은 엄청난 어른일 줄 알았는데 여전히 잼민이에요.",
      },
      {
        year: 2023,
        question: "어렸을 때 꿈꿨던 당신의 모습과 지금은 어떻게 다른가요?",
        answer:
          "그래도 어렸을 적 꿈꾸던 만큼 세상이 좀 넓어진 것 같아요. 다만 상상하던 것보다 더 다채로워요.",
      },
      {
        year: 2024,
        question: "어렸을 때 꿈꿨던 당신의 모습과 지금은 어떻게 다른가요?",
        answer: "",
      },
    ],
    10: [
      {
        year: 2022,
        question: "작년의 나에게 해주고 싶은 말이 있나요?",
        answer: "좋은 선택이었다 얘얘",
      },
      {
        year: 2023,
        question: "작년의 나에게 해주고 싶은 말이 있나요?",
        answer: "기타 열심히 쳐라라.",
      },
      {
        year: 2024,
        question: "작년의 나에게 해주고 싶은 말이 있나요?",
        answer: "",
      },
    ],
  };

  const chatLog = document.querySelector(".chat-log");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const questionList = document.querySelector(".question-list");
  let currentQuestionId = null;

  if (!chatLog) {
    console.error("Chat log container not found.");
    return;
  }

  // 자동 스크롤 함수
  function scrollToBottom(container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }

  // 채팅 내용 로드
  function loadChat(id) {
    chatLog.innerHTML = ""; // 기존 채팅 로그 초기화
    const history = chatHistory[id]; // 선택한 질문의 채팅 데이터 가져오기

    if (!history) {
      chatLog.innerHTML = `<div class="message left">아직 대화 기록이 없습니다.</div>`;
      scrollToBottom(chatLog);
      return;
    }

    // 각 연도의 질문 및 답변 추가
    history.forEach(({ year, question, answer }) => {
      chatLog.innerHTML += `
              <div class="year-divider">${year}</div>
              <div class="message left">${question}</div>
              ${
                answer.trim()
                  ? `<div class="message right">${answer}</div>`
                  : ""
              }
          `;
    });

    scrollToBottom(chatLog); // 자동 스크롤
    console.log(`채팅 로드 완료 (ID: ${id})`); // 디버깅용
  }

  // 메시지 보내기
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message && currentQuestionId !== null) {
      const history = chatHistory[currentQuestionId];
      const currentYear = new Date().getFullYear();

      const currentEntry = history.find((entry) => entry.year === currentYear);
      if (currentEntry) {
        currentEntry.answer = message;
      } else {
        history.push({
          year: currentYear,
          question: "",
          answer: message,
        });
      }

      // 메시지 추가
      chatLog.innerHTML += `<div class="message right">${message}</div>`;
      messageInput.value = "";

      scrollToBottom(chatLog); //자동 스크롤
    }
  }

  // 읽음 상태에 따라 리스트 정렬
  function sortQuestions() {
    const questions = Array.from(questionList.querySelectorAll(".question"));
    const unreadQuestions = questions.filter((q) =>
      q.querySelector(".status").classList.contains("unread")
    ); // 안 읽은 질문
    const readQuestions = questions.filter((q) =>
      q.querySelector(".status").classList.contains("read")
    ); // 읽은 질문

    //정렬
    questionList.innerHTML = ""; // 기존 리스트 초기화
    unreadQuestions.forEach((q) => questionList.appendChild(q));
    readQuestions.forEach((q) => questionList.appendChild(q));
  }

  // 읽음 처리
  function markAsRead(questionElement) {
    const status = questionElement.querySelector(".status");
    if (status && status.classList.contains("unread")) {
      status.textContent = "✔"; // 읽음으로 표시
      status.classList.remove("unread");
      status.classList.add("read");
      sortQuestions();
    }
  }

  // 질문 클릭 이벤트
  document.addEventListener("click", (event) => {
    const questionElement = event.target.closest(".question"); // 클릭된 질문 요소
    if (!questionElement) return;

    document.querySelectorAll(".question").forEach((el) => {
      el.classList.remove("active");
    });
    questionElement.classList.add("active");

    currentQuestionId = parseInt(questionElement.dataset.id, 10);
    loadChat(currentQuestionId);

    // 읽음 처리 및 정렬
    markAsRead(questionElement);
  });

  // 전송 버튼 클릭 이벤트
  sendButton.addEventListener("click", () => {
    sendMessage();
  });

  // 전송 엔터키키 이벤트
  messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

  // 정렬 초기화
  sortQuestions();

  // 눈 효과
  const mainElement = document.querySelector(".main");

  if (mainElement) {
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow-container");
    mainElement.appendChild(snowContainer);

    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2~5초
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // 10~20px

      snowContainer.appendChild(snowflake);
    }
  }

  // 페이지 이동동
  const indexButton = document.getElementById("index-button");
  indexButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
