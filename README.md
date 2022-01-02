### html-project-template
# Netlify Link : https://tourtubeapp-ui-santhanu.netlify.app/
# Main Link : https://tourtube.fwsa.in/

### Features
1. Login Page (Completed)
2. Registration page (Completed)
3. Forgot password (completed)

### Register Page

* All inputs fields are mandatory
* Username can't be empty and username should contain atleast 3 characters 
* Email Id should contain atleast two characters before "@" and should have "."
* Password should have minimum 8 characters and it should have atleast one uppercase and special chracter

### Login Page

* All the input fields are manadatory to login in the account.
* Email and Password should be registered already in the localstorage if it doesn't match the user is asked to create a account
* Both the fields should match to the details already stored even anyone of the field doesn't match it will show an alert
* If all the fields are matched correctly the user will be redirected to the main page

### Forgot password Page
* A 6 digit random code is sent to the users registered email.
* Un-registered email is not accepted.
* New password and confirm password input boxes unlocks, after entering the correct 6 digit code.
* The new password is update to the local storage, and redirects to the login page.