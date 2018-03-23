
//Back-end Logic//


var trackCSS = "CSS"
var trackPHP = "PHP"
var trackSharp = "C#"
var trackJava = "Java"

var interest = $("#csInterest").val();
var city = $("#city").val();
var workEnviro = $("#wkEnviro").val();
var corpSeattle = $("#corpSeattle").val();
var corpSanFran = $("#corpSanFran").val()


if (city === "#seattle" || "#sanFran" && interest === "#frontEnd") {
	alert(trackCSS);
}

if (city === "#seattle" && interest === "#backEnd" && workEnviro === "#corp" && corpSeatte === "corpAmazon") {
	alert(trackJava);
} else {
	alert(trackSharp);
}

if (city === "#sanFran" && interest === "#backEnd" && workEnviro === "#corp" && corpSanFran === "corpGoogle") {
	alert(trackJava);
} else {
	alert(trackSharp);
}

if (city === "#seattle" || "#sanFran" && interest === "#backEnd" & workEnviro === "#startUp") {
	alert(trackPHP);
}






//Front-end Logic//

$(document).ready(function() {

	$("button#next1").click(function() {
		var name = $("input#nameInput").val();
		var response = (confirm("Welcome to the next chapter " + name));

		if (response == true) {
			$("#city").show();
			$("button#next2").show();
		}
	});

	$("#city form").submit(function(event) {
		var citySelect = $("input:radio[name=question2]:checked").val();
		event.preventDefault();

		$("button#next2").submit(function() {
			if (citySelect === "#seattle" || "#sanFran") {
			$("#interest").show();
			$("button#next3").show();
		}
		});

	});

	$("button#next3").click(function() {
		var interestSelect = $("input:radio[name=question3]:checked").val();
		$("button#next4").show();

	/*	if (interestSelect === "#backEnd") {
			$("workEnviro").show();
		} else {
			$(alert("CSS is the best track for you!"));
		}*/


	});



});
