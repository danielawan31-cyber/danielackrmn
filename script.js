const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("show"));
});

const words = ["Game dev", "Web Designer", "3d Artists"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
  const word = words[wordIndex];

  if (!deleting) {
    typing.textContent = word.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeEffect, 1300);
      return;
    }
  } else {
    typing.textContent = word.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 55 : 90);
}

typeEffect();

function sendMessage(event) {
  event.preventDefault();
  alert("Pesan berhasil disiapkan! Hubungkan form ini ke WhatsApp/email jika ingin benar-benar mengirim pesan.");
}
