
$(document).ready(function(){

	if (Cookies.get('test_status') != '1') {
    	$(".plugin").show();
    	Cookies.set('test_status', '1', { expires: 30}); 
    }

});