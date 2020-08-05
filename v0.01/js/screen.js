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