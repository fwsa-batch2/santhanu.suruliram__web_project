let userList = [];

function onPageLoad() {
    let users = JSON.parse(localStorage.getItem("usersname"));
    if (users != null) {
        userList = users;
    }
}
onPageLoad();


function loginAlert() {
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
    else if(password != confirmPassword ) {
        alert("please check your password")
    } else {
        const customerDetail = {
            "username": username,
            "email": email,
            "phone-number": phno,
            "password": password,
            "confirmPassword": confirmPassword
        }

        userList.push(customerDetail);
        let userslists=JSON.stringify(userList);
        localStorage.setItem("usersname",userslists);
        window.location.href = "../../pages/tourlogin.html";
    }
}

function emailValid(current_email) {
    let isUsed = false;
    for (i = 0; i < userList.length; i++) {
        const user = userList[i];
        const email = user.email;
        if (current_email.to == email) {
            isUsed = true;
            break;
        }
    }
   return isUsed;
}




























