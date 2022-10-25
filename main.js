const form = document.querySelector("form");
const fileInput = document.querySelector("form input[type=file]");
const textArea = document.querySelector("#text");
const selectText = document.querySelector("#select-text");

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const base64 = await toBase64(fileInput.files[0]);
  console.log(base64);
  textArea.textContent = base64;
});

selectText.addEventListener("click", () => {
  textArea.focus();
  textArea.select();
});
