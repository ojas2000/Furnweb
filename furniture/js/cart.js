
import data from './product.js';



if (window.sessionStorage.getItem('user') == null) {
    console.log(window.localStorage.cart);
    var nitems = window.localStorage.cart;
    var fea_products = '';

    for (var i = 1; i <= nitems; i++) {


        fea_products = "<tr><td><img class='cimage' src=" + data[parseInt(window.localStorage.getItem('cart' + i)) - 1].image1 + "></td><td>" + data[parseInt(window.localStorage.getItem('cart' + i)) - 1].name + "</td><td> ₹" + data[parseInt(window.localStorage.getItem('cart' + i)) - 1].price + "</td><td><select class='quanin' onchange='calculatet();'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></td></tr>";
        document.getElementById('tablec').innerHTML += fea_products;



    }
  
}

else {


    var email = window.sessionStorage.getItem('user');
    var nitems = window.localStorage.getItem('cart' + email);
    var fea_products = '';
    console.log("email" + email);


    for (var i = 1; i <= nitems; i++) {
        

        fea_products = "<tr><td><img class='cimage' src=" + data[parseInt(window.localStorage.getItem('cart' + email + i)) - 1].image1 + "></td><td>" + data[parseInt(window.localStorage.getItem('cart' + email + i)) - 1].name + "</td><td> ₹" + data[parseInt(window.localStorage.getItem('cart' + email + i)) - 1].price + "</td><td><select value='1' class='quanin' onchange='calculatet();'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></td></tr>";
        document.getElementById('tablec').innerHTML += fea_products;
    }


}
if (nitems == null||nitems==0) {
    fea_products = "<tr><th colspan='4' ><h1 style='text-align:center!important; padding-right:2rem;'> No Items In Cart  </h1></th><tr>"
    document.getElementById('headingstable').style = "display:none;";
}
else {
    fea_products = "<tr><th colspan='3'><h1  >Sub Total      -</h1></th><th><h1 id='helpme' style='text-align:center!important;'></h1></th><tr>"
}

document.getElementById('tablec').innerHTML += fea_products;



var email = window.sessionStorage.getItem('user');
        var total = 0;

       

        var quan = document.getElementsByClassName('quanin')
       
        for (var i = 1; i <= quan.length; i++) {

            if (email == null) {
                total += quan[i - 1].value * parseFloat(data[parseInt(window.localStorage.getItem('cart' + i)) - 1].price)
                

            }
            else {
                total += quan[i - 1].value * parseFloat(data[parseInt(window.localStorage.getItem('cart'+email + i)) - 1].price)

            }
            
        }
       
        
        document.getElementById('SubTC').innerHTML = "₹" + parseInt(total+1);
        document.getElementById('SubTC1').innerHTML = "₹" + parseInt(total+1);
        document.getElementById('helpme').innerHTML = "₹" + parseInt(total+1);


