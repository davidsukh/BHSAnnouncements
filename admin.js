function input()
{
	var table = document.getElementById("table1")
	var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
	var question1 = prompt("date?");
	var question2 = prompt("what is the event?")

	if (question1 && question2 != null){

		cell1.innerHTML = question1;
		cell2.innerHTML = question2;
		cell3.innerHTML = "<button> Add to Calendar </button>";
	}
}