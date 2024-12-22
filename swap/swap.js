function swaping(){
            var a = parseInt(document.sw.a.value); 
            var b = parseInt(document.sw.b.value);

            var before = "Before Swapping: a = " + a + ", b = " + b;

            a = a + b; 
            b = a - b; 
            a = a - b; 

            var after = "After Swapping: a = " + a + ", b = " + b;

            document.getElementById("before").innerText = before;
            document.getElementById("after").innerText = after;
}