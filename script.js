// Get all control icons
const controlIcons = document.querySelectorAll('.control-icon');
const controls = document.querySelector(".controls");
const themeBtn = document.querySelector(".theme-btn");

// Check if the controls should be hidden on small screens
function checkScreenSize() {
  if (window.innerWidth <= 768) { // You can adjust this breakpoint as needed
    controls.classList.add("hidden");
  } else {
    controls.classList.remove("hidden");
  }
}

// Toggle controls visibility on theme button click
themeBtn.addEventListener("click", function() {
  controls.classList.toggle("hidden");
});

// Handle control icon clicks
controlIcons.forEach(icon => {
  icon.addEventListener("click", function() {
    // Remove the "active-btn" class from all control icons
    controlIcons.forEach(otherIcon => {
      otherIcon.parentElement.classList.remove('active-btn');
    });
    // Add the "active-btn" class to the clicked icon
    icon.parentElement.classList.add('active-btn');
  });
});

// Check screen size on page load and resize
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
