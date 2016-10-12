
chrome.browserAction.onClicked.addListener(
    function(tab) { 
        chrome.tabs.executeScript({
            code: 'document.documentElement.classList.toggle("DoNotInteract")'
        });
    }
);