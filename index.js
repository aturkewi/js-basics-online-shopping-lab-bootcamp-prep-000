var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder( cardNumber ) {
   //var indexToRemove = null;
   var totalPrice = 0;
   var currentItem;


    for( var i = 0; i < cart.length; i++ ) {
        // gets first emement in cart and puts in currentItem
        currentItem = cart[i].price;
        // adds totalPrice = totalPrice + currentItem (to add the prices together)
        totalPrice += currentItem;
        if( cart.length !== null) {
          cart.splice(cart[i], 1);
          return cart;
        } else {
          if(cardNumber) {
            console.log(`Your total cost is ${totalPrice}, which will be charged to the card ${cardNumber}.`);
          } else {
          console.log('We don\'t have a credit card on file for you to place your order.');
        }
        }

    }
}