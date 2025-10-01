
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// TAGER FAT I MIN "BUTTON" DER HAR ID'EN "FILTERS" FRA MIN HTML FIL 
document.querySelectorAll("#filters button").forEach((knap)=>knap.addEventListener("click", showFiltered));



const productContainer = document.querySelector("#products");

const header = document.querySelector("h2").textContent = category

fetch(`https://kea-alt-del.dk/t7/api/products?limit=30&category=${category}`)
.then((response) => response.json())
.then((data) => {
    allData = data;
    showProducts(data);
});

// FILTRERE VISNING AF KATEGORIER I KØN
function showFiltered() {
    console.log(this.dataset.gender);
    const gender = this.dataset.gender;
    if(gender=="All"){
        showProducts(allData);
    }else{
        const fraction = allData.filter(product=> product.gender == gender);
        showProducts(fraction);
    }
}

// VISER INDHOLDET FRA MIN HTML FIL OG GØR DET DYNAMISK
function showProducts(data) {
    console.log(data);
    productContainer.innerHTML = ""; // ryd containeren først
  
    data.forEach(product => {
      productContainer.innerHTML += `
        <article class="product-card">
          <div class="image-container">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
                 alt="${product.productdisplayname}">
            <div class="sold-out>${product.soldout && "Soldout"} ${product.discount && "onSale"}">
        
  
          <h3><strong>${product.productdisplayname}</strong></h3>
          <p class="grey">${product.articletype} | ${product.brandname}</p>
          <p>DKK ${product.price},-</p>
        
      
          ${
            product.discount
              ? `<div class="sale">
                   <p>Prev. DKK ${product.price},-</p>
                   <p>Now DKK ${Math.round(product.price - (product.price * product.discount) / 100)},-</p>
                   <p class="sale-red">-${product.discount}%</p>
                 </div>`
              : ""
          }
 
 <a href="produkt.html?id=${product.id}">Read more</a>
        </article>
      `;
    });
  }
  