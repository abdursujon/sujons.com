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
        title: "Iphone Clone Calculator",
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
        images: ["project2-1.jpg", "project2-2.jpg"],
    },
    {
        title: "North Trafford Group Practice Clone",
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
        images: ["project2-1.jpg", "project2-2.jpg"],
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
        link: "https://example2.com",
        images: ["project2-1.jpg", "project2-2.jpg"],
    },

    {
        title: "Iphone Clone Calculator",
        description: "This project is simple calcalutor replicating iphone default calculator apps. " +
            "But Additionally user can change the theme of the calculator my going to settings and choosing different theme.",
        techStack: "Tech Stack: JavaScript, CSS, HTML",
        link: "https://example2.com",
        images: ["project2-1.jpg", "project2-2.jpg"],
    }
];

let currentProject = 0;
let currentImage = 0;

const imageEl = document.getElementById("carousel-image");
const dotsEl = document.getElementById("carousel-dots");
const titleEl = document.getElementById("project-title");
const descEl = document.getElementById("project-desc");
const techSt = document.getElementById("tech-stack");
const linkEl = document.getElementById("launch-link");

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

function renderImage() {
    imageEl.src = projects[currentProject].images[currentImage];
    updateDots();
}

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

function updateDots() {
    const dots = dotsEl.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentImage);
    });
}

function nextImage() {
    const images = projects[currentProject].images;
    currentImage = (currentImage + 1) % images.length;
    renderImage();
}

function prevImage() {
    const images = projects[currentProject].images;
    currentImage = (currentImage - 1 + images.length) % images.length;
    renderImage();
}

function nextProject() {
    currentProject = currentProject + 1;
    renderProject();
}

function prevProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    renderProject();
}

renderProject();