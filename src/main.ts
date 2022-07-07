const hamburger: HTMLElement | null = document.querySelector(".toggle-label");
const menu: HTMLElement | null = document.querySelector(".mobile-navbar");
const closeMenu: HTMLElement | null = document.querySelector(".close-menu");

function toggleMenu() {
  if (!menu || !hamburger || !closeMenu) {
    return;
  }
  const menuDisplay = menu.style.display;
  if (menuDisplay === "block") {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => ((bar as HTMLElement).style.display = "block"));

    return;
  }
  menu.style.display = "block";
  closeMenu.style.display = "block";
  closeMenu.style.color = "white";
  closeMenu.style.fontSize = "24px";
  closeMenu.style.margin = "5px";
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => ((bar as HTMLElement).style.display = "none"));
}

hamburger?.addEventListener("click", toggleMenu);
