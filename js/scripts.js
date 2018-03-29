
// Front End
$(document).ready(function() {
	$("form#trackSelect").submit(function(event) {
 		event.preventDefault();

		var name = $("input#nameInput").val();
		var response = alert("Welcome to the next chapter " + name);

		var track1 = "CSS"
		var track2 = "PHP"
		var track3 = "C#"
		var track4 = "Java"
//Radio Inputs
		var city = $("input:radio[name=question2]:checked").val();
		var path = $("input:radio[name=question3]:checked").val();
		var workEnviro = $("input:radio[name=question4]:checked").val();
		var corpSeattle = $("input:radio[name=question5]:checked").val();
		var corpSanFran = $("input:radio[name=question5-2]:checked").val();

		if ((city == "#seattle") && (path == "#backEnd") && (workEnviro == "#corp") && (corpSeatte == "#corpAmazon")) {
		 	alert(track4);
			} else {
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








// //Back-end Logic//
//
//
// var track1 = "CSS"
// var track2 = "PHP"
// var track3 = "C#"
// var track4 = "Java"
//
// // var city = $("input:radio[name=question2]:checked").val();
// // var path = $("input:radio[name=question3]:checked").val();
// // var workEnviro = $("input:radio[name=question4]:checked").val();
// // var corpSeattle = $("input:radio[name=question5]:checked").val();
// // var corpSanFran = $("input:radio[name=question5-2]:checked").val();
//
//
// // if (path == "#frontEnd") {
// // 	("#result") = track1
// // }
// //
// // if (city == "#seattle") && (path == "#backEnd") && (workEnviro == "#corp") && (corpSeatte == "#corpAmazon") {
// // 	("#result" = track4);
// // } else {
// // 	("#result" = track3);
// // };
// //
// // if (city == "#sanFran") && (path == "#backEnd") && if (workEnviro == "#corp") && if (corpSanFran == "#corpGoogle") {
// // 	("#result" = track4);
// // } else {
// // 	("#result" = track3);
// // };
// //
// //
// //
// // if (city == "#seattle" || "#sanFran") && if (path == "#backEnd") && {if (workEnviro == "#startUp") {
// // 	("#result" = track2);
// // };
//
//
//
//
//
// //Front-end Logic//
//
// $(document).ready(function() {
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 	// $("button#next1").click(function() {
// 	// 	event.preventDefault();
// 	// 	var name = $("input#nameInput").val();
// 	// 	var response = (confirm("Welcome to the next chapter " + name));
// 	//
// 	// 	if (response == true) {
// 	// 		$("#city").show();
// 	// 		$("button#next2").show();
// 	// 	}
// 	// });
// 	//
// 	// var city = $("input:radio[name=question2]:checked").val();
// 	// var path = $("input:radio[name=question3]:checked").val();
// 	// var workEnviro = $("input:radio[name=question4]:checked").val();
// 	// var corpSeattle = $("input:radio[name=question5]:checked").val();
// 	// var corpSanFran = $("input:radio[name=question5-2]:checked").val();
// 	//
// 	//
// 	// if (path == "#frontEnd") {
// 	// 	"#result" = track1
// 	// } else {
// 	//
// 	// };
// 	//
// 	// if (city == "#seattle") && (path == "#backEnd") && (workEnviro == "#corp") && (corpSeatte == "#corpAmazon") {
// 	// 	("#result" = track4);
// 	// } else {
// 	// 	("#result" = track3);
// 	// };
// 	//
// 	// if (city == "#sanFran") && (path == "#backEnd") && if (workEnviro == "#corp") && if (corpSanFran == "#corpGoogle") {
// 	// 	("#result" = track4);
// 	// } else {
// 	// 	("#result" = track3);
// 	// };
// 	//
// 	//
// 	//
// 	// if (city == "#seattle" || "#sanFran") && if (path == "#backEnd") && {if (workEnviro == "#startUp") {
// 	// 	("#result" = track2);
// 	// };
// 	//
// 	// // $("#city form").submit(function(event) {
// 	// // 	event.preventDefault();
// 	// // 	var citySelect = $("input:radio[name=question2]:checked").val();
// 	// //
// 	// // 	$("button#next2").submit(function() {
// 	// // 		if (citySelect == "#seattle" || "#sanFran") {
// 	// // 		$("#interest").show();
// 	// // 		$("button#next3").show();
// 	// // 	}
// 	// // 	});
// 	// //
// 	// // });
// 	// //
// 	// // $("button#next3").click(function() {
// 	// // 	var interestSelect = $("input:radio[name=question3]:checked").val();
// 	// 	$("button#next4").show();
//
// 	/*	if (interestSelect == "#backEnd") {
// 			$("workEnviro").show();
// 		} else {
// 			$(alert("CSS is the best track for you!"));
// 		}*/
//
//
// 	});
//
//
//
// });
