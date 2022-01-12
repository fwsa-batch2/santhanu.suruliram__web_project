let userList = [];
function onPageLoad() {
    let getFromLs = JSON.parse(localStorage.getItem("usersname"));
    if (getFromLs != null) {
        userList = getFromLs;
    }
}
onPageLoad();
function submitHandler(event) {
    event.preventDefault();
    const username = document.getElementById("name_box").value;
    const email = document.getElementById("email_box").value;
    const phno = document.getElementById("phno_box").value;
    const password = document.getElementById("enter_pass").value;
    const confirmPassword = document.getElementById("confirm_pass").value;
    
    const isEmailAlreadyExist = emailValid(email);
    if(isEmailAlreadyExist){
        alert("Email already exist");
    }
    else if(username == "" ){
        alert('empty parameters');
    }
    else if(password != confirmPassword ) {
        alert("please check your password")
    } else {
        const customerDetail = {
            "username": username,
            "email": email,
            "phone-number": phno,
            "password": password,
        }
        userList.push(customerDetail);
        let userslists=JSON.stringify(userList);
        localStorage.setItem("usersname",userslists);
        alert('You have been successfully registered! You will be redirected to Login')
        window.location.href = "../../pages/tourlogin.html";
    }
}
function emailValid(current_email) {
    let isUsed = false;
    let i;
    for (i = 0; i < userList.length; i++) {
        const user = userList[i];
        const email = user.email;
        if (current_email == email) {
            isUsed = true;
            break;
        }
    }
   return isUsed;
}
function showPass() {
    const checkBox = document.getElementById('checkbox');
    if (checkBox.checked){
        document.getElementById('enter_pass').type = 'text';
        document.getElementById('confirm_pass').type = "text";
    } else {
        document.getElementById('enter_pass').type = 'password';
        document.getElementById('confirm_pass').type = "password";
    }
}
