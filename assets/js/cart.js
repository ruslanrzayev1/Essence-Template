let cartProdCnt = document.getElementById('cartProdCnt')

const getProducts = () => {
  cartProdCnt.innerHTML = ``;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    let cartProd = document.createElement("div");
    cartProd.className = "cartProd";
    cartProd.innerHTML = `
        <img src="${item.image}" alt="">
        <h2>${item.name}</h2>
        <p>${item.price}</p>
        <button onclick = "removeFromCart(${index})">Remove from Cart</button>
        `;
        cartProdCnt.append(cartProd);
  });
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
};

window.onload = () => {
  getProducts();
};
