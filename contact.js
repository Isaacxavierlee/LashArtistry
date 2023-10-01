// Get all control icons
  const controlIcons = document.querySelectorAll('.control-icon');
  const controls = document.querySelector(".controls");
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", function() {
    controls.classList.toggle("hidden");
  });

  controlIcons.forEach(icon => {
    const currentPath = window.location.pathname;
    const iconLink = icon.parentElement.getAttribute("href");

    if (currentPath.includes(iconLink)) {
      controlIcons.forEach(otherIcon => {
        otherIcon.parentElement.classList.remove('active-btn');
      });
      icon.parentElement.classList.add('active-btn');
    }
  });
