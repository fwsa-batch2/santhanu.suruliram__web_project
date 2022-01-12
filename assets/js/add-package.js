var imgInp = document.getElementById('file');
imgInp.onchange = function(){
let files = imgInp.files;
if (file) {
    document.getElementById('img').src = URL.createObjectURL(files[0]);
    }};
var imgFile = document.getElementById("img");
var imgAsDataURL;
imgFile.addEventListener("load", function () {
    var imgCanvas = document.createElement("canvas"),
    imgContext = imgCanvas.getContext("2d");
    imgCanvas.width = imgFile.width;
    imgCanvas.height = imgFile.height;
    imgContext.drawImage(imgFile, 0, 0, imgFile.width, imgFile.height);
    imgAsDataURL = imgCanvas.toDataURL("image/png");
    try {
        localStorage.setItem("image-in-ls", imgAsDataURL);
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
    return imgAsDataURL;
    }, false); 
let packList = [];
function onPageLoad() {
    const getFromLs = JSON.parse(localStorage.getItem('addedPackages'));
    if (getFromLs != null){
        packList = getFromLs;
        return packList;
    }
}
onPageLoad();
function addPackage() {
    const placeName = document.getElementById('place-name').value;
    const content = document.getElementById('content').value;
    const packObj = {
        'place_name' : placeName,
        'cover_image' : imgAsDataURL,
        'content' : content
    }
    packList.push(packObj);
    localStorage.setItem('addedPackages', JSON.stringify(packList));
    alert('Package added Successfully!!');
    window.location.reload();
}