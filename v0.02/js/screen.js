function opensubpage(url){
    document.getElementById('div_iframe').className='div_iframe_on';
    document.getElementById('close').className='close_on';
    document.getElementById('content_page').src='pages/'+url;
}
function closesubpage(){
    document.getElementById('div_iframe').className='div_iframe_off';
	document.getElementById('close').className='close_off';		
	document.getElementById('content_page').src='/pages/';
}

function menu(){
    if(document.getElementById('nav_main').className == 'nav_main'){
        document.getElementById('nav_main').className='nav_main_on';
    }
    else{
        document.getElementById('nav_main').className='nav_main';
    }
    

}