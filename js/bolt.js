const APIPath = "../JSON:test APIs/users.json";
const numberOfResults = 9;
const workGrid = document.querySelector('#please-work');
const searchBtn = document.querySelector('#btn-search');
let cartoons = [];

fetch("../JSON:test APIs/users.json")
    .then(response => response.json())
    .then((data) => {
        users = data;
        logUsers(data);
    });

function logUsers(users) {
    let allCardsDom = '';
    users.forEach((user)=>{
        const cardTemplate = 
            `<div class="col">
                <div class="card">
                    <img src="../images/bolt-background.png"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.username}</h5>
                        <p class="card-text">${user.email}</p>
                    </div>
                </div>
            </div>`; 
        console.log(user.email);
        allCardsDom +=cardTemplate;
    })
    workGrid.innerHTML = allCardsDom;
}
