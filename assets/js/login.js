function show_pass() {
  let checkBox = document.getElementById('show-pass');

  if (checkBox.checked) {
    document.getElementById('password').type = "text";
  }
  else {
    document.getElementById('password').type = "password";
  }
}




function submitHandler(event) {
  event.preventDefault();

  let email = document.getElementById("email_box").value;
  let password = document.getElementById("password").value;

  const isExist = isUserExist(email, password);

  if (isExist) {
    localStorage.setItem("current_loggedin_user", email);
    window.location.href = "./../../index.html"
  }
  else {
    document.getElementById('err_msg').innerText = "User Email or Password is incorrect!";
    return null;
  }
}

function isUserExist(paramemail, parampassword) {
  let isExist = false;

  const userDetails = JSON.parse(localStorage.getItem("usersname"));
  let i;
  for ( i = 0; i < userDetails.length; i++) {
    const user = userDetails[i];
    const userEmail = user.email;
    const userPassword = user.password;
    if (userEmail === paramemail && userPassword === parampassword) {
      isExist = true;
      break;
    }
  }
  return isExist;

}