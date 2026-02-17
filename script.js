const mail = document.getElementById("mail");
const flipBtn = document.getElementById("flipBtn");
const openBtn = document.getElementById("openBtn");
const finishBtn = document.getElementById("finishBtn");
const hint = document.getElementById("hint");
const cvToggleBtn = document.getElementById("cvToggleBtn");
const contactToggleBtn = document.getElementById("contactToggleBtn");
const cvPanel = document.getElementById("cvPanel");
const contactPanel = document.getElementById("contactPanel");

let isFlipped = false;
let isOpened = false;

flipBtn.addEventListener("click", () => {
  if (isFlipped) return;

  isFlipped = true;
  mail.classList.add("flipped");
  hint.textContent = "Step 2: Click “Click here” to take the letter out.";
});

openBtn.addEventListener("click", () => {
  if (!isFlipped || isOpened) return;

  isOpened = true;
  mail.classList.add("opened");
  openBtn.classList.add("is-hidden");
  finishBtn.classList.remove("is-hidden");
  hint.textContent = "Read your letter, then click “Finished reading it” below.";
});

finishBtn.addEventListener("click", () => {
  if (!isOpened) return;

  isOpened = false;
  mail.classList.remove("opened");
  openBtn.classList.remove("is-hidden");
  finishBtn.classList.add("is-hidden");
  hint.textContent = "Letter is back in the envelope.";
});

cvToggleBtn.addEventListener("click", () => {
  cvPanel.classList.toggle("is-hidden");
  contactPanel.classList.add("is-hidden");
});

contactToggleBtn.addEventListener("click", () => {
  contactPanel.classList.toggle("is-hidden");
  cvPanel.classList.add("is-hidden");
});
