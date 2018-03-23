$(document).ready(function() {





	$("button#next1").click(function() {
		var name = $("input#nameInput").val();
		var response = (confirm("Welcome to the next chapter " + name));

		if (response == true) {
			$("#csInterest").show();
		}




	});



});
