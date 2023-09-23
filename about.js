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


  function slider() {
    return {
      images: [
        { src: 'img/1.jpg', alt: 'Ms. Vanity Image 1' },
        { src: 'img/2.jpg', alt: 'Ms. Vanity Image 2' },
        { src: 'img/1.jpg', alt: 'Ms. Vanity Image 3' },
        // Add more images as needed
      ],
      active: 0,
      prevImage() {
        this.active = this.active === 0 ? this.images.length - 1 : this.active - 1;
      },
      nextImage() {
        this.active = this.active === this.images.length - 1 ? 0 : this.active + 1;
      },
    };
  }
