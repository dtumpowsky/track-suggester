$(document).ready(function() {
	$("form#trackSelect").submit(function(event) {
	event.preventDefault();

	function getValues() {
		var city = $("input:radio[name=question2]:checked").val();
		var path = $("input:radio[name=question3]:checked").val();
		var workEnviro = $("input:radio[name=question4]:checked").val();
		var corpSeattle = $("input:radio[name=question5]:checked").val();
		var corpSanFran = $("input:radio[name=question5-2]:checked").val();


    	getValues();
    	event.preventDefault();
			if ((city == "#seattle") && (path == "#backEnd") && (workEnviro == "#corp") && (corpSeatte == "#corpAmazon")) {
			  alert(track4);
			} else if (corpSeattle == "#corpMicro") {
				alert(track3);
		  };

			if ("#result" == track4) {
				 alert("Java")
			 }

			 if ("#result" == track3) {
				 alert("C#")
			 }

			 if ("#result" == track2) {
				 alert("PHP")
			 }

			 if ("#result" == track2) {
				 alert("PHP")
			 }


  });
});
