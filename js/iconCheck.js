"use strict";
var message = {};
var iconPath = '';

if ( document.documentElement.classList.contains("DoNotInteract") ) {
    message.iconPath = "resources/stopinteract48.png";
}
else {
    message.iconPath = "resources/interact48.png";
}

chrome.runtime.sendMessage({newIcon: message});
