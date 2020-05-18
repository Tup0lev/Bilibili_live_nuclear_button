function alyoo() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}
document.getElementById('clickme').addEventListener('click', alyoo);