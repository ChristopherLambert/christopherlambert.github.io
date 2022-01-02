function getLanguage(){
    var language = navigator.language;
    return language;
}

function loadSections(){
    $("#portfolio").load("html/sections/sportifolio.html");
}

