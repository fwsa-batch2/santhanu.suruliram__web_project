const tripFromLs = JSON.parse(localStorage.getItem('User-Bookings'));
function listTrip() {
    if (tripFromLs == null) {
        document.getElementById('trip-div').innerText = 'Your Trip list is Empty';
    } else{
        tripFromLs.forEach(listify);
    }
 }
listTrip();
function onPageLoad() {
    
function listify(item) {
    document.getElementById('trip-div').innerHTML += `<div>Touring Destination: <h4>${item.destination}</h4></div>
        <div>Date of Boarding: <h4>${item.date_of_boarding}</h4></div>
        <div>Date of Ending: <h4> ${item.date_of_ending} </h4> </div>
        <div> No. of Adults: <h4>${item.no_of_adults}</h4> </div> 
        <div> No. of Children: <h4> ${item.no_of_children}</h4> </div>
        <div> Applicant Details: <h4> ${item.name} ${item.email} ${item.phone_number}</h4> </div>
        <div> Payment Process: <h4> Pending </h4> </div>
        `
}
}