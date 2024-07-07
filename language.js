window.addEventListener('load', function(e){
    let en = document.getElementsByClassName("en");
    for (let i = 0; i < en.length; i++) {
        en[i].style.display = 'none';
    }
});

document.querySelectorAll('.button-en').forEach(function(button){
    button.addEventListener('click', function(e) {
        let en = document.getElementsByClassName("en");
        for (let i = 0; i < en.length; i++) {
            en[i].style.display = 'revert';
        }
    
        let fr = document.getElementsByClassName("fr");
        for (let i = 0; i < fr.length; i++) {
            fr[i].style.display = 'none';
        }
    });
});

document.querySelectorAll('.button-fr').forEach(function(button){
    button.addEventListener('click', function(e) {
        let fr = document.getElementsByClassName("fr");
        for (let i = 0; i < fr.length; i++) {
            fr[i].style.display = 'revert';
        }
    
        let en = document.getElementsByClassName("en");
        for (let i = 0; i < en.length; i++) {
            en[i].style.display = 'none';
        }
    });
});