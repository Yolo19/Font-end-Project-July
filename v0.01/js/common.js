window.onscroll = function navStatus(){
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById('nav').className = 'nav_off';
        document.getElementById('logo').className = 'logo_off';
        document.getElementById('nav_main').className = 'nav_main_off';
        }
        else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <=1) {
        document.getElementById('nav').className = 'nav';
        document.getElementById('logo').className = 'logo';
        document.getElementById('nav_main').className = 'nav_main';
        }    
}