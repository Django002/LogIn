const perehod = document.querySelectorAll(".perehod");
const forms = document.querySelectorAll(".blog");
const inputName = document.getElementById("input_name");
const inputEmail = document.getElementById("input_email");
const inputPassword = document.getElementById("input_password");

        
perehod.forEach(function(element) {
    element.addEventListener("click", function() {
        forms.forEach(function(form) {
            if (form.classList.contains("hidden")) {
                form.classList.remove("hidden");
                form.classList.add("nogidden");
            } else {
                form.classList.remove("nogidden");
                form.classList.add("hidden");
            }
        });
    });
});