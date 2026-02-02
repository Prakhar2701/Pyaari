const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".buttons");

let lastMove = 0;

function moveNo() {
  const now = Date.now();
  if (now - lastMove < 250) return;
  lastMove = now;

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

container.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 110) moveNo();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  noBtn.innerText = "Not possible 😑";
  moveNo();
});

yesBtn.addEventListener("click", () => {
  // confetti + hearts
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = Math.random() > 0.5 ? "❤" : "🎉";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 18 + "px";
    heart.style.animation = "burst 1.8s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1800);
  }

  setTimeout(() => {
    window.location.href = "love.html";
  }, 1200);
});
