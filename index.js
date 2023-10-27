

// Burger menu
burger_menu.addEventListener('click', () => {
    burger_menu.classList.toggle('active')
    burger.classList.toggle('active')
    nav_ul.classList.toggle('nav_active')
    nav.classList.toggle('nav_active')

})

// About carousel 1440px

function slider(e) {
  
        slider_img_1.style.left = `${-e}%`;
        slider_img_2.style.left = `${-e}%`;
        slider_img_3.style.left = `${-e}%`;
        slider_img_4.style.left = `${-e}%`;
        slider_img_5.style.left = `${-e}%`;

    }

btn_1.addEventListener('click', () => {

    btn_1.children[0].setAttribute('fill', '#BB945F')
    btn_2.children[0].setAttribute('fill', '#0C0C0E')
    btn_3.children[0].setAttribute('fill', '#0C0C0E')

    slider(0)
    
})
btn_2.addEventListener('click', () => {

    btn_2.children[0].setAttribute('fill', '#BB945F')
    btn_1.children[0].setAttribute('fill', '#0C0C0E')
    btn_3.children[0].setAttribute('fill', '#0C0C0E')

    slider(33.8)
})

btn_3.addEventListener('click', () => {

    btn_3.children[0].setAttribute('fill', '#BB945F')
    btn_1.children[0].setAttribute('fill', '#0C0C0E')
    btn_2.children[0].setAttribute('fill', '#0C0C0E')
    
    slider(67.8)
})




