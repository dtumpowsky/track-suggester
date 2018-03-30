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


  });
});













// var track1 = "CSS"
// var track2 = "PHP"
// var track3 = "C#"
// var track4 = "Java"
// //Radio Inputs
// var city = $("input:radio[name=question2]:checked").val();
// var path = $("input:radio[name=question3]:checked").val();
// var workEnviro = $("input:radio[name=question4]:checked").val();
// var corpSeattle = $("input:radio[name=question5]:checked").val();
// var corpSanFran = $("input:radio[name=question5-2]:checked").val();
//
//
// if ((city == "#seattle") && (path == "#backEnd") && (workEnviro == "#corp") && (corpSeatte == "#corpAmazon")) {
// 	alert(track4);
// } else if (corpSeattle == "#corpMicro") {
// 	alert(track3);
//  };
//
//  if ("#result" == track4) {
// 	 alert("Java")
//  }
//
//  if ("#result" == track3) {
// 	 alert("C#")
//  }
//
//  if ("#result" == track2) {
// 	 alert("PHP")
//  }
//
//  if ("#result" == track2) {
// 	 alert("PHP")
//  }
//
//
//
//
// // Front End
// $(document).ready(function() {
// 	$("form#trackSelect").submit(function(event) {
// 		var name = $("input#nameInput").val();
// 		var response = alert("Welcome to the next chapter " + name);
// 		$("button#next").click(function() {
// 			$("#city").show();
// 			$alert.()
// 		});
//
//
//  		event.preventDefault();
// 		$("button#next").click(function() {
// 			$("#city").show();
// 		});
// 		var name = $("input#nameInput").val();
// 		var response = alert("Welcome to the next chapter " + name);
//
//
// 	});
// });
