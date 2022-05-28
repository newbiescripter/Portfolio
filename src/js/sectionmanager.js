// Controls The Sections

// Section Variables
var aboutme = document.getElementById("about-me");
var links = document.getElementById("links");
var skills = document.getElementById("skills");
var contactinfo = document.getElementById("contact-info");
var projects = document.getElementById("projects");

// Search Function

function keyupsearch(){
    // Declare variables
  var input, filter, container, section, name, i, txtValue, inviscount;
  inviscount = 0;
  input = document.getElementById('search-input');
  filter = input.value.toUpperCase();
  container = document.getElementById("section-container-main");
  section = container.getElementsByClassName('section-container');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < section.length; i++) {
    name = section[i].getElementsByClassName("sub-title-text")[0];
    txtValue = name.textContent || name.innerText || name.innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      section[i].style.display = "";
    } else {
      section[i].style.display = "none";
      inviscount = inviscount + 1;
      if(inviscount == section.length){
        console.warn('No Results Found');
        document.getElementById('no-results-found').style.display = "block";
      }
    }
  }
}

function clearinput(){
  var input = document.getElementById('search-input');
  input.value = "";
  input.dispatchEvent(new KeyboardEvent('keydown', {'key': 'spacebar'}));
  input.dispatchEvent(new KeyboardEvent('keyup', {'key': 'backspace'})); 
  document.getElementById('no-results-found').style.display = "none";
}
