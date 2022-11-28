const local = localStorage.getItem("products");
const products = JSON.parse(local);

const productList = document.querySelector(".list");
const productsMarkup = (productData) => {
  let result = [];
  for (i = 0; i < productData.length; i++) {
    const imageUrl = productData[i].image;
    const title = productData[i].title;
    const price = productData[i].price;
    const markup = `<li>
<img src="${imageUrl}" alt="${title}" />

<div class="product-text">
  <p>${title}</p>
  <p>Price:${price}</p>

<button>them vao gio hang</button>
<button onclick="deleteItem(${productData[i].id})">Xoa</button>  
  </div>
</li>`;
    result.push(markup);
  }
  return result.join("\n");
};
productList.innerHTML = productsMarkup(products);

function deleteItem(event) {
  location.reload();
  if (confirm("ban co muon xoa")) {
    products.splice(event, 1);
    localStorage.setItem("products", JSON.stringify(products));
  }
}
