const form = document.querySelector(".login-form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const mail = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if(mail === "" || password === ""){
        return alert("All form fields must be filled in");
    }
   
    const keys = {mail , password};

    console.log(keys);

    e.target.reset();
})
