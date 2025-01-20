// to start with everything selected
filterChoice("everything")

// filter function
function filterChoice(input) {

  var galleryItem = document.getElementsByClassName(input);
      galleryReset = document.getElementsByClassName("galleryItem");

  lookingAt(input);

  // resets to all hidden
  for (var i = 0; i < galleryReset.length; i++) {
    galleryReset[i].style.display = "none"
  }

  // reveals specific classes
  for (var i = 0; i < galleryItem.length; i++) {
    galleryItem[i].style.display = "block";
  }
}

// Change you are looking at to add space between words
function lookingAt(input) {

  if (input == "stillimages") {
    document.getElementById("looking").innerHTML = "still images";
  } else if (input == "movingimages") {
    document.getElementById("looking").innerHTML = "moving images";
  } else {
    document.getElementById("looking").innerHTML = input;
  }
}

// Add active class to the current button (highlight it)
var button = document.getElementsByClassName("filterButton");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}

/*
W3Schools (2022) How TO - Filter Elements. Available at: https://www.w3schools.com/howto/howto_js_filter_elements.asp (Accessed 20/01/2022)

W3Schools (2022) Style display Property. Available at: https://www.w3schools.com/jsref/prop_style_display.asp (Accessed 20/01/2022)

W3Schools (2022) JavaScript Output. Available at: https://www.w3schools.com/js/js_output.asp (Accessed 20/01/2022)
*/













// end
