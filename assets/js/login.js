function show_pass() {
  let checkBox = document.getElementById('show-pass');
  if (checkBox.checked) {
    document.getElementById('password').type = "text";
  }
  else {
    document.getElementById('password').type = "password";
  }
}
const userDetails = JSON.parse(localStorage.getItem("userList"));
let loggedinUsername;

function submitHandler(event) {
  event.preventDefault();
  let email = document.getElementById("email_box").value;
  let password = document.getElementById("password").value;
  const isExist = isUserExist(email, password);
  
  if (isExist) {
    localStorage.setItem("current_loggedin_user", JSON.stringify([email, loggedinUsername]));
    window.location.href = "./../../index.html"
  }
  else {
    document.getElementById('err_msg').innerText = "User Email or Password is incorrect!";
    return null;
  }
}
function isUserExist(paramemail, parampassword) {
  let isExist;
  if(userDetails == null){
    isExist = false;
  } else {
    let i;
  for ( i = 0; i < userDetails.length; i++) {
    const user = userDetails[i];
    const userEmail = user.email;
    const userPassword = user.password;
    loggedinUsername = user.username;
    if (userEmail === paramemail && userPassword === parampassword) {
      isExist = true;
      break;
    }
  }
  }
  return isExist;
}
function adminLogin() {
  document.getElementById('log-form').innerHTML = `<h3>Enter Admin Key:</h3>
  <input type="password" id="admin-key" required>
  <button type="submit" onclick = "adminSubmitHandler()" class="button" style="background-color:blue;">Submit</button>
  `;
  document.getElementById('admin-btn').style.display = "none";
}
function adminSubmitHandler() {
  const key = "tourtube";
  const keyFromUser = document.getElementById('admin-key').value;
  if(key == keyFromUser){
    localStorage.setItem("current_loggedin_user", JSON.stringify(['tourtubeinc@gmail.com', 'Admin']));
    window.location.href = "./../../index.html";
  }else {
    alert('The key is invalid, Try again!!');
  }
}