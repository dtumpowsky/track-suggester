var track1 = "CSS"
var track2 = "PHP"
var track3 = "Java"
var track4 = "C#"
var city;
var path;
var workEnviro;
var corpSeattle;
var corpSanFran;

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




			if (city == "seattle" && path == "backEnd" && workEnviro == "corp" && corpSeatte == "corpAmazon") {
			  alert("Java");
			} else if (corpSeattle == "#corpMicro") {
				alert("C#");
		  };

			if ("#result" == track4) {
				 alert("Java");
			}

			if ("#result" == track3) {
				 alert("C#");
			}

			if ("#result" == track2) {
				 alert("PHP");
			}

			if ("#result" == track2) {
				 alert("PHP");
			}




	})
});
