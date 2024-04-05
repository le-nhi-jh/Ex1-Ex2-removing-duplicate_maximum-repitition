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
