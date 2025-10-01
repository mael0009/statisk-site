
const categorylist = document.querySelector(".categories-grid");

fetch("https://kea-alt-del.dk/t7/api/categories")
.then(response => response.json())
.then((categories) => showCategories(categories));

function showCategories(categories){
    categories.forEach((category) => {
        categorylist.innerHTML += `<a href="produktliste.html?category=${category.category}" class="category-box">${category.category}</a>`;
    });
}








{/* <a href="produktliste.html" class="category-box">Accessories</a>
<a href="produktliste.html" class="category-box">Apparel</a>
<a href="produktliste.html" class="category-box">Footwear</a>
<a href="produktliste.html" class="category-box">Free Items</a>
<a href="produktliste.html" class="category-box">Personal Care</a>
<a href="produktliste.html" class="category-box">Sporting Goods</a> */}