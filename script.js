let deliver_div = document.querySelector('.deliver');
deliver_div.addEventListener("mouseover", (e) => {
    deliver_div.style.border = "1px solid black";
})
deliver_div.addEventListener("mouseout", (e) => {
    deliver_div.style.border = "none";
})

let return_div = document.querySelector('.returns');
return_div.addEventListener("mouseover", (e) => {
    return_div.style.border = "1px solid black";
})
return_div.addEventListener("mouseout", (e) => {
    return_div.style.border = "none";
})

var subheader_div = document.querySelector(".subheader-grid-container");
var subheader_children = subheader_div.children;

console.log(typeof (subheader_children));
for (let y = 0; y < subheader_children.length; y++) {
    subheader_children[y].addEventListener("mouseover", (e) => {
        subheader_children[y].classList.add("sh-hover");
    })
}

for (let y = 0; y < subheader_children.length; y++) {
    subheader_children[y].addEventListener("mouseout", (e) => {
        subheader_children[y].classList.add("sh-hoverout");
    })
}


//ajax fetching of data using async block

async function fetch_card_data() {
    try {
        let card_fetch_result = await fetch("https://dummyjson.com/products");
        let card_result_json = await card_fetch_result.json();
         console.log(card_result_json);
        let card_products = card_result_json.products;

        card_products.map((imageObj,index) =>{

            card_container.innerHTML = card_container.innerHTML + ` 
            <div class="card">
                <div class="card-image">
                    <img src=${imageObj.thumbnail} 
                    alt=${imageObj.title}>
                </div>
                <div class="card-content">
                <span>${imageObj.title}<span></br>
                <span>Rating:${imageObj.rating}<span></br>
                <span>Stock:${imageObj.stock}<span></br>
                <span>Stock:${imageObj.price}<span>
                </div>
            </div> 
            `

        })
        
    }
    catch (error) {
        console.log(error);
    }
}

let card_container = document.querySelector(".card-container");
fetch_card_data();
// console.log(card_data);


// let card_img_children = card_img.children;

// for (let i = 0; i < card_img_children.length; i++) {
//     let img = document.createElement("img");
//     card_img_children[i].append(img);
//     console.log(card_data[i].images[0]);
//     img.src = card_data[i].images[0];
// }
