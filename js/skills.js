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

  container.innerHTML = `
    <h1 class="skills text-center mb-4">Skills</h1>
    <p class="text-center" style="opacity:0.7;">My technical & other skills</p>
    <div class="skills-wrapper"></div>
  `;

  const wrapper = container.querySelector(".skills-wrapper");

  categories.forEach((cat, index) => {
    wrapper.innerHTML += createCategoryHTML(cat, index);
  });

  initAccordions();
}

function createCategoryHTML(category, index) {
  return `
    <div class="skill-category" data-index="${index}">
      <div class="skill-cat-header">
        <div class="left-side">
          <span class="skill-icon">${getIcon(category.icon)}</span>
          <div>
            <h3>${category.category}</h3>
            <p class="xp">${category.experience}</p>
          </div>
        </div>

        <div class="arrow">&#9662;</div>
      </div>

      <div class="skill-items">
        ${category.skills
      .map(skill => createSkillBar(skill))
      .join("")}
      </div>
    </div>
  `;
}

function createSkillBar(skill) {
  return `
    <div class="skill-bar">
      <div class="skill-title">${skill.name}<span>${skill.level}%</span></div>

      <div class="progress">
        <div class="progress-fill" style="width:${skill.level}%"></div>
      </div>
    </div>
  `;
}

function getIcon(type) {
  const icons = {
    code: "💻",
    frontend: "🎨",
    server: "🖥️",
    devops: "⚙️"
  };
  return icons[type] || "🔧";
}

function initAccordions() {
  const categories = document.querySelectorAll(".skill-category");

  categories.forEach(cat => {
    const header = cat.querySelector(".skill-cat-header");

    header.addEventListener("click", () => {
      const isOpen = cat.classList.contains("open");

      document.querySelectorAll(".skill-category").forEach(c => c.classList.remove("open"));
      if (!isOpen) cat.classList.add("open");
    });
  });
}
