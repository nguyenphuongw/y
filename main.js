const btnProducts = document.querySelectorAll('.js-product-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

// nổi bọt
const modalContainer = document.querySelector('.js-modal-container');



function showContainer() {
    modal.classList.add('open')
}

function removeContainer() {
    modal.classList.remove('open')
}

for (const btnProduct of btnProducts) {
    btnProduct.addEventListener('click', showContainer)
}

modalClose.addEventListener('click', removeContainer)
modal.addEventListener('click', removeContainer)


modalContainer.addEventListener('click', function () {
    event.stopPropagation()
})

