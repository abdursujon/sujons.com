(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.documentElement.classList.add("light");
  }
})();

document.addEventListener("DOMContentLoaded", function () {

  const loadComponent = (url, placeholderId) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then((data) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) placeholder.innerHTML = data;

        if (placeholderId === "header-placeholder") {
          initializeNavbar();
          initializeThemeToggle();
          setupMobileToggleSync();
          updateThemedIcons();
        }

        if (placeholderId === "footer-placeholder") {
          updateThemedIcons();
        }
      })
      .catch((error) =>
        console.error("Error loading component:", error)
      );
  };

  loadComponent("components/header.html", "header-placeholder");
  loadComponent("components/footer.html", "footer-placeholder");

  function initializeNavbar() {
    const menuButton = document.querySelector(".custom-navbar-toggler");
    if (!menuButton) return;

    const menuIcon = menuButton.querySelector("svg.menu-icon");
    if (!menuIcon) return;

    const menuIconContent = `
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>`;

    const xIconContent = `
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>`;

    let isMenuOpen = false;

    menuButton.addEventListener("click", function () {
      isMenuOpen = !isMenuOpen;
      menuIcon.innerHTML = isMenuOpen ? xIconContent : menuIconContent;
    });
  }


  function updateThemedIcons() {
    const icons = document.querySelectorAll(".themed-icon");
    const isLight = document.documentElement.classList.contains("light");

    icons.forEach(icon => {
      const lightSrc = icon.getAttribute("data-light");
      const darkSrc = icon.getAttribute("data-dark");
      if (lightSrc && darkSrc) {
        icon.src = isLight ? lightSrc : darkSrc;
      }
    });
  }


  function initializeThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const siteLogo = document.getElementById("logo-img");
    const mobileIcon = document.getElementById("mobile-theme-icon");

    if (!toggleBtn || !themeIcon || !siteLogo || !mobileIcon) return;

    const savedTheme = localStorage.getItem("theme");
    const startLight = savedTheme === "light";

    if (startLight) {
      document.documentElement.classList.add("light");
      themeIcon.src = "assets/home/icon/moon.png";
      mobileIcon.src = "assets/home/icon/moon.png";
      siteLogo.src = "assets/home/icon/logo_black.png";
    } else {
      document.documentElement.classList.remove("light");
      themeIcon.src = "assets/home/icon/sun.svg";
      mobileIcon.src = "assets/home/icon/sun.svg";
      siteLogo.src = "assets/home/icon/logo_white.png";
    }

    updateThemedIcons();

    toggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("light");
      const isLight = document.documentElement.classList.contains("light");

      themeIcon.src = isLight
        ? "assets/home/icon/moon.png"
        : "assets/home/icon/sun.svg";

      mobileIcon.src = isLight
        ? "assets/home/icon/moon.png"
        : "assets/home/icon/sun.svg";

      siteLogo.src = isLight
        ? "assets/home/icon/logo_black.png"
        : "assets/home/icon/logo_white.png";

      localStorage.setItem("theme", isLight ? "light" : "dark");

      updateThemedIcons();

      document.body.classList.add("fade-theme");
      setTimeout(() => document.body.classList.remove("fade-theme"), 300);
    });
  }

  function setupMobileToggleSync() {
    const mobileBtn = document.querySelector(".mobile-theme-toggle");
    const desktopBtn = document.getElementById("theme-toggle");

    if (!mobileBtn || !desktopBtn) return;
    mobileBtn.addEventListener("click", () => {
      desktopBtn.click();
    });
  }

});
