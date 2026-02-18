const mail = document.getElementById("mail");
const flipBtn = document.getElementById("flipBtn");
const openBtn = document.getElementById("openBtn");
const finishBtn = document.getElementById("finishBtn");
const hint = document.getElementById("hint");
const cvToggleBtn = document.getElementById("cvToggleBtn");
const contactToggleBtn = document.getElementById("contactToggleBtn");
const cvPanel = document.getElementById("cvPanel");
const contactPanel = document.getElementById("contactPanel");
const cvImg1 = document.getElementById("cvImg1");
const cvImg2 = document.getElementById("cvImg2");
const cvDownload1 = document.getElementById("cvDownload1");
const cvDownload2 = document.getElementById("cvDownload2");

// External-host setup (Google Drive)
const CV_FOLDER_URL = "https://drive.google.com/drive/folders/1sfjc63od22sRVrkDV3pPgdTDyfaEP0uB?usp=drive_link";

// NOTE: Replace FILE_ID_* with your actual Drive file IDs if needed.
// Format examples:
// preview:  https://drive.google.com/uc?export=view&id=FILE_ID
// download: https://drive.google.com/uc?export=download&id=FILE_ID
const cvImage1 = "https://drive.google.com/uc?export=view&id=FILE_ID_PAGE_1";
const cvImage2 = "https://drive.google.com/uc?export=view&id=FILE_ID_PAGE_2";
const cvDownloadUrl1 = "https://drive.google.com/uc?export=download&id=FILE_ID_PAGE_1";
const cvDownloadUrl2 = "https://drive.google.com/uc?export=download&id=FILE_ID_PAGE_2";

cvImg1.src = cvImage1;
cvImg2.src = cvImage2;
cvImg1.loading = "lazy";
cvImg2.loading = "lazy";
cvImg1.referrerPolicy = "no-referrer";
cvImg2.referrerPolicy = "no-referrer";

cvDownload1.href = cvDownloadUrl1;
cvDownload2.href = cvDownloadUrl2;
cvDownload1.target = "_blank";
cvDownload2.target = "_blank";

cvImg1.addEventListener("error", () => {
  cvImg1.alt = "Could not load page 1 preview. Open Google Drive folder.";
  cvDownload1.href = CV_FOLDER_URL;
});

cvImg2.addEventListener("error", () => {
  cvImg2.alt = "Could not load page 2 preview. Open Google Drive folder.";
  cvDownload2.href = CV_FOLDER_URL;
});

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
