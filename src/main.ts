const hamburger: HTMLElement | null = document.querySelector(".toggle-label");
const menu: HTMLElement | null = document.querySelector(".mobile-navbar");
const closeIcon: HTMLElement | null = document.querySelector("#close-icon");
const bars = document.querySelectorAll(".bar");
// Look into custom attributes for handling menu state
// Add css classes that can be added or removed rather than hardcoding the styles.

function toggleMenu() {
  if (!menu || !hamburger || !closeIcon) {
    return;
  }
  // If menu is open, close the menu
  if (menu.getAttribute("data-state") === "open") {
    menu.setAttribute("data-state", "close");
    closeIcon.setAttribute("data-state", "hide");
    Array.from(bars).forEach((bar) => {
      bar.setAttribute("data-state", "visible");
    });
  } else {
    menu.setAttribute("data-state", "open");
    closeIcon.setAttribute("data-state", "visible");
    Array.from(bars).forEach((bar) => {
      bar.setAttribute("data-state", "hide");
    });
  }
}

hamburger?.addEventListener("click", toggleMenu);
