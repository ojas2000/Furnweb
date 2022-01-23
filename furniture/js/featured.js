
import list from './brands.js';
import db from './firebase.js';

var fea_products = '';
var new_products1 = '';
var new_products2 = '';
function fetch(){
    db.database().ref('/').once('value',function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                let image1 = ChildSnapshot.val().image1
                let name = ChildSnapshot.val().name
                let price = ChildSnapshot.val().price
                let id = ChildSnapshot.val().id
                let cat = ChildSnapshot.val().cat
                
                main(image1,name,price,id,cat)

            }    
        );
    })
}
function main(image1,name,price,id,cat){




    fea_products = "<div class='swiper-slide box'><div class='icons'><button class='btn' onclick='lalala(this.value);' value="+id+" style='width:50%;'> <i class='fas fa-shopping-cart'></i></button></div><div class='image'><img class='images' src="+image1+" alt="+id+"></div><div class='content'><h3>"+name+"</h3><div class='price'>"+price+"<span>$20.99</span></div><button onclick='mains("+id+","+cat+");' class='btn'>Buy Now</button></div></div>"
    
    document.getElementById('wrap').innerHTML += fea_products
    $( ".images" ).mouseenter(function() {
        window.source = this.src
        this.src = "image/product"+this.alt+"-2"+".png";
       
      });
      $( ".images" ).mouseleave(function() {
        this.src = window.source
      })
    

}
for(var i =0; i < 3;i++){
    var stars = '';
    for(var n =0;n < list[i].rating;n++){
        stars += "<i class='fas fa-star'></i>";
    }
 
    new_products1 = "<a href='#' class='swiper-slide box'> <div class='image'> <img src="+list[i].image+" alt=''> </div> <div class='content'> <div class='price'>"+list[i].name+" </div> <div class='stars'>"+stars+"</div></div> </a>"
   
    document.getElementById('wrap1').innerHTML += new_products1;
  
}
for(var i =3; i < 6;i++){
    var stars = '';
    for(var n =0;n < list[i].rating;n++){
        stars += "<i class='fas fa-star'></i>";
    }
    
    new_products2 = "<a href='#' class='swiper-slide box'> <div class='image'> <img src="+list[i].image+" alt=''> </div> <div class='content'> <div class='price'>"+list[i].name+" </div> <div class='stars'>"+stars+"</div> </div> </a>"
   
    document.getElementById('wrap2').innerHTML += new_products2;
  
}



  window.onload(fetch())

