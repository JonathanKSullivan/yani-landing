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

    document.querySelector(
      ".jumbotron .display-5 .typing"
    ).textContent = letter;
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
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};


// Get the age verification modal
var ageVerificationModal = document.getElementById("ageVerificationModal");

var closeAgeModal = document.getElementById("closeAgeModal");

// Get the VIP Video Chat link
var vipChatLink = document.getElementById("ageVerificationButton");

// When the VIP Video Chat link is clicked, show the age verification modal
vipChatLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the link from opening immediately
  ageVerificationModal.style.display = "block";
});

// Close modal on 'Proceed' button click and redirect to VIP Chat
document.getElementById("proceedButton").addEventListener("click", function () {
  window.location.href = "https://thevip.cammodels.com/?";
});

// Close modal on 'Cancel' button click or when X (close) is clicked
document.getElementById("cancelButton").addEventListener("click", function () {
  ageVerificationModal.style.display = "none";
});
closeAgeModal.onclick = function () {
  ageVerificationModal.style.display = "none";
};

// Close the age verification modal if clicked outside
// When the user clicks anywhere outside of either modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == ageVerificationModal) {
    ageVerificationModal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  themeIcon.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    // Update icon based on the theme
    if (body.classList.contains("dark-theme")) {
      themeIcon.textContent = "🌞"; // Icon for light mode
    } else {
      themeIcon.textContent = "🌓"; // Icon for dark mode
    }
  });

  // ... rest of your existing JS code ...
});



