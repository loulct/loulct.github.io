window.addEventListener('load', function(e){
    let en = document.getElementsByClassName("en");
    for (let i = 0; i < en.length; i++) {
        en[i].style.display = 'none';
    }
});

document.querySelectorAll('.toggle-button').forEach(function(button){
    button.addEventListener('click', function(e) {
        let en = document.getElementsByClassName("en");
        let fr = document.getElementsByClassName("fr");

        [].forEach.call(en, function (section) {
            if(section.style.display == 'none') {
                section.style.display = 'revert';
                let toggle = document.getElementsByClassName("toggle-circle");
                [].forEach.call(toggle, function (toogle) {
                    toogle.style.left = '30px';
                });
            } else {
                section.style.display = 'none';
            }
        });
        
        [].forEach.call(fr, function (section) {
            if(section.style.display == 'none') {
                section.style.display = 'revert';
                let toggle = document.getElementsByClassName("toggle-circle");
                [].forEach.call(toggle, function (toogle) {
                    toogle.style.left = '6px';
                });
            } else {
                section.style.display = 'none';
            }
        });
    });
});