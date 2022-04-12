const APIPath = "../JSON:test APIs/groups.json";
const workGrid = document.querySelector('#group-grid');
let groups = [];

fetch("../JSON:test APIs/groups.json")
    .then(response => response.json())
    .then((data) => {
        groups = data;
        updateGroups(data);
    });

function updateGroups(groups) {
    let allCardsDom = '';
    groups.forEach((group)=>{
        const cardTemplate = 
            `<div class="card card-item">
                <div class="card-header">
                    Group <span class="text-muted">${group.name}</span>
                </div>
                <img src="${group.image}" alt="group-image" class="card-img-top">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h2>${group.description}</h2>
                    <div>
                        <div class="card-author">
                            <a href="#" class="author-avatar">
                                <img src="https://avatars.dicebear.com/api/male/j.svg" alt="Tedir Ghazali">
                            </a>
                            <svg class="half-circle" viewBox="0 0 106 57">
                                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                            </svg>
                            <div class="author-name">
                                <div class="author-name-prefix">Host</div>
                                ${group.host}
                            </div>
                        </div>
                        <div class="tags">
                            <a href="#">${group.interests[0]}</a>
                            <a href="#">${group.interests[1]}</a>
                        </div>
                    </div>
                </div>
            </div>`; 
        allCardsDom +=cardTemplate;
    })
    workGrid.innerHTML = allCardsDom;
}
