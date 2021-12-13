function timelyMsg(){
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12){
        console.log('morning');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/sunrise.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = 'Good Morning!';
    }
    else if (hours < 18){
        console.log('afternoon');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/mid-day.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = 'Good Afternoon!';
    }
    
    else {
        console.log('night');
        document.getElementById('imgdiv').innerHTML = '<img src="./assets/img/night.png" style="height: 50px;">';
        document.getElementById('msg').innerHTML = 'Good Night!';
    }
}
timelyMsg();