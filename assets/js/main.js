// class User {
//     constructor(name, surname, password){
//         this.name = name;
//         this.surname = surname;
//         this.password = password;
//     }
// }
// document.querySelector("#register").addEventListener("click", () => {
//     const name = document.querySelector("#name").value;
//     const surname = document.querySelector("#surname").value;
//     const password = document.querySelector("#password").value;
//     const user = new User(name, surname, password);

//     console.log(user);
//     document.querySelector("#name").value = "";
//     document.querySelector("#surname").value = "";
//     document.querySelector("#password").value = "";
// })
// class User{
//     constructor(name,second,email,password,confirmpassword){
//        this.name = name; 
//        this.second = second;
//        this.email = email;
//        this.password = password;
//        this.confirmpassword = confirmpassword;
//     }
// }

// document.querySelector("#sign").addEventListener("click", () => {
//     const name = document.querySelector("#name").value;
//     const second = document.querySelector("#second").value;
//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     const confirmpassword = document.querySelector("#confirmpassword").value;

//     const user = new User(name,second,email,password,confirmpassword);

//     console.log(user);
//     document.querySelector("#name").value = "";
//     document.querySelector("#second").value = "";
//     document.querySelector("#email").value = ""; 
//     document.querySelector("#password").value = "";
//     document.querySelector("#confirmpassword").value = "";
// })










document.querySelector("#sign").addEventListener("click", () => {
        let name = document.querySelector("#name").value;
        let second = document.querySelector("#second").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let confirmpassword = document.querySelector("#confirmpassword").value;
        let errormsg = document.querySelector("#errormessage");

        if(password.length < 8){
            errormsg.style.color = "red";
            errormsg.innerHTML = "8den asagidir";
        }else {
            if(password !== confirmpassword){
                errormsg.style.color = "red";
                errormsg.innerHTML = "SEHVDI";
                password.style.border = "2px solid red";
            } else {
                errormsg.innerHTML = "";
                let user = {
                    name,
                    second,
                    email,
                    password,
                    confirmpassword,
                };
                console.log(user);
            }
        }
    })