// function getFromLs(key) {
//     const fromLs = JSON.parse(localStorage.getItem(key));
//     let returnData = [];
//     if (fromLs != null){
//         returnData = fromLs;
//     }
//     return returnData;
// }
// loadAction();
// function loadAction() {
//     const loggedInUser = getFromLs('current_loggedin_user');
//     if(loggedInUser != null){
//         if (loggedInUser[1] == "Admin") {
//             document.getElementById('btn-area').innerHTML = `<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>
//             <a href="./pages/add-packages.html"><button class="btns">Add</button></a><span id="username-box"><img src="./assets/img/avatar.png" style="height:17px;">Admin</span>`;
//         } else{
//             document.getElementById('btn-area').innerHTML = '<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>'+ 
//             `<span id="username-box"><img src="./assets/img/avatar.png" style="height:17px;"> ${loggedInUser[1]}</span>`;
//         }
    
//     }
// }

// function loginRecommendation() { 
//     const loggedInUser = getFromLs('current_loggedin_user');
//     if(loggedInUser === null){
//         if (confirm('Please Login to get more Touring details!')){
//             window.location.href = "./pages/tourlogin.html";
//         }
//     }
// }
// setTimeout(loginRecommendation, 5000);
var loggedInUser = JSON.parse(localStorage.getItem('current_loggedin_user'));

if(loggedInUser != null){

    if (loggedInUser[1] == "Admin") {
        document.getElementById('btn-area').innerHTML = `<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>
        <a href="./pages/add-packages.html"><button class="btns">Add</button></a><span id="username-box"><img src="./assets/img/avatar.png" style="height:17px;">Admin</span>`;
    } else{
        document.getElementById('btn-area').innerHTML = '<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>'+ 
        `<span id="username-box"><img src="./assets/img/avatar.png" style="height:17px;"> ${loggedInUser[1]}</span>`;
    }

}
function loginRecommendation() {
    if(loggedInUser === null){
        if (confirm('Please Login to get more Touring details!')){
            window.location.href = "./pages/tourlogin.html";
        }
    }
}
setTimeout(loginRecommendation, 5000);
function bookPlace(place) {
    const tourDestin = JSON.stringify(place);
    localStorage.setItem('tour-place', tourDestin);
    window.location.href = "./pages/booking.html";
}
function logOut() {
    localStorage.removeItem('current_loggedin_user');
    window.location.reload();
}

function listNewPackages() {
    const packFromLs = JSON.parse(localStorage.getItem('addedPackage'));
    if (packFromLs != null){
        packFromLs.forEach(addPackages);
    }
}
listNewPackages();
function addPackages(item) {
    document.getElementById('tour-content').innerHTML += `<div>
    <a href=""><img src="${item.cover_image}" alt=""></a>
    <br> <h3>${item.place_name}</h3> <br>
    ${item.content} <br>
    <button type="button" class="btns-booking" onclick="bookPlace('${item.place_name}')">Book now</button>
    </div>`
}




