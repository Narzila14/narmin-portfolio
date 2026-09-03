// ---------- mobile nav toggle ----------
const navToggle = document.querySelector(".nav-toggle");
const topnavLinks = document.querySelector(".topnav-links");

if (navToggle && topnavLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = topnavLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  topnavLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      topnavLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- nav active-state on scroll ----------
// No-op on pages without multiple [id] sections (e.g. project pages) — harmless.
const sections = document.querySelectorAll(".section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if (sections.length) {
  const setActiveLink = () => {
    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) currentId = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
}
