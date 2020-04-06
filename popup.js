// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);