function timelyMsg(){
    const hours = new Date.getHours();
    if (hours < 12){
        document.getElementById('imgdiv').classList.add('morning');
        document.getElementById('imgdiv').classList.remove('afternoon');
        document.getElementById('imgdiv').classList.remove('evening');
        document.getElementById('imgdiv').classList.remove('night');
    }
    else if (hours > 12 || hours < 16){
        document.getElementById('imgdiv').classList.remove('morning');
        document.getElementById('imgdiv').classList.add('afternoon');
        document.getElementById('imgdiv').classList.remove('evening');
        document.getElementById('imgdiv').classList.remove('night');
    }
    else if (hours > 16 || hours < 19){
        document.getElementById('imgdiv').classList.remove('morning');
        document.getElementById('imgdiv').classList.remove('afternoon');
        document.getElementById('imgdiv').classList.add('evening');
        document.getElementById('imgdiv').classList.remove('night');
    }
    else {
        document.getElementById('imgdiv').classList.remove('morning');
        document.getElementById('imgdiv').classList.remove('afternoon');
        document.getElementById('imgdiv').classList.remove('evening');
        document.getElementById('imgdiv').classList.add('night');
    }
}
timelyMsg();