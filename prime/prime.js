function printvalue() {
    var n = document.form1.msd.value;
    var result = " ";  

    for (var j = 2; j <= n; j++) { 
        var count = 0;

        
        for (var i = 1; i <= j; i++) {
            if (j % i == 0) {
                count++;
            }
        }

        
        if (count == 2) {
            result = result + j + " ";
        }
    }

    document.getElementById("result").innerText = result; 
}