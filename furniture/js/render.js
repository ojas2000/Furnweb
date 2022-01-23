import db from './firebase.js';

var current_id = sessionStorage.getItem("current")-1;

function fetch(){
    db.database().ref('/'+current_id+'/').once('value',function(snapshot){
   
                let image1 = snapshot.val().image1
                let image2 = snapshot.val().image2
                let name = snapshot.val().name
                let price = snapshot.val().price
                let id = snapshot.val().id
                let rating = snapshot.val().rating
                let des = snapshot.val().description
                let cat = snapshot.val().category
                main(image1,image2,name,price,id,rating,des,cat)


    })
}
function main(image1,image2,name,price,id,rating,des,cat){
    let prod = `

    <div class="col-5 col-md-12">
    <div class="product-img" id="product-img">
        <img id="imgs"src="${image1}" alt="${id}">
    </div>
    <div class="box">
        <div class="product-img-list">
            <div class="product-img-item">
                <img id="imgs2" class="imgs2" src="${image2}" alt="">
            </div>
        
        </div>
    </div>
</div>
<div class="col-7 col-md-12">
    <div class="product-info">
        <h1 style="font-size: 3.5rem">
        ${name}
        </h1>
        <div class="product-info-detail">
            <span class="product-info-detail-title"style="font-size: 2.5rem" >Rated:</span>
            <span class="rating" style="font-size: 2.5rem">
            ${rating}
            </span>
        </div>
        <p class="product-description">
           ${des}
        </p>
        <div class="product-info-price">${price}</div>

        <div>
            <button class="btn-flat btn-hover" style="text-align:left; font-size:3rem; width: max-content;" value=${id} onclick="lalala(this.value);">Add to cart</button>
        </div>
    </div>
</div>
        
    `
window.sessionStorage.setItem('category',cat)
document.getElementById('main-row').innerHTML = prod;
$( ".imgs2" ).click(function() {
    var temp_src = document.getElementById("imgs").src
    document.getElementById("imgs").src = this.src;
    document.getElementById("imgs2").src= temp_src;
    console.log(this.src)
  });
}
window.onload(fetch())

