const products=[{
    image:"https://swaggersneaker.com/wp-content/uploads/2021/02/nike-jordan-1-low-unc-1.jpg",
    title: "blue",
    price: 250,
    id:"product-1"
},
{
    image:"https://swaggersneaker.com/wp-content/uploads/2021/02/nike-jordan-1-low-unc-1.jpg",
    title: "red",
    price: 250,
    id:"product-2"
},
{
    image:"https://swaggersneaker.com/wp-content/uploads/2021/02/nike-jordan-1-low-unc-1.jpg",
    title: "green",
    price: 250,
    id:"product-3"
},
{
    image:"https://swaggersneaker.com/wp-content/uploads/2021/02/nike-jordan-1-low-unc-1.jpg",
    title: "yellow",
    price: 250,
    id:"product-4"
},
{
    image:"https://swaggersneaker.com/wp-content/uploads/2021/02/nike-jordan-1-low-unc-1.jpg",
    title: "white",
    price: 250,  
    id:"product-5"
},
];

const productList= document.querySelector(".list")
const productsMarkup= (productData) => {
let result=[];
for (i=0; i<productData.length;i++){
    const imageUrl= productData[i].image;
    const title= productData[i].title;
    const price= productData[i].price;
   const markup=
   `<li>
    <img src="${imageUrl}" alt="${title}" />

    <div class="product-text">
        <p>${title}</p>
        <p>Price:${price}</p>
      
    <button>them vao gio hang</button>    
        </div>
    </li>`;
    result.push(markup);
}
return result.join("\n");
};
productList.innerHTML=productsMarkup(products);
