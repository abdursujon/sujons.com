/* ======================================================
   LOAD SKILLS JSON + RENDER
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadSkills();
});

function loadSkills() {
  fetch("assets/data/skills.json")
    .then(res => res.json())
    .then(data => renderSkills(data))
    .catch(err => console.error("Failed to load skills.json:", err));
}

function renderSkills(categories) {
  const container = document.querySelector(".custom-container-skills");
  if (!container) return;

  container.innerHTML = ""; // clear old button-style layout

  categories.forEach((category, index) => {
    const section = document.createElement("section");
    section.className = "skill-section fade-in-up";
    section.innerHTML = `
      <div class="container py-5">
        <h1 class="skills text-center mb-4">${category.category}</h1>

        <div class="row g-4 skill-grid">
          ${category.skills
            .map(skill => createSkillCard(skill))
            .join("")}
        </div>
      </div>
    `;
    container.appendChild(section);
  });

  setupSkillObserver();
}

function createSkillCard(skill) {
  return `
    <div class="col-12 col-md-6 col-lg-3">
      <div class="skill-card p-4 h-100">
        <h3>${skill.title}</h3>
        <p class="sub-p">${skill.info}</p>
        <p class="skill-desc">${skill.description}</p>

        ${
          skill.project
            ? `<p class="project-ex">
                 <strong>Project Example:</strong>
                 <a href="${skill.project.link}" target="_blank">${skill.project.name}</a>
               </p>`
            : ""
        }
      </div>
    </div>
  `;
}

/* ======================================================
   SCROLL REVEAL (Same as projects)
   ====================================================== */

function setupSkillObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".skill-section").forEach(section => {
    observer.observe(section);
  });
}
