function avatarSelect() {
    event.preventDefault();
    let avatarLocation = document.getElementById('avatar-file').value;
    console.log(avatarLocation);
    document.getElementById('avatar').src = avatarLocation;
}
