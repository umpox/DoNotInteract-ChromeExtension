"use strict";
function changeIcon() {
    chrome.tabs.executeScript(null, {file: "js/iconCheck.js"});
}
function changeInteraction() {
    chrome.tabs.executeScript(null, {file: "js/toggleInteraction.js"});
}

chrome.browserAction.onClicked.addListener(
    function(tab) { 
        changeInteraction();
        changeIcon();
    }
);

//Execute script when a new tab is selected
chrome.tabs.onActivated.addListener (
    function () {
        changeIcon();
    }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.newIcon) {
     chrome.browserAction.setIcon({
      path: request.newIcon.iconPath
    });   
  }
});