/* ======================================================
   LOAD PROJECTS FROM JSON
   ====================================================== */

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

/* ======================================================
   RENDER ALL PROJECTS AS SEPARATE SECTIONS
   ====================================================== */
function renderAllProjects(projects) {
  const container = document.getElementById("projects-container");

  projects.forEach((project, index) => {
    const section = document.createElement("section");
    section.className = "project-section fade-in-up ";

    section.innerHTML = `
      <div class="container custom-container gradient-border mx-auto mb-5 shadow-lg ">
        <div class="row">

          <div class="col-sm-6">
  <div id="carousel-${index}" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      ${project.images.map((img, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${img}" class="d-block w-100 rounded" alt="project images">
        </div>
      `).join("")}
    </div>

    <div class="control-div d-flex justify-content-center mt-3 gap-2">
      <button class="arrow-btn btn btn-outline-secondary"
        data-bs-target="#carousel-${index}" data-bs-slide="prev">‹</button>

      <button class="arrow-btn btn btn-outline-secondary"
        data-bs-target="#carousel-${index}" data-bs-slide="next">›</button>
    </div>

  </div>
</div>

          <div class="col-sm-6 ">
            <h2 class="fw-bold mb-3 project-title">${project.title}</h2>
            <div class="mb-2 project-desc">${project.description}</div>
            <p class="mb-3 fw-bold project-tech">${project.techStack}</p>

            ${project.comingSoon
        ? `<span class="badge bg-secondary p-2">Coming Soon</span>`
        : `<a href="${project.link}" target="_blank" class="btn btn-dark mb-3">Launch</a>`
      }
          </div>

        </div>
      </div>
    `;

    container.appendChild(section);
  });

  setupScrollObserver();
}

/* ======================================================
   CAROUSEL STATE HANDLING
   ====================================================== */

const projectStates = {};

function renderImage(idx) {
  const state = projectStates[idx];
  const img = document.getElementById(`img-${idx}`);
  img.loading = "lazy";
  img.src = state.images[state.current];

  img.classList.add("img-fluid", "w-100");

  // FULL IMAGE, NO CROPPING
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
  state.current = (state.current - 1 + state.images.length) % state.images.length;
  renderImage(idx);
}

/* ======================================================
   SCROLL ANIMATION
   ====================================================== */

function setupScrollObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".project-section").forEach(section => {
    observer.observe(section);
  });
}

/* ======================================================
   INIT
   ====================================================== */
loadProjects();
window.nextImage = nextImage;
window.prevImage = prevImage;
