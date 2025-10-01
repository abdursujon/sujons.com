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
        link: "https://example.com",
        images: ["assets/projects/project 1/image 1.png", "assets/projects/project 1/image 2.png", "assets/projects/project 1/image 3.png"],
    },
    {
        title: "2nd Project",
        description: "This is another project's description...",
        link: "https://example2.com",
        images: ["project2-1.jpg", "project2-2.jpg"],
    },

    {
        title: "3rd Project",
        description: "This is another project's description...",
        link: "https://example2.com",
        images: ["project2-1.jpg", "project2-2.jpg"],
    },

    {
        title: "4th Project",
        description: "This is another project's description...",
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