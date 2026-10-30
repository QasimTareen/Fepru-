(() => {
const $ = (s, r = document) => r.querySelector(s);
const root = document.documentElement;

try {
const t = localStorage.getItem("fepru-theme");
if (t) root.dataset.theme = t;
} catch {}

$("#theme").addEventListener("click", () => {
const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
root.dataset.theme = dark ? "light" : "dark";
try { localStorage.setItem("fepru-theme", root.dataset.theme); } catch {}
});

const nav = $("#nav"), menu = $("#menu");
menu.addEventListener("click", () => menu.setAttribute("aria-expanded", nav.classList.toggle("open")));

const io = new IntersectionObserver(entries => entries.forEach(x => {
if (x.isIntersecting) {
x.target.classList.add("in");
io.unobserve(x.target);
}
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const form = $("#notify");
if (form) {
const checks = {
name: [/^[\p{L} .'’-]{2,60}$/u, "Enter your full name."],
email: [/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address."]
};
const validate = n => {
const el = form.elements[n], ok = checks[n][0].test(el.value.trim());
el.classList.toggle("bad", !ok);
$(`[data-for="${n}"]`).textContent = ok ? "" : checks[n][1];
return ok;
};
Object.keys(checks).forEach(n => form.elements[n].addEventListener("blur", () => validate(n)));
form.addEventListener("submit", e => {
e.preventDefault();
const ok = Object.keys(checks).map(validate).every(Boolean);
$("#ok").textContent = ok ? "Thank you. We’ll tell you first." : "";
if (ok) form.reset();
});
}
const film = $(".film video"), toggle = $("#vt");
if (film && toggle) {
const set = playing => {
toggle.textContent = playing ? "Pause" : "Play";
toggle.setAttribute("aria-label", playing ? "Pause video" : "Play video");
};
if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
film.removeAttribute("autoplay");
film.pause();
set(false);
}
toggle.addEventListener("click", () => {
const play = film.paused;
if (play) film.play(); else film.pause();
set(play);
});
}
})();
