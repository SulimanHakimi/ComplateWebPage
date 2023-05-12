document.getElementById("btn").addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  let randomCode = "#" + randomNumber.toString(16);
  document.getElementById("nav").style.backgroundColor = randomCode;
  // document.getElementById("color-txt").innerText = randomCode;
  // navigator.clipboard.writeText(randomCode);
});
