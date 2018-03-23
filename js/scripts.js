
//Back-end Logic//


var trackCSS = "CSS"
var trackPHP = "PHP"
var trackSharp = "C#"
var trackJava = "Java"

var city = $("input:radio[name=question2]:checked").val();
var interest = $("input:radio[name=question3]:checked").val();
var workEnviro = $("input:radio[name=question4]:checked").val();
var corpSeattle = $("input:radio[name=question5]:checked").val();
var corpSanFran = $("input:radio[name=question5-2]:checked").val();


if (interest == "frontEnd") {
	return (trackCSS);
}

	if (city == "#seattle") {
		if (interest == "#backEnd") {
		 	if (workEnviro == "#corp") {
				if (corpSeatte == "corpAmazon") {
					return(trackJava);
				} else {
					return(trackSharp);
				}
			}
		}
	}

	if (city == "#sanFran") {
		if (interest == "#backEnd") {
			if (workEnviro == "#corp") {
				if (corpSanFran == "corpGoogle") {
					return(trackJava);
				} else {
				  return(trackSharp);
				}
			}
		}
	}



if (city == "#seattle" || "#sanFran") {
	if (interest == "#backEnd")
		if (workEnviro == "#startUp") {
	return(trackPHP);
		} else {
	}
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

		$("button#next2").submit(function() {
			if (citySelect == "#seattle" || "#sanFran") {
			$("#interest").show();
			$("button#next3").show();
		}
		event.preventDefault();
		});

	});

	$("button#next3").click(function() {
		var interestSelect = $("input:radio[name=question3]:checked").val();
		$("button#next4").show();

	/*	if (interestSelect == "#backEnd") {
			$("workEnviro").show();
		} else {
			$(alert("CSS is the best track for you!"));
		}*/


	});



});
