    function showGrade() {

        let result = document.getElementById("result");
        let value =document.getElementById("degree").value;
        if(value == ""){
            
            result.textContent = "Please enter grade";
            result.style.color = "black";
            return;
        }

        let degree = Number(value);
        
        if (degree > 100 || degree < 0) {
            result.textContent = "Invalid Grade";
            result.style.color = "black";
        }

        else if (degree >= 90) {
            result.textContent = "Excellent";
            result.style.color = "green";
        }

        else if (degree >= 80) {
            result.textContent = "Very Good";
            result.style.color = "green";
        }

        else if (degree >= 70) {
            result.textContent = "Good";
            result.style.color = "green";
        }

        else if (degree >= 60) {
            result.textContent = "Pass";
            result.style.color = "orange";
        }

        else if (degree  <= 0) {
            result.textContent = "Invalid Grade";
            result.style.color = "black";
        }
        else {
            result.textContent = "Fail";
            result.style.color = "red";
        }

    }


