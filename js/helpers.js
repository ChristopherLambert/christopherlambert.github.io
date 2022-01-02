function getLanguage(){
    var language = navigator.language;
    return language;
}

function loadSections(){
    $("#portfolio").load("html/sections/sportifolio.html");
    $("#about").load("html/sections/sabout.html");
    $("#contact").load("html/sections/scontacts.html");
}

