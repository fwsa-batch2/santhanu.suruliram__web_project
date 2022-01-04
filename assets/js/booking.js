var imgInp = document.getElementById('file');
imgInp.onchange = function(){
  let files = imgInp.files;
  if (file) {
    document.getElementById('avatar').src = URL.createObjectURL(files[0]);
  }
};
let userBookings = [];
function onPageLoad() {
  let getFromLs = JSON.parse(localStorage.getItem("User-Bookings"));
  if (getFromLs != null) {
      userBookings = getFromLs;
  }
  const loggedInUser = localStorage.getItem('current_loggedin_user');
  if (loggedInUser == null){
    alert('Please Login, before Booking!');
    window.location.href = "../../pages/tourlogin.html" ;
  } 
}
onPageLoad();

function bookTrip(){
  event.preventDefault();
  const name = document.getElementById('name_box').value;
  const email = document.getElementById('email_box').value;
  const ccode = document.getElementById('ccode_box').value;
  const phno = document.getElementById('phno_box').value;
  const nAdults = document.getElementById('nAdults').value;
  const nChildren = document.getElementById('nChildren').value;
  const boardDate = document.getElementById('board-date').value;
  const endDate = document.getElementById('end-date').value;
  const place = JSON.parse(localStorage.getItem('tour-place'));
  const tripObj = {
    "name": name,
    "email": email,
    "phone_number": ccode + phno,
    "no_of_adults": nAdults,
    "no_of_children": nChildren,
    "date_of_boarding": boardDate,
    "date_of_ending": endDate,
    "destination": place
  }
    userBookings.push(tripObj);
    localStorage.setItem('User-Bookings', JSON.stringify(userBookings));
    alert('Your Booking is Successfull!');
    window.location.href = "./../../index.html";
}

