const APIPath = "../JSON:test APIs/groups.json";
const workGrid = document.querySelector('.main_body');
let groups = [];

fetch("../JSON:test APIs/groups.json")
    .then(response => response.json())
    .then((data) => {
        groups = data;
        updateGroups(data);
    });
function updateGroups(groups) {
    let count = 0;
    let allCardsDom = '';
    groups.forEach((group)=>{
        if (count % 2 === 0){
            console.log('please work');
            var cardTemplate = 
            `<div class="prow">
            <div class="product_container">
                <div class="product-details">
                    <h1>${group.name}</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <p class="information">${group['long deslong descriptionription']}</p>
                    <div class="control">
                        <button class="btn">
                            <span class="price">${group.fee}</span>
                            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span class="buy">Join now</span>
                        </button>
                    </div>
                </div>
                <div class="product-image">
                    <img src="${group["page image"]}" alt="">
                    <div class="info">
                        <h2> Group info</h2>
                        <ul>
                            <li><strong>Location : </strong>${group.location}. </li>
                            <li><strong>Members : </strong>6</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="jzdbox1 jzdbasf jzdcal">
                <div class="jzdcalt">${group.date} 2022</div>
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span>1</span>
                <span class="circle" data-title="Drag race at Music city speedway">2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span class="circle" data-title="2 month anniversary!">12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span class="circle" data-title="#MusicMonday - share your favorite song!">22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
            </div>
        </div>`; 
        count += 1;
        allCardsDom +=cardTemplate;
        } 
        else {
        cardTemplate = 
            `<div class="prow">
            <div class="jzdbox1 jzdbasf jzdcal">
                <div class="jzdcalt">${group.date} 2022</div>
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span>1</span>
                <span class="circle" data-title="Drive up to ND">2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span class="circle" data-title="Toy drive">12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span class="circle" data-title="Car meet at Knicks">22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
                <span class="jzdb"></span>
            </div>
            <div class="product_container">
                <div class="product-details">
                    <h1>${group.name}</h1>
                    <span class="hint-star star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <p class="information">"${group["long description"]}</p>
                    <div class="control">
                        <button class="btn">
                            <span class="price">${group.fee}</span>
                            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span class="buy">Join now</span>
                        </button>
                    </div>
                </div>
                <div class="product-image">
                    <img src="${group["page image"]}" alt="">
                    <div class="info">
                        <h2> Group info</h2>
                        <ul>
                            <li><strong>Location : </strong>${group.location} </li>
                            <li><strong>Members : </strong>6</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>`;
        count += 1;
        allCardsDom +=cardTemplate;
        }
    })
    workGrid.innerHTML = allCardsDom;
}
