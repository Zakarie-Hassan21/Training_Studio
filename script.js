document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.querySelector(".mobile-menu-toggle");
	const menuButton = menuToggle?.querySelector(".fa-bars");
	const closeButton = menuToggle?.querySelector(".fa-close");
	const nav = document.querySelector(".mobile-menu-lists");

	if (!nav || !menuToggle || !menuButton || !closeButton) return;

	const setMenuState = (open) => {
		nav.classList.toggle("active", open);
		menuToggle.classList.toggle("active", open);
		menuButton.setAttribute("aria-hidden", String(open));
		closeButton.setAttribute("aria-hidden", String(!open));
		menuToggle.setAttribute("aria-expanded", String(open));
	};

	menuToggle.setAttribute("role", "button");
	menuToggle.setAttribute("tabindex", "0");
	menuToggle.setAttribute("aria-label", "Toggle navigation menu");
	menuToggle.addEventListener("click", () => {
		setMenuState(!nav.classList.contains("active"));
	});
	menuToggle.addEventListener("keydown", (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			setMenuState(!nav.classList.contains("active"));
		}
	});

	nav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => setMenuState(false));
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") setMenuState(false);
	});

	setMenuState(false);
});
