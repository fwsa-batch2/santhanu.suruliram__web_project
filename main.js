function timelyMsg(){
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 5 && hours < 12){
        console.log('morning');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/sunrise.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = '<h2>Good Morning!</h2>';
    }
    else if (hours >= 12 && hours < 17){
        console.log('afternoon');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/mid-day.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = '<h2>Good Afternoon!</h2>';
    }
    else if(hours >= 17 && hours < 20){
        console.log('evening');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/sunset.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = '<h2>Good Evening!</h2>';
    }
    else {
        console.log('night');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/night.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = '<h2>Good Night!</h2>';
    }
}
timelyMsg();
// want to simplify the code by just giving the src of img in js and as well as h2
var loggedInUser = localStorage.getItem('current_loggedin_user');
if(loggedInUser != null){
    document.getElementById('login').style.display = "none";
    document.getElementById('register').style.display = "none";
}
function loginRecommendation() {
    if(loggedInUser === null){
        if (confirm('Please Login to get more Touring details!')){
            window.location.href = "./pages/tourlogin.html";
        }
    }
}
setTimeout(loginRecommendation, 5000);


