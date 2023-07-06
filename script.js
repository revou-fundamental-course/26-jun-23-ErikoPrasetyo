const nameinput = document.getElementById("nameinput");
const emailinput = document.getElementById("emailinput");
const phonenumber = document.getElementById("phonenumber");
const message = document.getElementById("message");
const submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", function(event) {
    event.preventDefault()
    const nameinputValue = nameinput.value
    const emailinputvalue = emailinput.value
    nameValidation(nameinputValue, emailinputvalue)
})

function nameValidation(namein, emailin) {
    if (namein == "" || emailin =="") {
        alert("Form tidak boleh kosong")
    } else {
        alert("Succes")
    }
    }

