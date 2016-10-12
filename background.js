var active = false;

chrome.browserAction.onClicked.addListener(
    function(tab) { 
        if (active === false) {
            chrome.tabs.executeScript({
                code: 'document.documentElement.classList.add("DoNotInteract")'
            });
            active = true;
        }
        else {
            chrome.tabs.executeScript({
                code: 'document.documentElement.classList.remove("DoNotInteract")'
            });
            active = false;
        }
    }
);