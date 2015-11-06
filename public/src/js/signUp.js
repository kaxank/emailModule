$(document).ready(function(){
	console.log('Click the button to Sign Up!');
	


	
	//button for sign Up and redirecting "signup.html"
	$('#signUp').click(function(event){
		console.log('"Sign Up Now" button clicked');
		//event.preventDefault();

		var theEvent = $(this);
		var goodToGo = JSON.stringify(theEvent.serializeArray());

		$.ajax({
		type: 'GET', 
		url:'/signup', 
		
		success: function(data){
			console.log('Success Alert');

				 },
			
		});

		// $.ajax({
		// 	type: 'POST', 
		// 	url:'/signup', 
		// 	data: { inf: goodToGo},
		// 	dataType:'json',
		// 	success: function(data2){
		// 	console.log('Success Alert2');

		// 		 }
		// });
		

		//window.location.replace("http://localhost:8080/signup");
		//window.location.href = "http://stackoverflow.com";
	});

	//return home page 
	$('#returnHome').click(function(){
		console.log('Redirected to HOME');
		//window.location.replace("http://localhost:8080/");
		//window.location.href = "http://stackoverflow.com";
	});

	//All form data will send for processes in serhan's App
	$('#signUpForm').on('submit', function(event){
		
		event.preventDefault();
		var signUpForm = $(this);
		var formReady = JSON.stringify(signUpForm.serializeArray());
		
		console.log(formReady[1].surName);
		console.log(formReady[0].name);
		console.log(formReady);
		console.log('signUpForm', signUpForm);
		console.log("Mail Will be send in a few minutes! " + formReady );
	

		$.ajax({
		type: 'POST', 
		url:'/regismail', 
		data: { info: formReady },
		dataType:'json'
		 });


		//window.location.replace("http://localhost:8080/confMail");
		});



});
