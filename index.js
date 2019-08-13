
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
      setGallerySettings();
      break;
    case '/create':
      setCreateSettings();
      break;
    case '/images':
      setImageSettings();
      break;
  }
}

function setGallerySettings() {
  document.title = "Gallery | Academy"
  document.getElementById("gallery").style.display = 'inline';
}

function setCreateSettings() {
  document.title = "Create | Academy"
  document.getElementById("create").style.display = 'inline';
}

function setImageSettings() {
  document.title = "Image | Academy"
  document.getElementById("image").style.display = 'inline';
}
