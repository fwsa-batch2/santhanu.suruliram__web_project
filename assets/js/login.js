// function loginHandler() {
//     event.preventDefault();
//     alert('started');
//     const current_name = document.getElementById('user_name_box').value;
//     const current_pass = document.getElementById('password').value;
//     let getFromLs = JSON.parse(localStorage.getItem('usersname'));
//     let bool = false;
//     for (i = 0; i < getFromLs.length; i++){
//         if (getFromLs[i].username == current_name && getFromLs[i].password == current_pass){
//             bool = true;
//             break;
//             return;
//         }
        
//     }
//     if (bool) {
//         alert('working');
//         // window.location.href="../index";
//     }
//     else {
//         alert('No account found!');
//     }
// }

function submitHandler(){
    //Get form values
    //Validate form credentials
    //Validate email and password in local storage
    //If invalid show error messges
    //Show success message
    //If valid Go to home page
    
    event.preventDefault();
   let userEmail = document.getElementById("user_name_box").value;
   let userPass = document.getElementById("password").value;
   let userCredentials = JSON.parse(localStorage.getItem("usersname"));
   let len = userCredentials.length;

   let isUserExist = false;

   for (i = 0; i < len; i++) {

     let email = userCredentials[i].email;
     let password = userCredentials[i].password;

     if (userEmail == email && userPass == password) {
       isUserExist=true;
       break;
     }

   }


   if(isUserExist){
        alert("Welcome!You have logged in successfully.");
        window.location.href="../../index.html";
   }else{
          alert('Email or Password Invalid!');
   }
  
 }