var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
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