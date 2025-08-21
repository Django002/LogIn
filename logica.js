const perehod = document.querySelectorAll(".perehod");
const forms = document.querySelectorAll(".blog");
const Input = document.querySelectorAll(".input_text");
const FormSubmit = document.querySelectorAll(".form_regist");

        
perehod.forEach(function(e) {
    e.addEventListener("click", function() {
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

FormSubmit.addEventListener("submit", function (e) {
    e.preventDefault;
    let inputName = document.getElementById("input_name");
    let inputEmail = document.getElementById("input_email");
    let inputPassword = document.getElementById("input_password");
    let Valide=true;

    const clearErrors = () => {
        document.querySelectorAll(".novalideMesage").forEach(error => error.remove());
    }

    const errorForm = (message,input) => {
        let messageError = document.createElement("div");
        messageError.className = "novalideMesage";
        messageError.textContent = message;
        input.parentElement.appendChild(messageError);
        message.className.add("novalide");
        Valide=false;
    }
    clearErrors();

    if(!inputName.value.trim()) errorForm("Введите имя", inputName);

    if(!/^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/.test(inputEmail.value.trim())) errorForm("Введите пожалйста корекно ваш почтовый адрес",inputEmail)

    if(inputPassword.value.length<6) errorForm("Слишком короткий пароль", inputPassword);

    console.log(inputEmail)
    console.log(inputName)
    console.log(inputPassword)
})


