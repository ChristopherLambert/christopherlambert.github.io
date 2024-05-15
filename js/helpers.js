function getLanguage(){
    var language = navigator.language;
    return language;
}

function loadSections(){
    $("#portfolio").load("html/sections/sportifolio.html");
    $("#about").load("html/sections/sabout.html");
    $("#contact").load("html/sections/scontacts.html");
    $("#resume").load("html/sections/sresume.html");
    $("#web3").load("html/sections/sweb3.html");
}

function printPdf (data , title ) {
    const byteCharacters = atob ( data );
    const byteNumbers = new Array ( byteCharacters.length );
    for ( let i = 0; i < byteCharacters.length; i++) {
    byteNumbers [i] = byteCharacters.charCodeAt (i);
    }
    const byteArray = new Uint8Array ( byteNumbers );
    const file = new Blob ([ byteArray ], { type: 'application/pdf;base64' }) ;
    const fileURL = URL.createObjectURL ( file );
    const winPDF = window.open ( fileURL , title );
    // Open PDF
    winPDF.onload = (() => {
      setTimeout (() => winPDF.document.title = title , 1000) ;
    }) ;
}

