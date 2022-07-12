const images = ["main_01@2x.jpg", "main_02@2x.jpg", "main_03@2x.jpg" , "main_04@2x.jpg", "main_05@2x.jpg"];
const bg = document.querySelector('.background')

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(bg);
bg.style.backgound=`url(img/main_04@2x.jpg)`