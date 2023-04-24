function calculateAge() {
    var currentDate = new Date();
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if (day == "" || month == "" || year == "") {
        alert("Please enter a valid date of birth.");
        return false;
    }

    var inputDate = new Date(year, month - 1, day);

    if (inputDate > currentDate) {
        alert("Please enter a valid date of birth.");
        return false;
    }

    var years = currentDate.getFullYear() - inputDate.getFullYear();
    var months = currentDate.getMonth() - inputDate.getMonth();
    var days = currentDate.getDate() - inputDate.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        var monthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += monthDays;
    }

    if(day>31 || day<=0  ){
        alert("Please select a valid date.");
        return false;
    }
    if(month > 12 || month<=0){
        alert("Please select a valid date.");
        return false;
    }
  


    var result = "Your Age is " + years + " Years " + months + " Months " + days + " Days.";
    document.getElementById("result").innerHTML = result;
}