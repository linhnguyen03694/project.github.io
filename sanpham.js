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

// 
// const formEl= document.querySelector("form");
//         const errorName= document.querySelector("#name ~ .error")
//         formEl.onsubmit= function (event){
//             event.preventDefault();
//             const formData= [...new FormData(formEl)];
//             const {name, image, price,title}= Object.fromEntries(formData);
//             let formValue= true;
//             if(name.trim().length===0){
//                 errorName.textContent= "thong tin khong duoc de trong";
//                 formValue= false;
//             }
//             console.log(formData);
//             if(image.length=== 0){
//                 showErrorMessege("imageUrl");
//                 formVlaue=false;
//             }
//             if(price.trim()=== 0){
//                 showErrorMessege("price");
//                 formValue= false;
//             }
//             if( title.trim() === 0){
//                 showErrorMessege("title");
//                 formValue= false;
//             }
//             if(formValue){
//                 console.log("thanh cong");
//                 // clearErrorMassege();
//             }
//             const newId= "id-" + Date.now().toString().slice(-4);
//             const  newProduct={id: newId, name, image, price, title};
//             if(!localStorage.getItem("products")){
//                 const productList= [newProduct];
//                 localStorage.setItem("products", JSON.stringify(productList));
//             }else{
//                 const oldListJson= localStorage.getItem("products");
//                 const existingList= JSON.parse(oldListJson);
//                 existingList.push(newProduct);
//                 localStorage.setItem("products",JSON.stringify(existingList));
//             }
//         }
//         const local=localStorage.getItem("products");
//         const products= JSON.parse(local); 
// const local=localStorage.getItem("products");
// const products= JSON.parse(local); 
