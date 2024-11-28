const hamburger: HTMLElement | null = document.querySelector(".menu-btn");
const menu: HTMLElement | null = document.querySelector(".mobile-navbar");
const closeIcon: HTMLElement | null = document.querySelector("#close-icon");
const bars = document.querySelectorAll(".bar");
// Look into custom attributes for handling menu state
// Add css classes that can be added or removed rather than hardcoding the styles.

enum ElementState {
  CLOSE = "close",
  OPEN = "open",
  VISIBLE = "visible",
  HIDE = "hide",
}

function setClose() {
  if (!menu || !closeIcon) {
    return;
  }
  menu.setAttribute("data-state", ElementState.CLOSE);
  closeIcon.setAttribute("data-state", ElementState.HIDE);
  Array.from(bars).forEach((bar) => {
    bar.setAttribute("data-state", ElementState.VISIBLE);
  });
}

function setOpen() {
  if (!menu || !closeIcon) {
    return;
  }
  menu.setAttribute("data-state", ElementState.OPEN);
  closeIcon.setAttribute("data-state", ElementState.VISIBLE);
  Array.from(bars).forEach((bar) => {
    bar.setAttribute("data-state", ElementState.HIDE);
  });
}

function toggleMenu() {
  if (!menu || !closeIcon) {
    return;
  }
  // If menu is open, close the menu
  if (menu.getAttribute("data-state") === ElementState.OPEN) {
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
