
$(document).ready(() => {
    $('#close_sidebar_btn').on('click', () => {
        $('.sidebar').animate({
            'right': '-650px'
        }, 500)
    })
})

// Load admin scripts and destroy

function loadScript() {
    body = document.body;
    let script = document.createElement('script');
    script.id = 'admin_scripts_loader';
    script.innerHTML = '';
    script.src = 'assets/admin/scripts/main.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
};

function destroyScript() {
    const scriptLoader = document.getElementById('admin_scripts_loader');

    body.removeChild(scriptLoader);
}

function sortTable(element) {

    let icon;

    if((!element.innerHTML)) {
        icon = $(element); //Click in the icon
    } else {
        icon = $(element).find('i.fa'); //Clicked in th
    }

    const icons = $('.turnos-table th i');
    for(let i = 0; i < icons.length; i++) {
        $(icons[i]).css({
            'visibility': 'hidden' //Hiding all icons
        })
    }

    icon.css({
        'visibility': 'visible'
    })

    if(icon.css('transform').indexOf('matrix')) {
        icon.css({
            'transform': 'rotate(180deg)'
        })
    } else {
        icon.css({
            'transform': 'none'
        })
    }
}

function showMoreInfoSidebar() {
    $('.sidebar').animate({
        'right': '0'
    }, 500)
}