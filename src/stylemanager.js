var darktheme = document.getElementById('dark-theme-css');
var lightheme = document.getElementById('light-theme-css');
var maintheme = document.getElementById('main-theme-css');

//Function That Creates Cookies
function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


//Function That Gets Cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Function That Changes The Theme Based On The Cookie
function changeTheme(){
    var theme = getCookie("theme");
    if(theme == "light"){
        var darktheme = document.getElementById('dark-theme-css');
        var lightheme = document.getElementById('light-theme-css');
        if(lightheme){
            lightheme.remove();
        }
        var link = document.createElement('link');
        link.setAttribute('id', 'dark-theme-css');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', '/src/css/darktheme/darktheme.css');
        document.getElementsByTagName('head')[0].appendChild(link);
        setCookie("theme", "dark", 365);
    }
    if(theme == "dark"){
        var darktheme = document.getElementById('dark-theme-css');
        var lightheme = document.getElementById('light-theme-css');
        if(darktheme){
            darktheme.remove();
        }
        var link = document.createElement('link');
        link.setAttribute('id', 'light-theme-css');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', '/src/css/lightheme/lightheme.css');
        document.getElementsByTagName('head')[0].appendChild(link);
        setCookie("theme", "light", 365);
    }
}

var getcookieresult = getCookie("theme");

if(getcookieresult == "") {
    console.warn("[Style Manager] No theme cookie found, using default theme");
    setCookie("theme", "light", 365);
}
else {
     //Set Theme Based On Cookie
    var theme = getCookie("theme");
    if(theme == "dark"){
        var darktheme = document.getElementById('dark-theme-css');
        var lightheme = document.getElementById('light-theme-css');
        if(lightheme){
            lightheme.remove();
        }
        if(!darktheme){
            var link = document.createElement('link');
            link.setAttribute('id', 'dark-theme-css');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', '/src/css/darktheme/darktheme.css');
            document.getElementsByTagName('head')[0].appendChild(link);
            setCookie("theme", "dark", 365);
        }
        }
    if(theme == "light"){
        var darktheme = document.getElementById('dark-theme-css');
        var lightheme = document.getElementById('light-theme-css');
        if(darktheme){
            darktheme.remove();
        }
        if(!lightheme){
            var link = document.createElement('link');
            link.setAttribute('id', 'light-theme-css');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', '/src/css/lightheme/lightheme.css');
            document.getElementsByTagName('head')[0].appendChild(link);
            setCookie("theme", "light", 365);
        }
    }
}

//Delete Element Function

function deletelement(id){
    var elemement = document.getElementById(id);
    elemement.remove();
    if(id == 'disclaimer-box'){
        setCookie("disclaimer", "false", 365);
    }
}

//Check If Disclaimer Cookie Exists

var checkdisclaimer =  getCookie("disclaimer");
if(checkdisclaimer == "false"){
    console.log("[Style Manager] Not showing disclaimer");
    document.getElementById('disclaimer-box').remove();
}

