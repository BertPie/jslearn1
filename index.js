window.addEventListener('DOMContentLoaded', (event) => {
  applyPathSettings();
});

function applyPathSettings() {
  let path = window.location.pathname;
  switch (path) {
    case '/create':
      displayCreate();
      break;
    case '/images':
      displayImage();
      break;
    default:
      displayGallery();
      break;
  }
}

// gallery ---------------------------------------------------------------------------------
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

function displayJson(json) {
  const gallery = document.querySelector('#gallery');
  for (var obj of json) {
    let galleryBox = document.createElement('div');
    galleryBox.className = "gallery-box";
    gallery.appendChild(galleryBox);

    let txt = document.createElement('p');
    txt.textContent = obj.title;
    galleryBox.appendChild(txt);

    let button = document.createElement('button');
    button.className = "delete-button";
    button.textContent = "delete";
    button.onclick = function () { deleteItem(obj.id) };
    galleryBox.appendChild(button);

    let img = document.createElement('img');
    img.src = obj.src;
    galleryBox.appendChild(img);
  }
}

function deleteItem(id) {
  let deleteEndPoint = "http://localhost:3000/images/" + id;
  fetch(deleteEndPoint, { method: 'delete' });
}

// create ---------------------------------------------------------------------------------
function displayCreate() {
  document.title = "Create | Academy"
  document.getElementById("create").style.display = 'inline';
}

// image ----------------------------------------------------------------------------------
function displayImage() {
  console.log('-- invoking: displayImage');

  document.title = "Image | Academy"
  document.getElementById("image").style.display = 'inline';
  let id = getPathParam();
  if (id == -1) {
    window.location.href = 'http://localhost:8080';
  }
  var promise = fetchJsonOfImage(id);
  promise.then(displayImageFromJson);
}

function getPathParam() {
  console.log('-- invoking: getPathParam');

  let regex = /^\?image=(\d+)$/;
  let search = window.location.search;
  if (!regex.test(search)) {
    return -1;
  }
  let result = regex.exec(search);
  return result[1];
}

function fetchJsonOfImage(id) {
  console.log('-- invoking: displayImageWithId');

  return fetch('http://localhost:3000/images/' + id)
    .then(resp => resp.json());
}

function displayImageFromJson(result) {
  console.log('-- invoking: displayImageWithId');

  document.getElementById("image-title").textContent = result.title;
  document.getElementById("image-author").textContent = result.author;
  document.getElementById("image-description").textContent = result.description;
  document.getElementById("display-image").src = result.src;
}
