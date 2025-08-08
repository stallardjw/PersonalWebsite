  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleButton");
    const collapseEl = document.getElementById("moreExperience");

    if (collapseEl) {
      collapseEl.addEventListener("shown.bs.collapse", function () {
        toggleBtn.textContent = "View Less ▲";
      });

      collapseEl.addEventListener("hidden.bs.collapse", function () {
        toggleBtn.textContent = "View More ▼";
      });
    }
  });
