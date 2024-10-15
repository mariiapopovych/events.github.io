let userName = document.getElementById("name");
console.log(userName)
let email = document.getElementById("email");
console.log(email)
let telNumber = document.getElementById("number");
console.log(telNumber)
let text = document.getElementById("textarea")
console.log(text)
let button = document.getElementById("submit");
console.log(button)

button.addEventListener("click", function(e) {
    e.preventDefault()

    if (userName.value.length === 0){
        userName.style.border = "2px solid red";
        alert("please fill correctly")

    } else if (!email.value.includes("@")) {
        email.style.border = "2px solid red";
        alert("please fill correctly")
    } else if (text.value.length === 0) {
        text.style.border = "2px solid red";
        alert("please fill correctly")
    }


})
