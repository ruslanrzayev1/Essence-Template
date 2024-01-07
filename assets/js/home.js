let homeProdCnt = document.getElementById("homeProdCnt");
let loadMore = document.getElementById("loadMore");
let page = 1;
let limit = 3;

const renderProducts = () => {
  axios
    .get(
      `https://655c83c825b76d9884fd6f17.mockapi.io/products?limit=${limit}&page=${page}`
    )
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let miniDiv = document.createElement("div");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.name}</h2>
            <p style="font-size:20px">${item.price}</p>
            <button onclick = "addToCart(${item.id})">Add to Cart</button>
            `;
        homeProdCnt.append(miniDiv);
      });
      page++;
    });
};

loadMore.addEventListener("click", renderProducts);

const addToCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart);
};

window.onload = () => {
  renderProducts();
};

let searchBtn = document.getElementById("searchBtn");
let searchInp = document.getElementById("searchInp");

function findByName() {
  homeProdCnt.innerHTML = ``;
  axios
    .get("https://655c83c825b76d9884fd6f17.mockapi.io/products")
    .then((res) => {
      db = res.data;
      let filteredData = db.filter((item) =>
        item.name.toLowerCase().startsWith(searchInp.value.toLowerCase())
      );
      let sortData = [...filteredData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      sortData.map((item) => {
        let miniDiv = document.createElement("div");
        miniDiv.className = "miniDiv";
        miniDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h2>${item.name}</h2>
        <p style="font-size:20px">${item.price}</p>
        <button onclick = "addToCart(${item.id})">Add to Cart</button>
        `;
        homeProdCnt.append(miniDiv);
      });
    });
}

searchBtn.addEventListener("click", findByName);
