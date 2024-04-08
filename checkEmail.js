function validateEmailByUsingTestMethod(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

const validateEmailByUsingMatchMethod = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const validateEmail = (email, nameMethod) => {
  const listWaysValidate = {
    usingTestMethod: validateEmailByUsingTestMethod,
    usingMatchMethod: validateEmailByUsingMatchMethod,
  };
  if (!listWaysValidate[nameMethod]) {
    throw Error("Invalid nameMethod");
  }
  return listWaysValidate[nameMethod](email);
};
const email = "example@example.com";
if (validateEmail(email, "usingMatchMethod")) {
  console.log("Địa chỉ email hợp lệ.");
} else {
  console.log("Địa chỉ email không hợp lệ.");
}

let questionTree = {
  questionInit: "Bạn làm nghề gì?",
  answers: [
    {
      answer: "Bác Sĩ",
      nextQuestion: {
        question: "Bạn là bác sĩ khoa nào?",
        answers: [
          {
            answer: "aaaa",
            nextQuestion: {
              question: "htht",
              answers: [],
            },
          },
        ],
      },
    },
    {
      answer: "Dev",
      nextQuestion: {
        question: "Bạn làm Developer ở công ty nào?",
        answers: [
          {
            answer: "aaaa",
            nextQuestion: {
              question: "htht",
              answers: [],
            },
          },
        ],
      },
    },
    {
      answer: "Kỹ sư",
      nextQuestion: {
        question: "Bạn làm kỹ sư chuyên ngành nào?",
        answers: [
          {
            answer: "aaaa",
            nextQuestion: {
              question: "htht",
              answers: [],
            },
          },
        ],
      },
    },
  ],
};

const newNode = questionTree.answers[0].nextQuestion;

newNode.question = "hahah";
console.log(newNode);
console.log(questionTree.answers[0]);
