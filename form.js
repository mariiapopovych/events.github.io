

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


class User  {
    constructor(id, userName, email, text) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.text = text    
    }

    saveUser() {
        const list = [this.id, this.email, this.text]
        
        localStorage.setItem(this.userName, JSON.stringify(list));
    }
}

function generateId () {
    return Date.now().toString();
}

function clear() {
    userName.value = ""
    email.value=""
    telNumber.value=""
    text.value=""
}


button.addEventListener("click", function(e) {
    e.preventDefault()

    if (userName.value.length === 0) { 
        userName.style.border = "2px solid red";
        alert("please fill name correctly")

    } else if (!email.value.includes("@")) {
        email.style.border = "2px solid red";
        alert("please fill your email correctly")

    } else if (text.value.length === 0) {
        text.style.border = "2px solid red";
        alert("please fill you Number correctly")
    }

    let user_id = generateId ()

    user = new User(user_id, userName.value, email.value, text.value)

    user.saveUser()
    clear()
    alert("Thank you for your feedback")

   



})


