const button = document.querySelector("#btn");


const getUsers = async ()=>{
    const users = fetch("../JSON:test APIs/users.json");
    const userData = (await users).json();

    return userData;    
}

button.addEventListener("click",()=>{
    console.log('screw')
    
    getUsers().then(users=>{
        const loginUsername = document.querySelector('#login_username').value;
        const loginPassword = document.querySelector('#login_password').value;
    
        // const loginForm = document.querySelector(".login_form");
        // loginForm.getAttribute('action');

        users.forEach(user, ()=>{
            console.log("screw you")
            if(loginUsername in user.username){
                if(loginPassword in user.password){
                    console.log("screw you");
                    // loginForm.setAttribute('action','home.html');
                }
            }
        })
    })
})
