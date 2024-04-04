const checkPassword = (password) => {
  if (password.length < 8) {
    console.log("Password must at least 8 character");
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    console.log("Password must contain at least 1 uppercase letter");
    return false;
  }
  if (!/[a-z]/.test(password)) {
    console.log("Password must contain at least 1 lowercase letter");
    return false;
  }
  if (!/\d/.test(password)) {
    console.log("Password must contain at least 1 number");
    return false;
  }
  if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
    console.log("Password must contain at least 1 special letter");
    return false;
  }

  return true;
};

const password = "123abc1B";

console.log(checkPassword(password));
