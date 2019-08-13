
// Routes:
//   '' - gallery page
//   '/' - gallery page
//   '/images' - gallery page
//   'images/:id' - single image page
//   'create' - new image page

window.addEventListener('DOMContentLoaded', (event) => {
  applyPathSettings()
  console.log('path: ', window.location.pathname); // can be removed

  // TODO: your code is here
});

function applyPathSettings() {
  var path = window.location.pathname;
  switch (path) {
    case '/':
      displayGallery();
      break;
    case '/create':
      setCreateSettings();
      break;
    case '/images':
      setImageSettings();
      break;
  }
}

function displayGallery() {
  document.title = "Gallery | Academy";
  document.getElementById("gallery").style.display = 'inline';
  fetchImages();
}

function fetchImages() {
  fetch('http://localhost:3000/images')
    .then(resp => resp.json())
    .then(displayJson)
}

function displayJson(json){
  const gallery = document.querySelector('#gallery');
  for(var obj of json){
    let galleryBox = document.createElement('div');
    galleryBox.className = "gallery-box";
    gallery.appendChild(galleryBox);

    let img = document.createElement('img');
    img.src = obj.src;
    galleryBox.appendChild(img);
  
    console.log(obj.title)
  }
}

function setCreateSettings() {
  document.title = "Create | Academy"
  document.getElementById("create").style.display = 'inline';
}

function setImageSettings() {
  document.title = "Image | Academy"
  document.getElementById("image").style.display = 'inline';
}
