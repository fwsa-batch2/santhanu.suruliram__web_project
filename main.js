var loggedInUser = localStorage.getItem('current_loggedin_user');
if(loggedInUser != null){
    document.getElementById('btn-area').innerHTML = '<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>';
    if (loggedInUser == "Admin") {
        document.getElementById('btn-area').innerHTML = `<button class="btns" style="background-color:green;" onclick="logOut()">Log Out</button>
        <a href="./pages/add-packages.html"><button class="btns">Add</button></a>`;
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
const packFromLs = JSON.parse(localStorage.getItem('addedPackages'));
function listNewPackages() {
    if ( packFromLs != null){
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
function search() {
    
    let searchInput = document.getElementById('search').value.toLowerCase;
    switch(searchInput){
        case "hawaii" : 
            console.log('working');
            window.location.href = "./pages/hawaii.html";
            break
        case "maldives" : 
            window.location.href = "./pages/Maldives.html";
            break
        case "egypt" :
            window.location.href = "./pages/Egypt.html";
            break
        case "kerala" :
            window.location.href = "./pages/Kerala.html";
            break
        case "china" :
            window.location.href = "./pages/Chinese_temple.html";
            break
    }
}
