// import { productList } from "./products.js";
// 


// removelibrary
function removeMovie(id) {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    const index = library.findIndex((item) => item.id === id);

    if (index == -1) {
        let itemDisplay = document.getElementById("productDetails");
        itemDisplay.innerHTML = "your library is empty";

    } else {
        console.log("there is something in the library");
        console.log(index);
    }
    //   return;

    library.splice(index, 1);
    localStorage.setItem("library", JSON.stringify(library));

    //   update remaining items in the library by reloading;
    window.location.href = 'library.html'
}

// to update each item quantity
// let library = JSON.parse(localStorage.getItem("library")) || [];
// function updateQuantity(itemId, newQuantity) {
//     // to find the item in the library
//     const item = library.find((item) => item.id === itemId);
//     if (item) {
//         // update item quantity
//         item.quantity = newQuantity;
//         console.log(newQuantity);

//         //    update UI
//         const elementQuantity = document.getElementById("quantity-${itemId}");
//         if (elementQuantity) {
//             elementQuantity.textContent = item.quantity;
//             console.log(newQuantity);
//         }
//     }
// }

// event listener to update quantity

// document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("increment-btn")) {
//         const itemId = parseInt(event.target.dataset.itemId);
//         const item = library.find((item) => item.id === itemId);
//         if (item) {
//             updateQuantity(itemId, item.quantity + 1);
//         }
//     }
// });

// To display library item(s)
const productsClicked = localStorage.getItem("library");
const libraryProducts = JSON.parse(productsClicked);
console.log(JSON.parse(productsClicked));
libraryProducts.map((item, index) => {
    let itemDisplay = document.getElementById("productDetails");
    let aboutItem = document.createElement("div");
    aboutItem.setAttribute("id", "aboutItem");
    aboutItem.innerHTML = `
              <div class="product">
              <img
                src="${item.image}"
                alt=""
              />
            </div>
            <div class="about">
            <b>${item.title}</b>
            <p>Directed by:${item.director}</p>
            <div class="icon" onclick="removeMovie(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg></div>
          </div>   
            </div>
          `;

    itemDisplay.appendChild(aboutItem);
});

// localStorage.setItem("libraryLength", JSON.stringify(library.length));
// console.log(updatelibrary);
// let updatelibrary = localStorage.getItem("libraryLength");
// document.getElementById("libraryLength").innerHTML = updatelibrary;
// document.getElementById(
//     "itemLength"
// ).innerHTML = `You have ${updatelibrary} items in your library`;
// if (updatelibrary == 0 || !library) {
//     let itemDisplay = document.getElementById("productDetails");
//     itemDisplay.innerHTML = "your library is empty";
// }


