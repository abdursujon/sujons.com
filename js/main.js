document.addEventListener("DOMContentLoaded", function () {

  /* ======================================================
     LOAD HEADER + FOOTER
  ====================================================== */
  const loadComponent = (url, placeholderId) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then((data) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) placeholder.innerHTML = data;

        // AFTER HEADER LOAD
        if (placeholderId === "header-placeholder") {
          initializeNavbar();
          initializeThemeToggle();
          setupMobileToggleSync();
          updateThemedIcons();
        }

        // AFTER FOOTER LOAD
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


  /* ======================================================
     NAVBAR BURGER ICON
  ====================================================== */
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


  /* ======================================================
     UPDATE THEMABLE ICONS
  ====================================================== */
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


  /* ======================================================
     THEME TOGGLE (DESKTOP + MOBILE)
  ====================================================== */
function initializeThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const siteLogo = document.getElementById("logo-img");
  const mobileIcon = document.getElementById("mobile-theme-icon");

  // Ensure ALL required elements exist
  if (!toggleBtn || !themeIcon || !siteLogo || !mobileIcon) return;

  const savedTheme = localStorage.getItem("theme");
  const startLight = savedTheme === "light";

  /* INITIAL LOAD */
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

  /* CLICK */
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



  /* ======================================================
     MOBILE THEME TOGGLE SYNC (xs-md)
  ====================================================== */
  function setupMobileToggleSync() {
    const mobileBtn = document.querySelector(".mobile-theme-toggle");
    const desktopBtn = document.getElementById("theme-toggle");

    if (!mobileBtn || !desktopBtn) return;

    // Mobile forwards click to desktop toggle
    mobileBtn.addEventListener("click", () => {
      desktopBtn.click();
    });
  }


  /* ======================================================
     GREETING
  ====================================================== */
  function greetTheVisitor() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerHTML = `Hi there - ${greetTheVisitor()}`;
  }

});
