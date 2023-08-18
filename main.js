let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    console.log("clicked");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
// Get all the section elements
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".links a");

// Add click event listeners to each link
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove the "active" class from all links
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked link
    e.target.classList.add("active");
  });
});

// Listen for the scroll event
window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  // Loop through each section and determine which one is currently visible
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      currentScrollPos >= sectionTop &&
      currentScrollPos < sectionTop + sectionHeight
    ) {
      // Remove the "active" class from all links
      document.querySelectorAll(".links li a").forEach((link) => {
        link.classList.remove("active");
      });

      // Add the "active" class to the corresponding link
      const correspondingLink = document.querySelector(
        `.links li a[href="#${section.id}"]`
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector(".skills");
  const skillsBars = document.querySelectorAll(".skills-bar");

  window.addEventListener("scroll", function () {
    const skillsSectionTop = skillsSection.offsetTop;
    const windowHeight = window.innerHeight;

    if (window.scrollY > skillsSectionTop - windowHeight) {
      skillsBars.forEach((bar) => bar.classList.add("animate"));
    } else {
      skillsBars.forEach((bar) => bar.classList.remove("animate"));
    }
  });
});

let scroll = document.getElementById("scroll");
let scrollDown = document.getElementById("scrolldown");
function scrolling() {
  if (scrollY > 500) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}
addEventListener("scroll", scrolling);
scroll.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function scrollingdown() {
  if (scrollY + window.innerHeight >= document.body.scrollHeight - 5) {
    scrollDown.style.display = "none";
  } else {
    scrollDown.style.display = "block";
  }
}
addEventListener("scroll", scrollingdown);
scrolldown.onclick = function () {
  scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
const scriptURL =
  " https://script.google.com/macros/s/AKfycbwydv8w5_e6BLOXcpABZQk3oibbJtUq_mhzSim4FJxmmCfTMQKYxkbcRS98V28Qaiz6Vw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfuly";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
