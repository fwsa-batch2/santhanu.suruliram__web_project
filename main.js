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
