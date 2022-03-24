const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");


submit.addEventListener("click", (e) => {
  e.preventDefault()
  validate();

})

function validate() {
  if (firstName.value === "" && lastName.value === "" && email.value === "" && message.value === "") {
    alert("Please fill out form completely!")
  } else {
    alert(firstName.value + "" + ", Thankyou for reaching out. We'll get back to you shortly!");
  }
}
