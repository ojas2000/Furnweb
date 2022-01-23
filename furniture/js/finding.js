import db from './firebase.js'

let product_list = document.querySelector('#products')
let counter = 0
function fetch(){
    db.database().ref('/').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let image1 = ChildSnapshot.val().image1
                let name = ChildSnapshot.val().name
                let old_price = ChildSnapshot.val().old_price
                let price = ChildSnapshot.val().price
                let id = ChildSnapshot.val().id
                let cat = ChildSnapshot.val().category
                let image2 = ChildSnapshot.val().image2
               
                counter +=1
                main(image2,image1,name,old_price,price,id,counter,cat)

            }    
        );
    })
}
function main(image2,image1,name,old_price,price,id,count,cat){



        let prod = `
  
            <div class= "itemBox `+cat+` col-4 col-md-6 col-sm-12 " >
            
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${image1}" alt="">
                        <img src="${image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <button  class="btn-flat btn-hover btn-shop-now" onclick="var interior = 'interior';var exterior = 'exterior';var gifting = 'gifting';var summer = 'summer';mains(`+id+","+cat+`);">shop now</button>
                        </div>
                        <div class="product-card-name">
                            ${name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${old_price}</del></span>
                            <span class="curr-price">${price}</span>
                        </div>
                    </div>
                
                </div>
            </div>
            
        `
        product_list.insertAdjacentHTML("beforeend", prod);
        
    

}
window.onload(fetch())

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))

