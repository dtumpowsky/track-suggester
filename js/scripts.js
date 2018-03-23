
//Back-end Logic//


var trackCSS = "CSS"
var trackPHP = "PHP"
var trackC# = "C#"
var trackJava = "Java"

var interest = $("#csInterest").val();
var city = $("#city").val();
var workEnviro = $("#wkEnviro").val();
var corpSeattle = $("#corpSeattle").val();
var corpSanFran = $("#corpSanFran").val()


if (city === "#seattle" || "sanFran" && interest === "#frontEnd") {
	return trackCSS
}

if (city === "#seattle" && interest === "#backEnd" && workEnviro === "corp" && corpSeatte === "corpAmazon") {
	return trackJava
} else {
	return trackC#
}

if (city === "#sanFran" && interest === "#backEnd" && workEnviro === "corp" && corpSanFran === "corpGoogle") {
	return trackJava
} else {
	return trackC#
}

if (city === "#seattle" || "sanFran" && interest === "#backEnd" & workEnviro === "#startUp") {
	return trackPHP
}






//Front-end Logic//

$(document).ready(function() {

	$("button#next1").click(function() {
		var name = $("input#nameInput").val();
		var response = (confirm("Welcome to the next chapter " + name));

		if (response == true) {
			$("#csInterest").show();
		}
	});

});
