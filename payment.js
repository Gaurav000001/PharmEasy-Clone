window.addEventListener("load",function(){
    let cartTotal = localStorage.getItem("cart-total");
    let totalPrice = localStorage.getItem("total-price");
    let totalDiscount = localStorage.getItem("total-discount");

    let givingDiscountOf = document.querySelector("#showAssets>div>p>span");
    let givingDis = document.getElementById("givingDis");

    let dis_totalPrice = document.getElementById("totalPrice");
    let dis_cartTotal = document.getElementById("cart-total");
    let dis_mainCartTotal = document.getElementById("mainCart-total");

    dis_totalPrice.innerText = totalPrice;
    dis_cartTotal.innerText = cartTotal;
    dis_mainCartTotal.innerText = cartTotal; 

    givingDiscountOf.innerText = Number(totalDiscount)+100;
    givingDis.innerText = totalDiscount;

});




let paytm = document.querySelector(".radio");
let amazon = document.querySelector(".radio1");
let mobi = document.querySelector(".radio2");
let cash = document.querySelector(".radio3");

let dis_paytm = document.querySelector(".paytmbtn");
let dis_amazon = document.querySelector(".amazonbtn");
let dis_mobi = document.querySelector(".mobibtn");
let dis_cash = document.querySelector(".cashbtn");

dis_cash.addEventListener("click",function(){
    swal({
        title: "Order Placed Succefully!",
        text: "Your Order has been Placed Successfully",
        icon: "success",
        buttons: ["Stay!", "Visit Home"],
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
          window.location.href = "./index.html"
        } else {
          
        }
    });
      
})

paytm.addEventListener("click",function(){
    dis_paytm.classList.remove("dis");
    dis_amazon.classList.add("dis");
    dis_mobi.classList.add("dis");
    dis_cash.classList.add("dis");
})
amazon.addEventListener("click",function(){
    dis_amazon.classList.remove("dis");
    dis_mobi.classList.add("dis");
    dis_paytm.classList.add("dis");
    dis_cash.classList.add("dis");
})
mobi.addEventListener("click",function(){
    dis_mobi.classList.remove("dis");
    dis_amazon.classList.add("dis");
    dis_paytm.classList.add("dis");
    dis_cash.classList.add("dis");
})
cash.addEventListener("click",function(){
    dis_cash.classList.remove("dis");
    dis_mobi.classList.add("dis");
    dis_amazon.classList.add("dis");
    dis_paytm.classList.add("dis");
})



let displayAssets = document.getElementById("showAssets");
    displayAssets.addEventListener("click",function(){
        let svg = document.getElementById("svg");
        let mainAssets = document.getElementById("mainAssets");
        if(!svg.classList.contains('rotate') && mainAssets.classList.contains('disp')){
            svg.classList.add('rotate');
            mainAssets.classList.remove('disp');
        }
        else{
            svg.classList.remove('rotate');
            mainAssets.classList.add('disp');
        }
    })