function ageFn() {
    age = parseInt(document.getElementById("num1").value);

    if(age < 18) {
        document.getElementById("resultShow").value="Sorry! You are not Eligible To Vote.";
    } else if(age >= 18) {
        document.getElementById("resultShow").value="You are Eligible to Vote!";
    } else {
        alert("Invalid Input!")
        document.getElementById("resultShow").value="Maybe Wrong Input...";
    }
}