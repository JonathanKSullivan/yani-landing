document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  // Interactive Hero Section Typing Effect
  const heroTexts = ["Explore", "Connect", "Grow"];
  let heroIndex = 0;
  let index = 0; // Define 'index' outside the function
  let currentText = "";
  let letter = "";

  (function type() {
    if (heroIndex === heroTexts.length) {
      heroIndex = 0;
    }
    currentText = heroTexts[heroIndex];
    letter = currentText.slice(0, ++index);

    document.querySelector(".jumbotron .display-5 .typing").textContent =
       letter;
    if (letter.length === currentText.length) {
      heroIndex++;
      index = 0; // Reset index for the next word
      setTimeout(type, 2000); // Wait before starting the next text
    } else {
      setTimeout(type, 120); // Typing speed
    }
  })();

  // Card Hover Effect for Interactive Spaces
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("shadow-lg"); // Add larger shadow on hover
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-lg"); // Remove shadow when not hovered
    });
  });

  // Dynamic Theme Switcher (if you have a toggle switch in your HTML)
  const themeSwitch = document.querySelector(".theme-switch");
  if (themeSwitch) {
    themeSwitch.addEventListener("change", (e) => {
      document.body.classList.toggle("dark-theme", e.target.checked);
    });
  }

  // Footer Date Update
  const year = new Date().getFullYear();
  document.querySelector(
    "footer p"
  ).textContent = `© ${year} The Yani Mingle - Your Hub for Diverse Conversations`;
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
