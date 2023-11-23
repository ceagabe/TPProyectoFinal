

// para el html registro
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");

}
signUp.onclick = function () {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");

}

const userNameField = document.querySelector("[placeholder=Nombre]");
const emailField = document.querySelector("[placeholder=Correo]");
const passwordField = document.querySelector("[placeholder=Contraseña]");

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length <= 0) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message;
        
    } 
    else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        
        
    }
}

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 9 && !regex.test(fieldValue)) {
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Por favor ingrese un correo válido";
    } else {
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";

    }
}

userNameField.addEventListener("blur", (e) => validateEmptyField ("Por favor ingrese su Nombre", e));
emailField.addEventListener("blur", (e) => validateEmptyField ("Por favor ingrese su Correo", e));
passwordField.addEventListener("blur", (e) => validateEmptyField ("Por favor ingrese su Contraseña", e));
emailField.addEventListener("input", validateEmailFormat);



