Btn = document.getElementsByClassName('btn live-btn')[0];
Btn.innerHTML='<img src=https://github.com/Tup0lev/Bilibili_live_nuclear_button/blob/master/Cyka_Image.png?raw=true />';
Btn.style.color='red'
Btn.style.width='600px'
Btn.style.height='391px'
Btn.style.backgroundColor='white'
var image = document.createElement("img");
image.src = chrome.runtime.getURL("Cyka_Image.png");
Btn.appendChild(image);

