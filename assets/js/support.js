let feedbackList = [];
let feedbackObj;
function loadFromLs() {
    const getFromLS_feedbackList = JSON.parse(localStorage.getItem('feedbackList'));
    if (getFromLS_feedbackList != null){
        feedbackList = getFromLS_feedbackList;
        feedbackList.forEach(displayFeedback);
    }
}
loadFromLs();
function submitFeedback() {
    const feedback = document.getElementById('feedback-input').value;
    const rating = document.getElementById('rating').value;
    const getFromLsCurrentEmail = localStorage.getItem('current_loggedin_user');
    const getFromLS = JSON.parse(localStorage.getItem('usersname'));
    let i, username;
    if (getFromLsCurrentEmail == null){
        alert('Kindly Login before sending us your Feedback!');
    }
    else if(getFromLsCurrentEmail == "Admin"){
        console.log(getFromLsCurrentEmail)
        username = getFromLsCurrentEmail;
        feedbackObj = {
            'username' : username,
            'rating' : rating,
            'feedback': feedback,
        };
        feedbackList.unshift(feedbackObj);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
        window.location.reload();
    } 
    else {
        for (i=0; i < getFromLS.length; i++){
            const user = getFromLS[i];
            const email = user.email;
            if (getFromLsCurrentEmail == email){
                username = user.username;
                break;
            }
        }
        feedbackObj = {
            'username' : username,
            'rating' : rating,
            'feedback': feedback,
        }
        feedbackList.unshift(feedbackObj);
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
        window.location.reload();
    }
    
}
function displayFeedback(item) {
    document.getElementById('feedback-area').innerHTML += `<div id="fb-div"><div id="name">${item.username}</div> <br>
    <div><span id="star">${item.rating}</span> ${item.feedback}</div> </div>`
}
