function calculateAge() {
	var dob = new Date(1999, 10, 29);
	var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
	var age = Math.abs(age_dt.getUTCFullYear() - 1970);
	
	var ageData = document.getElementById("ageData");
	ageData.appendChild(document.createTextNode(age));
}