import db from './firebase.js';

var fea_products = '';

function fetch(){
    db.database().ref('/').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let image1 = ChildSnapshot.val().image1
                let name = ChildSnapshot.val().name
                let price = ChildSnapshot.val().price
                let id = ChildSnapshot.val().id
                let cat = ChildSnapshot.val().category
                if(cat == window.sessionStorage.getItem('category')){
                    main(image1,name,price,id)
                }
                

            }    
        );
    })
    
}
function main(image1,name,price,id){




    fea_products = "<div class='swiper-slide box'><div class='icons'><button class='btn' onclick='lalala(this.value);' value="+id+" style='width:50%;'> <i class='fas fa-shopping-cart'></i></button></div><div class='image'><img class='images' src="+image1+" alt="+id+"></div><div class='content'><h3>"+name+"</h3><div class='price'>"+price+"<span>$20.99</span></div><button onclick='main("+id+")' class='btn'>Buy Now</button></div></div>"
    
    document.getElementById('wrap').innerHTML += fea_products
    $( ".images" ).mouseenter(function() {
        window.source = this.src
        this.src = "image/product"+this.alt+"-2"+".png";
       
      });
      $( ".images" ).mouseleave(function() {
        this.src = window.source
      })
    

}



  window.onload(fetch())

