let cartItems = JSON.parse(localStorage.getItem("prod")) || [];


window.addEventListener('load',displayItems(cartItems))

function displayItems(cartItems){
    let cartProducts = document.getElementById("products");
    let paymentSection = document.getElementById("paymentSection");
    let bill = document.getElementById("bill");
    let asset = document.getElementById("asset");

    if(cartItems.length == 0){
        let beforeItems = document.getElementById("beforeItems");
    beforeItems.innerHTML = `
        <div id="countofItems">0 Items in your Cart</div>
        <div>
            <div>
                <img src="	https://assets.pharmeasy.in/web-assets/images/heart-green.svg" alt="">
                <p>Saved for Later</p>
            </div>
        </div>
        `
        cartProducts.innerHTML = null;
        paymentSection.innerHTML = `
        <div id="totalPrice">
            <span>Cart Total:</span><span> ₹00.00</span>
        </div>
        <div>
            <div>
                <div>
                    <img src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg" alt="">
                    <p>Apply Coupons</p>
                </div>
                <img src="https://assets.pharmeasy.in/web-assets/images/icChevronRight.svg" alt="">
            </div>
            <a href="./productpage.html">Add Products</a>
        </div>
        `;

        bill.innerHTML = null;
        asset.innerHTML = null;
        document.getElementById("container").style.marginTop = "0px";
    }
    else{
        let cartTotal = 0;
        let totalPrice = 0;
        let totalDiscount = 0;

        
        beforeItems.innerHTML = `
        <div id="countofItems">${cartItems.length} Items in your Cart</div>
        <div>
        <div>
        <img src="	https://assets.pharmeasy.in/web-assets/images/heart-green.svg" alt="">
        <p>Saved for Later</p>
        </div>
        </div>
        `
        cartProducts.innerHTML = cartItems.map((item)=>{
            let price = Number(item.price);
            let priceToPay = price - ((price/10)*2);
            let discount = price - priceToPay;
            cartTotal += priceToPay;
            totalPrice += price;
            totalDiscount += discount;

            setIt(cartTotal,totalPrice,totalDiscount);

            return `
            <div>
                <div>
                    <img id="avatar" src=${item.avatar} alt="">
                    <div>
                        <p>${item.Title}</p>
                        <p>${item.createdAt}</p>
                        <p>${item.description}</p>
                        <div><span>MRP </span><span>₹${item.price}*</span><span> ₹${priceToPay}*</span></div>
                        <div>Delivery by <span>Tomorrow, before 10:00 pm</span></div>
                    </div>
                </div>
                <div>
                    <img id="dltbtn" src="https://assets.pharmeasy.in/web-assets/images/icDelete.svg" class="delete" alt="">
                    <select name="" id="">
                        <option value="">Qty</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                    </select>
                </div>
            </div>
            `
        }).join("");


        paymentSection.innerHTML = `
        <div id="totalPrice">
            <span>Cart Total:</span><span> ₹${cartTotal.toFixed(2)}</span>
        </div>
        <div>
            <div>
                <div>
                    <img src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg" alt="">
                    <p>Apply Coupons</p>
                </div>
                <img src="https://assets.pharmeasy.in/web-assets/images/icChevronRight.svg" alt="">
            </div>
            <button id="paymentpage">Proceed to Pay</button>
        </div>
        `;
        
        bill.innerHTML = `
        <p>Bill Summary</p>
        <div>
            <div>
                <div class="colorForValue">Cart Value</div>
                <div>
                    <span class="cross">₹${totalPrice.toFixed(2)}</span>
                    <span>₹${cartTotal.toFixed(2)}</span>
                </div>
            </div>
            <div>
                <div class="colorForValue">Delivery Charges</div>
                <div>
                    <span class="cross">₹20</span>
                    <span style="color: green;">FREE</span>
                </div>
            </div>
        </div>
        <div class="tobePaid">
            <p>Amount to be Paid</p>
            <span>₹${cartTotal.toFixed(2)}</span>
        </div>
        `;

        asset.innerHTML = `
        <div id="showAssets">
            <div>
                <img src="	https://assets.pharmeasy.in/web-assets/images/icRupee.svg" alt="">
                <p>Total Savings of ₹${(totalDiscount+20).toFixed(2)} on this order</p>
            </div>
            <svg width="20" height="20" viewBox="0 2 20 20" id="svg"><path fill="currentColor" fill-rule="evenodd" d="M16.6 8.6L12 13.2 7.4 8.6 6 10l6 6 6-6z"></path></svg>
        </div>
        <div id="mainAssets" class="dis">
            <ul>
                <li>
                    <span>MRP Discount 23.74%</span>
                    <span>₹${totalDiscount.toFixed(2)}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>Delivery Charges Waiver</span>
                    <span>₹15</span>
                </li>
            </ul>
        </div>
        `;
    }
    let all_delete_btn = document.querySelectorAll(".delete");
    all_delete_btn.forEach((item,index)=>{
        item.addEventListener("click",function(){
            swal({
                text: "Are you sure to remove this Product!",
                buttons: ["Remove", "Cancel"],
                dangerMode: true,
              })
              .then((willDelete) => {
                    if (willDelete) {
                    
                    } 
                    else {
                        swal("Product has been Deleted from Cart!", {
                        icon: "success",
                        });
                        deleteProduct(index,cartItems);
                    }
                });
              
        })
    })

    let displayAssets = document.getElementById("showAssets");
    displayAssets.addEventListener("click",function(){
        let svg = document.getElementById("svg");
        let mainAssets = document.getElementById("mainAssets");
        if(!svg.classList.contains('rotate') && mainAssets.classList.contains('dis')){
            svg.classList.add('rotate');
            mainAssets.classList.remove('dis');
        }
        else{
            svg.classList.remove('rotate');
            mainAssets.classList.add('dis');
        }
    })
}


function deleteProduct(index,cartItems){
    cartItems.splice(index,1);
    localStorage.setItem("prod",JSON.stringify(cartItems));
    displayItems(cartItems);
}


document.getElementById("paymentpage").addEventListener("click",function(){
    window.location.href = "./payment.html"
});


function setIt(cartTotal,totalPrice,totalDiscount){
    localStorage.setItem("cart-total",cartTotal.toFixed(2));
    localStorage.setItem("total-price",totalPrice.toFixed(2));
    localStorage.setItem("total-discount",totalDiscount.toFixed(2));
}