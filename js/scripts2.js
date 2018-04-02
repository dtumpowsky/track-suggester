var track1 = "CSS!!"
var track2 = "PHP!!"
var track3 = "Java!!"
var track4 = "C#!!"
var city;
var path;
var workEnviro;
var corpSeattle;
var corpSanFran;
var text = "Congratulations! Your next career is in "




$(document).ready(function() {

	$("button#next1").click(function() {
		event.preventDefault();
		var name = $("input#nameInput").val();
		  alert("Welcome to the next chapter " + name + "!")
		});



	function getValues() {
			city = $("input:radio[name=question2]:checked").val();
		 	path = $("input:radio[name=question3]:checked").val();
		 	workEnviro = $("input:radio[name=question4]:checked").val();
		 	corpSeattle = $("input:radio[name=question5]:checked").val();
		 	corpSanFran = $("input:radio[name=question5-2]:checked").val();
	}




		$("form#trackSelect").submit(function(event) {

			getValues();
			event.preventDefault();

			if (city == "seattle" && path == "backEnd" && workEnviro == "corp") {
				$("#northWest").show();
			} else if (city == "sanFran" && path == "backEnd" && workEnviro == "corp") {
				$("#cali").show();
			} else {}

			if (city == "seattle" && path == "backEnd" && workEnviro == "corp" && corpSeattle == "corpAmazon") {
			  $("#answer").text(text + track3);
			} else if (corpSeattle == "corpMicro") {
				$("#answer").text(text + track3);
		  }

			if (city == "sanFran" && path == "backEnd" && workEnviro == "corp" && corpSanFran == "corpGoogle") {
			  $("#answer").text(text + track3);
			} else if (corpSanFran == "corpStackOverflow") {
				$("#answer").text(text + track3);
		  }

			if (workEnviro == "startUp") {
				 $("#answer").text(text + track2);
			}

			if (path == "frontEnd") {
				 $("#answer").text(text + track1);
			}


	})
});
