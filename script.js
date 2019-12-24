// var btn = document.getElementById("submit");
// var input1 = document.getElementsByName("input1");
// btn.addEventListener("click", () => {
// 	if (input1.value == "6H3y") {
// 		console.log()
// 	}
// }, false);
function validateForm() {
	var input1 = document.forms["form"]["input1"].value;
	var input2 = document.forms["form"]["input2"].value;
	var input3 = document.forms["form"]["input3"].value;
	var input4 = document.forms["form"]["input4"].value;

	if (input1 === "6H3y") {
		if (input2 === "6hqr") {
			if (input3 === "J0CM") {
				if (input4 === "QBJo") {
					alert(1);
					window.location.href = "video.html";
				} else {
					alert("ERROR");
				}
			} else {
				alert("ERROR");
			}
		} else {
			alert("ERROR");
		}
	} else {
		alert("ERROR");
	}
}