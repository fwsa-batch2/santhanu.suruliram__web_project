var imgInp = document.getElementById('file');
imgInp.onchange = function(){
  var files = imgInp.files;
  if (file) {
    document.getElementById('avatar').src = URL.createObjectURL(files[0]);
  }
};

