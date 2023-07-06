const nameinput = document.getElementById("nameinput");
const emailinput = document.getElementById("emailinput");
const submitbutton = document.getElementById("submitbutton");

submitbutton.addEventListener("click", function(event) {
    event.preventDefault()
    const nameinputValue = nameinput.value
    const emailinputvalue = emailinput.value
    nameValidation(nameinputValue, emailinputvalue)
})

function nameValidation(namein, emailin) {
    if (namein == "" || emailin =="") {
        alert("Name and Email are Empty")
    } else {
        alert("Succes")
    }
    }

