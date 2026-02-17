const mail = document.getElementById("mail");
const flipBtn = document.getElementById("flipBtn");
const openBtn = document.getElementById("openBtn");
const hint = document.getElementById("hint");

let isFlipped = false;
let isOpened = false;

flipBtn.addEventListener("click", () => {
  if (isFlipped) return;

  isFlipped = true;
  mail.classList.add("flipped");
  flipBtn.disabled = true;
  hint.textContent = "Step 2: Click “Click here” again to open and pull out your letter.";
});

openBtn.addEventListener("click", () => {
  if (!isFlipped || isOpened) return;

  isOpened = true;
  mail.classList.add("opened");
  openBtn.disabled = true;
  hint.textContent = "Your interactive letter is ready — you can replace the placeholder text anytime.";
});
