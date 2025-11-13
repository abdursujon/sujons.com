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

        // After header loads: initialize navbar + theme toggle
        if (placeholderId === "header-placeholder") {
          initializeNavbar();
          initializeThemeToggle();
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
     THEME TOGGLE (AUTO-DETECT + ROTATE + FADE)
     ====================================================== */
function initializeThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const siteLogo = document.querySelector(".logo-img");

  if (!toggleBtn || !themeIcon || !siteLogo) return;

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const savedTheme = localStorage.getItem("theme");

  const startLight = savedTheme === "light" || (!savedTheme && prefersLight);

  // INITIAL LOAD
  if (startLight) {
    document.documentElement.classList.add("light");
    themeIcon.src = "assets/home/icon/moon.svg";
    siteLogo.src = "assets/home/icon/logo_black.png";
  } else {
    document.documentElement.classList.remove("light");
    themeIcon.src = "assets/home/icon/sun.svg";
    siteLogo.src = "assets/home/icon/logo.png";
  }

  // CLICK TO TOGGLE
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    toggleBtn.classList.add("rotate");
    setTimeout(() => toggleBtn.classList.remove("rotate"), 400);

    document.documentElement.classList.toggle("light");

    const isLight = document.documentElement.classList.contains("light");

    themeIcon.src = isLight
      ? "assets/home/icon/moon.svg"
      : "assets/home/icon/sun.svg";

    siteLogo.src = isLight
      ? "assets/home/icon/logo_black.png"
      : "assets/home/icon/logo_white.png";

    localStorage.setItem("theme", isLight ? "light" : "dark");

    document.body.classList.add("fade-theme");
    setTimeout(() => document.body.classList.remove("fade-theme"), 300);
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


  /* ======================================================
     SKILLS BUTTON INTERACTIONS
     (Everything below remains EXACTLY the same)
     ====================================================== */

  const languagesBtn = document.getElementById("languages");
  if (languagesBtn) {
    languagesBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL LANGUAGES HTML...
      `;
    });
  }

  const databaseBtn = document.getElementById("database");
  if (databaseBtn) {
    databaseBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL DATABASE HTML...
      `;
    });
  }

  const webdevBtn = document.getElementById("webdev");
  if (webdevBtn) {
    webdevBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL WEB DEV HTML...
      `;
    });
  }

  const desktopAppBtn = document.getElementById("desktop-app");
  if (desktopAppBtn) {
    desktopAppBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL DESKTOP HTML...
      `;
    });
  }

  const backendBtn = document.getElementById("back-end");
  if (backendBtn) {
    backendBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL BACKEND HTML...
      `;
    });
  }

  const softwareBtn = document.getElementById("software");
  if (softwareBtn) {
    softwareBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL SOFTWARE HTML...
      `;
    });
  }

  const coreBtn = document.getElementById("core");
  if (coreBtn) {
    coreBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        ...YOUR FULL CORE HTML...
      `;
    });
  }
});
