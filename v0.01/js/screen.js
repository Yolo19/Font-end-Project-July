function opensubpage(url){
    document.getElementById('content_page').className='content_page_on';
    document.getElementById('close').className='close_on';
    document.getElementById('content_page').src='pages/'+url;
}
function closesubpage(){
	document.getElementById('content_page').className='content_page_off';
	document.getElementById('close').className='close_off';		
	document.getElementById('content_page').src='/pages/';
}