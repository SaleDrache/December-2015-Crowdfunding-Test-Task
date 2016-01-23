$(document).ready(function () {

	function close (e) {
		var targetEl = $(e.target).closest('.panel');

		if(targetEl.length < 1 || $(e.target).hasClass('glyphicon-remove'))
			$(this).closest(".wrapper").hide();
	}
	function show_register () {        
	    $("#wrapper_register_form").show();
	}
	function stop_propagation(e){
		e.stopPropagation();
	}
	function consolelog () {
		console.log($(this).closest("div").find("input").val());
	}
	function validateEmail(email) {
	    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
	function successful_signup() {
		$(".signup_btn").hide();
		var msg = $("<br><span>Thank you for signing up on our newsletter</span>");

		$(".signup_form").addClass("green");	/* border, icon and text are green */

		$(".glyphicon-remove").hide();
		$(".glyphicon-ok").show();
		$(".msg").html(msg);
		setTimeout(function() {
			$(".signup_form").hide();
		}, 3000);
	}
	function unsuccessful_signup() {
		var msg = $("<br><span>Please provide a valid email address</span><br>");

		$(".signup_form").addClass("red");	/* border, icon and text are red */
		$(".glyphicon-remove").show();
		$(".msg").html(msg);
	}

			/*  NEWSLETTER SIGNUP  */

	$( "form" ).submit(function( event ) {
		event.preventDefault();

		var email = $(this).find( "input" ).val();

		(validateEmail(email)) ? successful_signup() : unsuccessful_signup();
	});


			/* REGISTRATION */

	//$(".panel").on('click', stop_propagation);
	$(".register").on("click", show_register) ;
	$(".wrapper").on("click", close);
	$(".glyphicon-remove").on("click", close);
	/*$(".signup_btn").on("click", consolelog); */
	$(".register_me_btn").on("click", consolelog);
});
