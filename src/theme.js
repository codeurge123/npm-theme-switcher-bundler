const STORAGE_KEY = "theme";

function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.style.backgroundColor = "#0f172a";
    root.style.color = "#e5e7eb";
  } else {
    root.style.backgroundColor = "#ffffff";
    root.style.color = "#0f172a";
  }

  localStorage.setItem(STORAGE_KEY, theme);
}

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY) || "light";
  applyTheme(saved);
}

export function toggleTheme() {
  const current = localStorage.getItem(STORAGE_KEY) || "light";
  const next = current === "light" ? "dark" : "light";
  applyTheme(next);
}
