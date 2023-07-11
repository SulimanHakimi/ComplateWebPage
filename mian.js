document.getElementById("btn").addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  let randomCode = "#" + randomNumber.toString(16);
  document.getElementById("nav").style.backgroundColor = randomCode;
});
let btnRemove = document.getElementById("btnRemove");
let btnRemove2 = document.getElementById("btnRemove2");
let box1 = document.getElementById('imgRemve');
let box2 = document.getElementById('imgRemve2');
let homeSec = document.getElementById('home') 

btnRemove.addEventListener('click',()=>{
  box1.style.display = "none";
  if(box1.style.display = "none"){
    box2.style.width = "100%";
    btnRemove2.style.display = "block"
  }
})
btnRemove2.addEventListener('click',()=>{
  box2.style.display = "none"
  box1.style.display = "block"
  box1.style.width = "100%";
  if(box1.style.width = "100%"){
    btnRemove.style.right = "12%"
  }
  if(box1.style.display == "none" || box2.style.display == "none"){
homeSec.style.display = "none"
  }
})
