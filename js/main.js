document.addEventListener("DOMContentLoaded", function () {
  const loadComponent = (url, placeholderId) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then((data) => {
        const placeholder = document.getElementById(placeholderId);
        if (placeholder) {
          placeholder.innerHTML = data;
        }
        if (placeholderId === "header-placeholder") {
          initializeNavbar();
        }
      })
      .catch((error) => console.error("Error loading component:", error));
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

  function greetTheVisitor() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    return "Good evening";
  }

  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerHTML = `Hi there — ${greetTheVisitor()}`;
  }

  /* ======================================================
     SKILLS BUTTON INTERACTIONS
     ====================================================== */

  const languagesBtn = document.getElementById("languages");
  if (languagesBtn) {
    languagesBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">CORE PROGRAMMING</h2>

        <h2>Java</h2>
        <p class="sub-p">INFO</p>
        <p>
          Proficient in Java, with experience developing both small- and large-scale applications.
          Skilled in JavaFX for GUI development and familiar with IDEs such as Eclipse, BlueJ, and IntelliJ IDEA.
          Knowledgeable in Agile methodologies, including SCRUM and Waterfall, as well as SDLC principles,
          Data Structures & Algorithms, and Design Patterns. Currently leading an Agile group project while
          developing multiple desktop applications.
        </p>
        <p class="project-ex">
          <strong>Project Example:</strong>
          <a href="https://github.com/abdursujon/sputnik-vehicle-hire" target="_blank">Sputnik Vehicle Hire</a>
        </p>
        <hr>

        <h2>JavaScript</h2>
        <p class="sub-p">INFO</p>
        <p>
          JavaScript is one of my favorite languages — I regularly build applications of all scales for desktop,
          tablet, mobile, and server environments. With a strong understanding of UX and design, I take applications
          from concept to completion with a user-first approach.
        </p>
        <p class="project-ex">
          <strong>Project Example:</strong>
          <a href="https://emilias-della-roma.netlify.app/" target="_blank">Emilia’s Della Roma</a>
        </p>
        <hr>

        <h2>PHP</h2>
        <p class="sub-p">INFO</p>
        <p>
          I specialize in building data-driven, full-stack websites. My primary tool for
          server-side logic is PHP, which I use alongside SQL databases such as SQLite.
          I follow best practices like MVC architecture and Object-Oriented Programming (OOP)
          to create scalable, maintainable code. On the front end, I combine JavaScript,
          Bootstrap, CSS, and HTML for responsive, interactive experiences.
        </p>
        <p class="project-ex">
          <strong>Upcoming Project:</strong> Pet Watch (Coming Soon)
        </p>
        <hr>

        <h2>C#</h2>
        <p class="sub-p">INFO</p>
        <p>
          Familiar with C#, with experience building Windows desktop applications using .NET Forms.
        </p>
        <p class="project-ex">
          <strong>Project Example:</strong>
          <a href="https://github.com/abdursujon/North-Trafford-Group-Practice-Clone/tree/main" target="_blank">
            North Trafford GP (Clone)
          </a>
        </p>
      `;
    });
  }

  const databaseBtn = document.getElementById("database");
  if (databaseBtn) {
    databaseBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">DATABASE</h2>

        <h2>SQL & MySQL</h2>
        <p class="sub-p">INFO</p>
        <p>
          Proficient in Structured Query Language (SQL) for designing, querying, and managing relational databases.
          Experienced with MySQL and tools such as phpMyAdmin to create, modify, and maintain database structures
          for web applications.
        </p>
        <p class="project-ex">
          <strong>Project Example:</strong>
          Implemented MySQL for the Pet-Watch project to efficiently store, manage, and retrieve user data.
        </p>
      `;
    });
  }

  const webdevBtn = document.getElementById("webdev");
  if (webdevBtn) {
    webdevBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">WEB DEVELOPMENT</h2>

        <h2>HTML & CSS</h2>
        <p class="sub-p">INFO</p>
        <p>
          HTML and CSS form the foundation of every website. I focus on writing clean, semantic HTML
          and maintaining organized, responsive CSS for visually appealing, accessible interfaces.
          I believe design is as crucial as functionality — a project should engage users from the first glance.
        </p>
        <hr>

        <h2>Bootstrap</h2>
        <p class="sub-p">INFO</p>
        <p>
          Bootstrap helps streamline responsive layout design. I combine it with custom CSS in nearly every project
          to create unique, polished interfaces that adapt beautifully across devices.
        </p>
        <hr>

        <h2>Web Design</h2>
        <p class="sub-p">INFO</p>
        <p>
          Tools: Figma, Inkscape, Canva, Photoshop, and typography-focused design principles.
          I plan and design websites before development, ensuring intuitive structure and appealing visuals.
          I enjoy finding creative solutions that deliver the best possible user experience.
        </p>
        <hr>

        <h2>Core Web Languages</h2>
        <p class="sub-p">INFO</p>
        <p>JavaScript, PHP</p>
        <p>
          Combining JavaScript for interactivity and PHP for server-side logic,
          I build robust, full-stack web applications.
        </p>
        <hr>

        <h2>JavaScript Frameworks</h2>
        <p class="sub-p">INFO</p>
        <p>React</p>
        <p>
          Familiar with React and its ecosystem — capable of building component-based, scalable,
          and interactive front-end applications.
        </p>
      `;
    });
  }

  const desktopAppBtn = document.getElementById("desktop-app");
  if (desktopAppBtn) {
    desktopAppBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">DESKTOP APPLICATION DEVELOPMENT</h2>

        <h2>C# & .NET</h2>
        <p class="sub-p">INFO</p>
        <p>
          Developed a full-featured Windows desktop application replicating the North Trafford GP system,
          including an on-screen keyboard, department search, and multilingual support.
          Conducted Human-Computer Interaction (HCI) research to optimize color schemes,
          typography, and accessibility, ensuring usability for diverse audiences.
        </p>
        <hr>

        <h2>Java & JavaFX</h2>
        <p class="sub-p">INFO</p>
        <p>
          Designed and implemented a small game, <strong>DimDamGo</strong>, using JavaFX for UI and core Java
          data structures to manage game logic and interactivity.
        </p>
        <hr>

        <h2>Agile Software Projects (SCRUM)</h2>
        <p class="sub-p">INFO</p>
        <p>
          As team leader for a university group project, I coordinated software development using the SCRUM framework.
          Managed sprint planning, task allocation, and client communication, emphasizing collaboration and iterative improvement.
        </p>
      `;
    });
  }

  const backendBtn = document.getElementById("back-end");
  if (backendBtn) {
    backendBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">BACK-END DEVELOPMENT</h2>

        <h2>PHP</h2>
        <p class="sub-p">INFO</p>
        <p>
          PHP is my primary back-end language for building dynamic, secure, and scalable systems.
          Familiar with PHPMailer, authentication systems, and form handling for robust, reliable applications.
        </p>
        <hr>

        <h2>Java</h2>
        <p class="sub-p">INFO</p>
        <p>
          Experienced in Java for server-side logic and client-server architectures — skilled in API design,
          request handling, and scalable system structure.
        </p>
        <hr>

        <h2>Client-Server Systems</h2>
        <p class="sub-p">INFO</p>
        <p>
          Knowledgeable in designing client-server architectures where clients and servers communicate efficiently
          to exchange data and process requests.
        </p>
        <hr>

        <h2>MySQL & XAMPP</h2>
        <p class="sub-p">INFO</p>
        <p>
          Experienced with XAMPP as a local environment for PHP and MySQL projects, configuring Apache,
          and managing databases during development.
        </p>
        <hr>

        <h2>PhpStorm</h2>
        <p class="sub-p">INFO</p>
        <p>
          Proficient in PhpStorm — using debugging, version control, and productivity tools to streamline back-end workflows.
        </p>
        <hr>

        <h2>Network & Security</h2>
        <p class="sub-p">INFO</p>
        <p>
          Understanding of networking fundamentals, secure data handling, and common vulnerabilities.
          Familiar with best practices for authentication, encryption, and access control.
        </p>
        <hr>

        <h2>Linux</h2>
        <p class="sub-p">INFO</p>
        <p>
          Comfortable in Linux environments for server configuration, file management, and deployment tasks —
          including terminal commands and basic shell scripting.
        </p>
      `;
    });
  }

  const softwareBtn = document.getElementById("software");
  if (softwareBtn) {
    softwareBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">SOFTWARE</h2>

        <h2>Development Tools</h2>
        <p class="sub-p">INFO</p>
        <p>
          Proficient with leading development tools including PHPStorm, Visual Studio Code, Microsoft Visual Studio,
          Eclipse, IntelliJ IDEA, and Vim — improving productivity and workflow efficiency across multiple platforms.
        </p>
        <hr>

        <h2>Version Control</h2>
        <p class="sub-p">INFO</p>
        <p>
          Experienced with Git and Git Bash for source-code management, branching, merging, and collaborative workflows.
        </p>
        <hr>

        <h2>Design & Prototyping</h2>
        <p class="sub-p">INFO</p>
        <p>
          Skilled with Figma and Inkscape for UI/UX planning and asset creation.
          I create wireframes and polished, user-friendly visuals for both web and desktop applications.
        </p>
        <hr>

        <h2>Database & Server Management</h2>
        <p class="sub-p">INFO</p>
        <p>
          Experienced in MySQL and XAMPP for database design, querying, and local server setup.
          Proficient with phpMyAdmin and FileZilla for deployment and schema management.
        </p>
        <hr>

        <h2>Productivity Tools</h2>
        <p class="sub-p">INFO</p>
        <p>
          Proficient with Microsoft Word, Excel, and PowerPoint for documentation, reporting, data analysis, and presentations.
        </p>
        <hr>

        <h2>Virtualization & Utilities</h2>
        <p class="sub-p">INFO</p>
        <p>
          Comfortable using VirtualBox for virtual environments, OBS Studio for screen recording, and other utilities
          that enhance testing, presentation, and development workflows.
        </p>
      `;
    });
  }

  const coreBtn = document.getElementById("core");
  if (coreBtn) {
    coreBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
        <h2 class="sub-titile">CORE COMPUTING CONCEPTS</h2>

        <h2>Data Structures & Algorithms</h2>
        <p class="sub-p">INFO</p>
        <p>
          Proficient in designing and implementing efficient data structures and algorithms
          to solve computational problems and optimize performance.
        </p>
        <hr>

        <h2>Design Patterns</h2>
        <p class="sub-p">INFO</p>
        <p>
          Knowledgeable in applying design patterns to create maintainable, reusable,
          and scalable software architectures.
        </p>
        <hr>

        <h2>Operating Systems & Commands</h2>
        <p class="sub-p">INFO</p>
        <p>
          Familiar with OS fundamentals — file systems, process management, and terminal commands
          in both Windows and Linux environments.
        </p>
        <hr>

        <h2>Agile Development & SCRUM</h2>
        <p class="sub-p">INFO</p>
        <p>
          Experienced in Agile methodologies — skilled in sprint planning, stand-ups,
          and collaborative team development for continuous improvement.
        </p>
        <hr>

        <h2>SDLC & Waterfall</h2>
        <p class="sub-p">INFO</p>
        <p>
          Well-versed in Software Development Life Cycle (SDLC) principles, including Waterfall,
          for structured and methodical software delivery.
        </p>
        <hr>

        <h2>Human-Computer Interaction (HCI)</h2>
        <p class="sub-p">INFO</p>
        <p>
          Strong grasp of HCI principles — designing intuitive, accessible interfaces focused on usability and user engagement.
        </p>
        <hr>

        <h2>Professional Development</h2>
        <p class="sub-p">INFO</p>
        <p>
          Adherence to professional standards including documentation, version control,
          testing, and teamwork to ensure high-quality software outcomes.
        </p>
        <hr>

        <h2>Client-Server Architecture</h2>
        <p class="sub-p">INFO</p>
        <p>
          Knowledgeable in designing efficient client-server systems where communication,
          data exchange, and performance are optimized.
        </p>
      `;
    });
  }
});
