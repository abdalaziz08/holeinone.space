function loadGoogleTranslate() {
    var script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=initializeGoogleTranslate";
    document.body.appendChild(script);
}

function initializeGoogleTranslate() {
    new google.translate.TranslateElement({
        pageLanguage: 'ar',
        includedLanguages: 'en,pt', // تم ضبط اللغتين العربية والبرتغالية
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

document.addEventListener("DOMContentLoaded", function() {
    var translateDiv = document.createElement('div');
    translateDiv.id = "google_translate_element";
    translateDiv.style.position = "fixed";
    translateDiv.style.top = "10px";
    translateDiv.style.right = "10px";
    translateDiv.style.zIndex = "1000";
    document.body.appendChild(translateDiv);
    loadGoogleTranslate();
});