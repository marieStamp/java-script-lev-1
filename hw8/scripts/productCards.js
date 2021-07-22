'use strict';


const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/catalogue`;
const catalogueEl = document.querySelector('.catalogue');

function getProductMarkup(product) {
    return `
        <div class="item">
            <a class="item-link" href="#">
                <img class="item__photo" src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                    <div class="item__info">
                        <p class="item__info_name">${product.name}</p>
                        <p class="item__info_price">$${product.price}</p>
                    </div>
            </a>
            <div class="addCart" data-productId="${product.id}">
                <a class="addCart-link" href="#">
                    <img class="item-cart" src="${pathToImages}/whiteCart.svg" alt="itemCart">
                    <p class="addCart_text">Add to Cart</p>
                </a>
            </div>
        </div>
    `;
}

function insertProductsIntoPage(products, catalogueEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    catalogueEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

function addEventListenersForAddCartButtons() {
    const addCartButtons = document.querySelectorAll('.addCart[data-productId]');
    addCartButtons.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductToCart(productId);
}

insertProductsIntoPage(products, catalogueEl);
addEventListenersForAddCartButtons();
