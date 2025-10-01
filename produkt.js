const productContainer = document.querySelector("#product-container");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");


// betyder hent. link til et produkt/billede skal sættes ind her
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then((response)=>response.json())
.then(showProduct)

function showProduct(product){
console.log(product)
// inde i `` skal der ligge indholdet fra vores main -> giv main en id der skal sættes i # på øverste linje
productContainer.innerHTML = `<main>
      <h1>Fashion<span class="red">R</span>Us</h1>

      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
        alt="Produktbillede"
        class="product-card img"/>
      

      <div class="product-info">
        <div class="info-left">
          <h2>Procuct information</h2>

          <p>
            <strong> Model Name </strong> <br />
            ${product.productdisplayname}
          </p>

          <p>
            <strong>Color</strong> <br />
            ${product.basecolour}
          </p>

          <p>
            <strong>Inventory Number</strong> <br />
            1163
          </p>

          <h2>Nike</h2>

          <p>Nike, creating experiences for today's athletes</p>
        </div>

        <div class="info-right">
          <h2>
          ${product.productdisplayname}
          </h2>
          <p>Tshirts | Nike</p>

          <p>Choose a size</p>
          <select name="Size" id="">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <button>Add to basket</button>
        </div>
      </div>
    </main>`;
}
