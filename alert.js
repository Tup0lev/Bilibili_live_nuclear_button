Btn = document.getElementsByClassName('btn live-btn')[0];
Btn.innerHTML='';
Btn.style.color='red'
Btn.style.width='600px'
Btn.style.height='391px'
Btn.style.backgroundColor='white'
var image = document.createElement("img");
image.src = chrome.runtime.getURL("Cyka_Image.png");
Btn.appendChild(image);

