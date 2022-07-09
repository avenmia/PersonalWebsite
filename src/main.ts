const hamburger: HTMLElement | null = document.querySelector(".menu-btn");
const menu: HTMLElement | null = document.querySelector(".mobile-navbar");
const closeIcon: HTMLElement | null = document.querySelector("#close-icon");
const bars = document.querySelectorAll(".bar");
// Look into custom attributes for handling menu state
// Add css classes that can be added or removed rather than hardcoding the styles.

function setClose() {
  if (!menu || !closeIcon) {
    return;
  }
  menu.setAttribute("data-state", "close");
  closeIcon.setAttribute("data-state", "hide");
  Array.from(bars).forEach((bar) => {
    bar.setAttribute("data-state", "visible");
  });
}

function setOpen() {
  if (!menu || !closeIcon) {
    return;
  }
  menu.setAttribute("data-state", "open");
  closeIcon.setAttribute("data-state", "visible");
  Array.from(bars).forEach((bar) => {
    bar.setAttribute("data-state", "hide");
  });
}

function toggleMenu() {
  if (!menu || !closeIcon) {
    return;
  }
  // If menu is open, close the menu
  if (menu.getAttribute("data-state") === "open") {
    setClose();
  } else {
    setOpen();
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    setClose();
  }
});

hamburger?.addEventListener("click", toggleMenu);
