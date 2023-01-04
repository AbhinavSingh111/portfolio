(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function check() {
    var inputs = document.getElementsByTagName("input");
    var textareas = document.getElementsByTagName("textarea");
    var filled = true;
    var oneChecked = false;
    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text" && !inputs[i].value) {
            filled = false;
        }
        
        if (inputs[i].type === "radio" && inputs[i].checked) {
            oneChecked = true;
        }

    }

    if (!oneChecked) {
        filled = false;
    }

    for (var j = 0; j < textareas.length; j++) {
        if (!textareas[j].value) {
            filled = false;
        }
    }
    
    if (filled) {
        document.getElementById("form_submit_button").disabled = false;
        
        
        

    } else {
        document.getElementById("form_submit_button").disabled = true;
    }
    
}
