function fnPro() {
    let n = document.getElementById("i2").value;
    if (n == "" || n == null || n == " ") {
        alert("Enter the number");
    }
    else {
        n = Number(n);
        // program to count the number of digits in the given number
        let num = n;
        var count = 0;
        if (num >= 1) ++count;  
        while (num / 10 >= 1) {
            num /= 10;
            ++count;
        }
        // if the digits is greater than 5
        if (count > 5) {
            alert("The digit entered is bigger than 5");
        }
        // if hte digits is less than 5
        else if (count < 5) {
            alert("The digit entered is less than 5")
        }
        // if the number of digits are equal to 5
        else if (count = 5) {
            var rem, sum = 0;
            // program for sum
            while (n) {
                rem = n % 10;
                sum = sum + rem;
                n = Math.floor(n / 10);
            }
            // display the square
            document.getElementById("sq").style.width = sum + "px";
            document.getElementById("sq").style.height = sum + "px";
            document.getElementById("sq").style.backgroundColor = "#192A53";
            document.getElementById("sq").style.borderRadius = sum / 5 + "px";
        }

    }
}
