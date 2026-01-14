async function loadProjects() {
  try {
    const res = await fetch("assets/data/projects.json");
    if (!res.ok) throw new Error("Failed to load projects.json");

    const projects = await res.json();
    renderAllProjects(projects);
  } catch (err) {
    console.error(err);
  }
}

function renderAllProjects(projects) {
  const container = document.getElementById("projects-container");

  container.innerHTML = `
    <div class="container">
      <div class="row g-4 mb-5" id="projects-grid"></div>
    </div>
  `;

  const grid = document.getElementById("projects-grid");

  projects.forEach((project, index) => {
    const col = document.createElement("div");
    col.className = "col-12 col-lg-6 project-loader";

    col.innerHTML = `
      <section class="project-section fade-in-up h-100">
        <div class="project-card h-100  border border-secondary px-4 py-4 rounded">

          <div class="project-image">
            <img
              src="${project.images[0]}"
              alt="${project.title}"
              class="img-fluid rounded"
            />
          </div>

          <div class="project-body">
            <h2 class="project-title fw-bold">${project.title}</h2>

            <div class="project-desc">
              ${project.description}
            </div>

            <div class="tech-stack">
              ${project.techStack
                .replace("Tech Stack:", "")
                .split(",")
                .map((t) => `<span class="tech-pill">${t.trim()}</span>`)
                .join("")}
            </div>

            ${
              project.title === "Spring Data Analysis API"
                ? `<div class="mt-4">
                      By launching, you can only access the root endpoint.
                      To use the API, see README.md in the project repository.
                    </div>`
                : ``
            }


            <div class="project-actions">
              ${
                project.showLaunch === false
                  ? ``
                  : project.comingSoon
                  ? `<span class="badge bg-secondary">Coming Soon</span>`
                  : `<a href="${project.link}" target="_blank" class="btn btn-dark mt-4 me-3">Launch</a>`
              }

              ${
                project.repo === "private"
                  ? `
                    <div class="position-relative d-inline-block">
                      <button
                        class="btn view-code mt-4"
                        onclick="toggleRepoPopover(event, ${index})"
                      >
                        View Code
                      </button>
                      <div
                        id="repo-popover-${index}"
                        class="repo-popover d-none"
                        onclick="event.stopPropagation()"
                      >
                        <strong>PRIVATE GITHUB REPOSITORY</strong>
                        <div>Please contact me for code</div>
                      </div>
                    </div>
                  `
                  : project.repo
                  ? `<a href="${project.repo}" target="_blank" class="btn view-code mt-4 pl-4">View Code</a>`
                  : ``
              }
            </div>
          </div>

        </div>
      </section>
    `;

    grid.appendChild(col);
  });

  setupScrollObserver();
}

// Show toggle pop for private repo
function toggleRepoPopover(e, index) {
  e.stopPropagation();
  document
    .querySelectorAll(".repo-popover")
    .forEach((p) => p.classList.add("d-none"));
  const popover = document.getElementById(`repo-popover-${index}`);
  popover.classList.toggle("d-none");
}
window.toggleRepoPopover = toggleRepoPopover;

// Handle even listener to click on view code, if anywhere else clicked on the project view, remove the pop alert
document.addEventListener("click", (e) => {
  if (e.target.closest(".repo-popover")) return;
  document
    .querySelectorAll(".repo-popover")
    .forEach((p) => p.classList.add("d-none"));
});

const projectStates = {};

function renderImage(idx) {
  const state = projectStates[idx];
  const img = document.getElementById(`img-${idx}`);
  img.loading = "lazy";
  img.src = state.images[state.current];

  img.classList.add("img-fluid", "w-100");

  img.style.objectFit = "contain";

  updateDots(idx);
}

function renderDots(idx) {
  const state = projectStates[idx];
  const dotsEl = document.getElementById(`dots-${idx}`);

  dotsEl.innerHTML = "";

  state.images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = () => {
      state.current = i;
      renderImage(idx);
    };
    dotsEl.appendChild(dot);
  });

  updateDots(idx);
}

function updateDots(idx) {
  const state = projectStates[idx];
  const dots = document.getElementById(`dots-${idx}`).children;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle("active", i === state.current);
  }
}

function nextImage(idx) {
  const state = projectStates[idx];
  state.current = (state.current + 1) % state.images.length;
  renderImage(idx);
}

function prevImage(idx) {
  const state = projectStates[idx];
  state.current =
    (state.current - 1 + state.images.length) % state.images.length;
  renderImage(idx);
}

function setupScrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".project-section")
    .forEach((section) => observer.observe(section));
}

loadProjects();
window.nextImage = nextImage;
window.prevImage = prevImage;
