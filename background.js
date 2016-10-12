var active = false;

chrome.browserAction.onClicked.addListener(
    function(tab) { 
        //console.log(document.documentElement.classList.add('DoNotInteract'));
    
        /*if (active === false) {
            document.documentElement.classList.add('DoNotInteract');
            alert('hey');
            active = true;
        }
        else {
            document.documentElement.classList.remove('DoNotInteract');
            alert('heya');
            active = false;
        }*/
    }
);