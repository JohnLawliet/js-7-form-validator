const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector(".message-container")
const message = document.getElementById("message")

let isValid = false
let passwordMatch = false

const validateForm = () => {
    //Using constraint API
    isValid = form.checkValidity()
    if (!isValid){
        message.textContent = "Fill out all fields nigga"
        message.style.color = 'red'
        messageContainer.style.borderColor = "red"
        return
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value){
        passwordMatch = true
        password1El.style.borderColor = 'green'
        password1El.style.borderColor = 'green'
    }
    else {
        passwordMatch = false
        message.textContent = "Make sure passwords match"
        message.style.color = 'red'
        messageContainer.style.borderColor = "red"
        password1El.style.borderColor = "red"
        password2El.style.borderColor = "red"
        return
    }
    // if form is valid and pswd match
    if (isValid && passwordMatch){
        message.textContent = "Successfuly registered"
        message.style.color = 'green'
        messageContainer.style.borderColor = "green"
    }
}

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
}

const processFormData = (e) => {
    e.preventDefault()
    //Validate form
    validateForm()
    // If valid
    if (isValid && passwordMatch){
        storeFormData()
    }
}



//event listener
form.addEventListener('submit',processFormData)