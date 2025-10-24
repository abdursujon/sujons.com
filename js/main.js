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
    const menuIconContent = `<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>`;
    const xIconContent = `<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>`;

    let isMenuOpen = false;

    menuButton.addEventListener("click", function () {
      isMenuOpen = !isMenuOpen;
      menuIcon.innerHTML = isMenuOpen ? xIconContent : menuIconContent;
    });
  }

  function greetTheVisitor() {
    let greeting;
    let hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
    return greeting;
  }
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerHTML = "Hi there, " + greetTheVisitor();
  }

  const languagesBtn = document.getElementById("languages");
  if (languagesBtn) {
    languagesBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
                
                <h2 class="sub-titile">CORE PROGRAMMING</h2>

                <h2>JAVA</h2>
                <p class="sub-p">INFO</p>
                <p>
                Proficient in Java with experience developing both small- and large-scale applications. 
                Skilled in JavaFX for GUI development and familiar with IDEs such as Eclipse, BlueJ, and IntelliJ IDEA. 
                Knowledgeable in Agile Software Development, SCRUM, Waterfall, SDLC, Data Structures & Algorithms, 
                and Design Patterns. Currently leading an Agile group project while working on multiple desktop applications.
                </p>
                <p class="project-ex">
                <strong>Project Example:</strong> <a href="https://github.com/abdursujon/sputnik-vehicle-hire" target="_blank">Sputnik Vehicle Hire</a>
                </p>
                <hr>

                <h2>JavaScript</h2>
                <p class="sub-p">INFO</p>
                <p>
                JavaScript is one of my favorite languages. I regularly build both small- and large-scale applications 
                for desktop, tablet, mobile, and server environments. My strong understanding of UX and design allows me 
                to take applications from concept to completion with a user-first approach.
                </p>
                <p class="project-ex">
                <strong>Project Example:</strong> <a href="https://emilias-della-roma.netlify.app/" target="_blank">Emilia's Della Roma</a>
                </p>
                <hr>

                <h2>PHP</h2>
                <p class="sub-p">INFO</p>
                <p>
                I am specialize in building data-driven, full-stack websites. My primary tool for
                server-side logic is PHP, which I use in conjunction with SQL databases like SQLite. I
                follow best practices such as MVC architecture and Object-Oriented Programming (OOP) to
                create scalable and maintainable code. For the front end, I combine JavaScript,
                Bootstrap, CSS, and HTML to deliver responsive and interactive user experiences.
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
                <strong>Project Example:</strong> <a href="https://github.com/abdursujon/North-Trafford-Group-Practice-Clone/tree/main" target="_blank">North Trafford GP (Clone)</a>
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
                Proficient in <strong>Structured Query Language (SQL)</strong> for designing, querying, and managing relational databases.
                </p>
                <p>
                Hands-on experience with <strong>MySQL</strong>, including using tools like phpMyAdmin to create, modify, and maintain databases 
                for web applications.
                </p>
                <p class="project-ex">
                <strong>Project Example:</strong> For the Pet-Watch project, I implemented MySQL to store, manage, and retrieve user data efficiently.
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
                HTML and CSS are the foundation of every website. I focus on writing clean, semantic HTML and 
                maintaining well-organized, responsive CSS to deliver visually appealing and accessible interfaces. 
                I believe good design is as critical as technical functionality — a project can fail if it doesn't engage users at first glance.
                </p>
                <hr>

                <h2>BOOTSTRAP</h2>
                <p class="sub-p">INFO</p>
                <p>
                Bootstrap helps me quickly create responsive layouts, reducing the time spent on repetitive CSS. 
                I combine it with custom CSS in almost every project to achieve a unique, polished look.
                </p>
                <hr>

                <h2>WEB DESIGN</h2>
                <p class="sub-p">INFO</p>
                <p class="sub-p">FIGMA, INKSCAPE, CANVA, LOGO DESIGN, UI/UX, PHOTOSHOP, VIDEO EDITING, ANIMATION FOR ASSETS, TYPOGRAPHY</p>
                <p>
                I plan and design websites before development, ensuring the interface is intuitive and visually appealing. 
                I enjoy finding creative solutions to deliver the best possible user experience for each project.
                </p>
                <hr>

                <h2>CORE LANGUAGES FOR WEB DEVELOPMENT</h2>
                <p class="sub-p">INFO</p>
                <p>JavaScript, PHP</p>
                <p>
                I combine JavaScript for interactivity and PHP for server-side logic to build robust, full-stack web solutions.
                </p>
                <hr>

                <h2>JS FRAMEWORK</h2>
                <p class="sub-p">INFO</p>
                <p>React</p>
                <p>
                Familiar with React and its ecosystem, capable of building component-based, scalable, and interactive front-end applications.
                </p>

`;
    });
  }

  const desktopAppBtn = document.getElementById("desktop-app");
  if (desktopAppBtn) {
    desktopAppBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
             
              <h2 class="sub-title">DESKTOP APPLICATION DEVELOPMENT</h2>
              <h2>C# & .NET</h2>
              <p class="sub-p">INFO</p>
              <p> I developed a full-featured desktop application as part of a university project, creating a clone of the North
                  Trafford GP system. Key features included a touch keyboard, department search functionality, and dynamic
                  language switching. The project incorporated extensive Human-Computer Interaction (HCI) research to ensure
                  optimal color schemes, typography, and accessibility, making the application user-friendly for individuals with
                  diverse needs. </p>
              <hr>
              <h2>Java & JavaFX</h2>
              <p class="sub-p">INFO</p>
              <p> I designed and implemented a small game called <strong>DimDamGo</strong>, using JavaFX for the graphical user
                  interface and core Java data structures to handle game logic and interactivity. </p>
              <hr>
              <h2>Software Projects with Agile Methodologies (SCRUM)</h2>
              <p class="sub-p">INFO</p>
              <p> As team leader for a second-year university group project, I coordinated a software development initiative based
                  on a real client's requirements, using the SCRUM framework. This experience strengthened my skills in agile
                  project management, sprint planning, and team collaboration, while emphasizing the importance of clear
                  communication and iterative development. </p>
`;
    });
  }

  const backendBtn = document.getElementById("back-end");
  if (backendBtn) {
    backendBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
              
               <h2 class="sub-titile">BACKEND DEVELOPMENT</h2>

              <h2>PHP</h2>
              <p class="sub-p">INFO</p>
              <p>
              PHP is my primary language for server-side logic. I use it to build dynamic, secure, and scalable back-end systems. 
              Familiar with PHPMailer, authentication systems, and form handling to deliver robust web solutions.
              </p>
              <hr>

              <h2>JAVA</h2>
              <p class="sub-p">INFO</p>
              <p>
              Experienced in using Java for backend logic and client-server applications. 
              Skilled in designing and implementing APIs, handling requests, and building scalable systems.
              </p>
              <hr>

              <h2>CLIENT-SERVER SYSTEMS</h2>
              <p class="sub-p">INFO</p>
              <p>
              Knowledgeable in client-server architecture, designing systems where clients efficiently communicate 
              with servers to exchange data and handle requests.
              </p>
              <hr>

              <h2>XAMPP</h2>
              <p class="sub-p">INFO</p>
              <p>
              Experienced with XAMPP as a local development environment for PHP and MySQL projects, 
              configuring Apache, and managing databases during the development process.
              </p>
              <hr>

              <h2>PHPSTORM</h2>
              <p class="sub-p">INFO</p>
              <p>
              Proficient in using PhpStorm as an IDE to streamline backend development with powerful debugging, 
              version control, and productivity tools.
              </p>
              <hr>

              <h2>MySQL</h2>
              <p class="sub-p">INFO</p>
              <p>
              Skilled in database design, writing optimized SQL queries, and managing relational databases. 
              Comfortable with phpMyAdmin for schema creation and database administration.
              </p>
              <hr>

              <h2>NETWORK & SECURITY</h2>
              <p class="sub-p">INFO</p>
              <p>
              Understanding of networking fundamentals, secure data handling, and common vulnerabilities. 
              Familiar with applying best practices for authentication, encryption, and access control.
              </p>
              <hr>

              <h2>LINUX</h2>
              <p class="sub-p">INFO</p>
              <p>
              Comfortable working in Linux environments for server configuration, file management, 
              and deployment tasks, including using terminal commands and basic shell scripting.
              </p>

`;
    });
  }

  const softwareBtn = document.getElementById("software");
  if (softwareBtn) {
    softwareBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
<h2 class="sub-title">SOFTWARE</h2>
<h2>DEVELOPMENT TOOLS</h2>
<p class="sub-p">INFO</p>
<p>
    Proficient with popular development tools including <strong>PHPStorm</strong>, <strong>Visual Studio Code</strong>, 
    <strong>Microsoft Visual Studio</strong>, <strong>Eclipse</strong>, <strong>IntelliJ IDEA</strong>, and <strong>Vim</strong>. 
    These tools streamline coding, debugging, and version control across multiple languages and frameworks, improving productivity and workflow efficiency.
</p>
<hr>

<h2>VERSION CONTROL</h2>
<p class="sub-p">INFO</p>
<p>
    Experienced with <strong>Git</strong> and <strong>Git Bash</strong> for source code management, branching, merging, and collaborative workflows in team projects.
</p>
<hr>

<h2>DESIGN & PROTOTYPING</h2>
<p class="sub-p">INFO</p>
<p>
    Skilled with design and UI/UX tools such as <strong>Figma</strong> and <strong>Inkscape</strong>, along with asset creation software. 
    I use these tools to plan interfaces, create wireframes, and develop polished, user-friendly visuals for projects.
</p>
<hr>

<h2>DATABASE & SERVER MANAGEMENT</h2>
<p class="sub-p">INFO</p>
<p>
    Proficient in <strong>MySQL</strong> and <strong>XAMPP</strong> for database design, querying, and local server configuration. 
    Familiar with <strong>phpMyAdmin</strong> for schema management and <strong>FileZilla</strong> for FTP deployment of applications.
</p>
<hr>

<h2>PRODUCTIVITY & OFFICE TOOLS</h2>
<p class="sub-p">INFO</p>
<p>
    Proficient with <strong>Microsoft Word</strong>, <strong>Excel</strong>, and <strong>PowerPoint</strong> for project documentation, reporting, data analysis, and presentation preparation.
</p>
<hr>

<h2>VIRTUALIZATION & UTILITIES</h2>
<p class="sub-p">INFO</p>
<p>
    Comfortable using <strong>VirtualBox</strong> for virtual machine setup, <strong>OBS Studio</strong> for screen recording, and other
              Comfortable using <strong>VirtualBox</strong> for virtual machine setup, 
              <strong>OBS Studio</strong> for screen recording, and other utilities that support testing, 
              presentations, and development workflows.
              </p>

`;
    });
  }

  const coreBtn = document.getElementById("core");
  if (coreBtn) {
    coreBtn.addEventListener("click", function () {
      document.getElementById("change-skills").innerHTML = `
<h2 class="sub-title">CORE COMPUTING CONCEPTS</h2>

<h2>DATA STRUCTURES & ALGORITHMS</h2>
<p class="sub-p">INFO</p>
<p>
    Proficient in designing and implementing efficient data structures and algorithms to solve computational problems, optimize application performance, and improve system efficiency.
</p>
<hr>

<h2>DESIGN PATTERNS</h2>
<p class="sub-p">INFO</p>
<p>
    Knowledgeable in common design patterns and best practices to create maintainable, reusable, and scalable software architectures that simplify development and enhance code quality.
</p>
<hr>

<h2>OPERATING SYSTEMS & COMMANDS</h2>
<p class="sub-p">INFO</p>
<p>
    Familiar with operating system concepts, including file systems, process management, memory management, and system commands for both Windows and Linux environments.
</p>
<hr>

<h2>AGILE SOFTWARE DEVELOPMENT & SCRUM</h2>
<p class="sub-p">INFO</p>
<p>
    Experienced in Agile methodologies, particularly Scrum, for iterative and adaptive software development. Skilled at managing sprints, facilitating stand-ups, and fostering team collaboration to deliver high-quality software.
</p>
<hr>

<h2>SDLC & WATERFALL</h2>
<p class="sub-p">INFO</p>
<p>
    Well-versed in Software Development Life Cycle (SDLC) methodologies, including Waterfall, for systematically planning, analyzing, designing, implementing, testing, and maintaining software projects.
</p>
<hr>

<h2>HUMAN-COMPUTER INTERACTION (HCI)</h2>
<p class="sub-p">INFO</p>
<p>
    Strong understanding of HCI principles, user-centered design, accessibility, and usability to create intuitive, engaging, and user-friendly software interfaces.
</p>
<hr>

<h2>PROFESSIONAL DEVELOPMENT</h2>
<p class="sub-p">INFO</p>
<p>
    Adherence to professional software development practices, including documentation, version control, testing, and collaborative workflows to ensure high-quality, maintainable software solutions.
</p>
<hr>

<h2>CLIENT-SERVER ARCHITECTURE</h2>
<p class="sub-p">INFO</p>
<p>
    Knowledgeable in client-server architecture, designing systems where clients and servers communicate efficiently to handle requests, manage data, and deliver seamless application performance.
</p>
<hr>

`;
    });
  }
});
