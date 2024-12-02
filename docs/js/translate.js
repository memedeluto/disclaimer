// translate.js
function setLanguage(lang) {
    
    if (!translations[lang]) return;

    
    document.getElementById('headerTitle').innerText = translations[lang].headerTitle;
    document.getElementById('navDisclaimer').innerText = translations[lang].navDisclaimer;
    document.getElementById('navContent').innerText = translations[lang].navContent;
    document.getElementById('navContact').innerText = translations[lang].navContact;
    document.getElementById('disclaimerTitle').innerText = translations[lang].disclaimerTitle;
    document.getElementById('disclaimerText').innerText = translations[lang].disclaimerText;
    document.getElementById('contentTitle').innerText = translations[lang].contentTitle;
    document.getElementById('contentText').innerText = translations[lang].contentText;
    document.getElementById('contactTitle').innerText = translations[lang].contactTitle;
    document.getElementById('contactText').innerText = translations[lang].contactText;
    document.getElementById('footerText').innerText = translations[lang].footerText;

    
    document.documentElement.lang = lang;
}