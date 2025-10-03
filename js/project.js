/**
 * project.js
 *
 * This script manages the interactive project carousel on the projects page.
 * It handles project data, state, rendering, and user interactions.
 */

// ===================================================================
// DATA
// ===================================================================
const projects = [
    {
        title: "Emilia's Della Roma",
        description: "Emilia's Della Roma is a portfolio project that replicates\n" +
            "the core functionality of a real-world Italian restaurant website.\n" +
            "The focus of this project was to create an engaging, user-friendly\n" +
            "platform that demonstrates modern web development practices while\n" +
            "showcasing key restaurant features. This project was developed\n" +
            "In the mobile-first approach, in consideration of the fact that \n" +
            "most users use their mobile phone to browse restaurant websites. \n",
        techStack: "Tech Stack: PHP, HTMl, JavaScript, Bootstrap, PHTML, PHPMailer, Figma, Postcode.io",
        link: "https://emilias-della-roma.netlify.app/",
        images: ["assets/projects/project 1/1.png", "assets/projects/project 1/2.png", "assets/projects/project 1/3.png",
            "assets/projects/project 1/4.png", "assets/projects/project 1/5.png", "assets/projects/project 1/6.png",
            "assets/projects/project 1/7.png", "assets/projects/project 1/8.png"
        ],
    },
    {
        title: "Star Calculator",
        description: "Star Calculator is a modern, responsive calculator web app that not only performs basic arithmetic operations but also allows users to customize their experience with theme and font options.",
        techStack: "Tech Stack: JavaScript, CSS, HTML, Bootstrap",
        link: "https://star-calulator.netlify.app/",
        images: ["assets/projects/project 2/1.png", "assets/projects/project 2/2.png", "assets/projects/project 2/3.png"],
    },
    {
        title: "North Trafford GP (Clone)",
        description: "\n" +
            "Conducted research on Human-Computer Interaction to make the system accessible for everyone.\n" +
            "•\n" +
            "Users can check in and search for a specific department location by entering the department name.\n" +
            "•\n" +
            "Created a bilingual system to allow Welsh speakers to switch the language settings to Welsh.\n" +
            "•\n" +
            "Developed using C# and .NET along with HCI principles.",
        techStack: "Tech Stack: C#, .NET, HCI, Microsoft Visual Studio",
        link: "https://github.com/abdursujon/North-Trafford-Group-Practice-Clone/tree/main",
        images: ["assets/projects/project 3/1.png", "assets/projects/project 3/2.png", "assets/projects/project 3/3.png"],
    },

    {
        title: "Sputnik Vehicle Hire System",
        description: "\n" +
            "This system can read a data file to collect details regarding customers and vehicles.\n" +
            "•\n" +
            "The system provides functionality to add new customers or vehicles to the text file.\n" +
            "•\n" +
            "Vehicles have subcategories, allowing users to rent different types of vehicles, such as cars, vans, and trucks.\n" +
            "•\n" +
            "The vehicle reservation class is utilized to check for any current reservations on a specific date that may conflict with new requests.",
        techStack: "Tech Stack: Java, BlueJ",
        link: "https://github.com/abdursujon/sputnik-vehicle-hire",
        images: ["assets/projects/project 4/1.png", "assets/projects/project 4/2.png", "assets/projects/project 4/3.png", "assets/projects/project 4/4.png", "assets/projects/project 4/5.png", "assets/projects/project 4/6.png"],
    },

    {
        title: "Mew Mate",
        description: "A fun hobby project that replicates Tinder, but with a twist—it's a dating site for cats only! Swipe, match, and help your feline friend find the purr-fect partner, all while exploring a playful, interactive UI designed to showcase responsive design, animations, and creative web development skills.",
        techStack: "Tech Stack: JavaScript, CSS, HTML",
        link: "https://mewmate.netlify.app/",
        images: ["assets/projects/project 5/1.png", "assets/projects/project 5/2.png", "assets/projects/project 5/3.png"],
    }
];

// ===================================================================
// STATE
// ===================================================================
let currentProject = 0;
let currentImage = 0;

// ===================================================================
// DOM ELEMENTS
// ===================================================================
const imageEl = document.getElementById("carousel-image");
const dotsEl = document.getElementById("carousel-dots");
const titleEl = document.getElementById("project-title");
const descEl = document.getElementById("project-desc");
const techSt = document.getElementById("tech-stack");
const linkEl = document.getElementById("launch-link");
// ===================================================================
// RENDERING FUNCTIONS
// ===================================================================
/** Renders the full details of the current project. */
function renderProject() {
    const project = projects[currentProject];
    currentImage = 0;
    titleEl.textContent = project.title;
    descEl.textContent = project.description;
    techSt.textContent = project.techStack;
    linkEl.href = project.link;
    renderImage();
    renderDots();
}

/** Renders the current image for the selected project. */
function renderImage() {
    imageEl.src = projects[currentProject].images[currentImage];
    updateDots();
}

/** Creates the navigation dots for the image carousel. */
function renderDots() {
    dotsEl.innerHTML = "";
    projects[currentProject].images.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.onclick = () => {
            currentImage = idx;
            renderImage();
        };
        dotsEl.appendChild(dot);
    });
    updateDots();
}

/** Updates the active state of the navigation dots. */
function updateDots() {
    const dots = dotsEl.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentImage);
    });
}

// ===================================================================
// EVENT HANDLERS (Called from onclick attributes in HTML)
// ===================================================================
/** Moves to the next image in the carousel. */
function nextImage() {
    const images = projects[currentProject].images;
    currentImage = (currentImage + 1) % images.length;
    renderImage();
}

/** Moves to the previous image in the carousel. */
function prevImage() {
    const images = projects[currentProject].images;
    currentImage = (currentImage - 1 + images.length) % images.length;
    renderImage();
}

/** Moves to the next project in the projects array. */
function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    renderProject();
}

/** Moves to the previous project in the projects array. */
function prevProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    renderProject();
}

// ===================================================================
// INITIALIZATION
// ===================================================================
renderProject();